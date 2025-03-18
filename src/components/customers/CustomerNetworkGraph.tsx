
import { useState, useEffect } from "react";
import { 
  ReactFlow, 
  MiniMap, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState, 
  addEdge, 
  Node, 
  Edge,
  MarkerType,
  Connection 
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Network, Filter, AlertTriangle, CreditCard, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Import styles
import "../../styles/customer-network.css";

interface CustomerNetworkGraphProps {
  open: boolean;
  onClose: () => void;
  customers: any[];
}

export default function CustomerNetworkGraph({ open, onClose, customers }: CustomerNetworkGraphProps) {
  const [viewMode, setViewMode] = useState<"risk" | "transactions" | "country">("risk");
  
  // Generate initial nodes from customers
  const generateNodes = (): Node[] => {
    return customers.map((customer, index) => ({
      id: customer.id,
      type: "customerNode",
      data: { 
        customer,
        viewMode
      },
      position: {
        x: 150 + Math.cos(index * (2 * Math.PI / customers.length)) * 300,
        y: 300 + Math.sin(index * (2 * Math.PI / customers.length)) * 250
      },
      className: `customer-node ${getRiskClassName(customer.riskLevel)}`
    }));
  };

  // Generate edges based on relationships
  const generateEdges = (): Edge[] => {
    const edges: Edge[] = [];
    
    if (viewMode === "country") {
      // Group customers by country
      const countriesMap: Record<string, string[]> = {};
      
      customers.forEach(customer => {
        if (!countriesMap[customer.country]) {
          countriesMap[customer.country] = [];
        }
        countriesMap[customer.country].push(customer.id);
      });
      
      // Connect customers from the same country
      Object.values(countriesMap).forEach(customerIds => {
        if (customerIds.length > 1) {
          for (let i = 0; i < customerIds.length; i++) {
            for (let j = i + 1; j < customerIds.length; j++) {
              edges.push({
                id: `edge-${customerIds[i]}-${customerIds[j]}`,
                source: customerIds[i],
                target: customerIds[j],
                style: { stroke: '#3b82f6' },
                label: 'Same Country',
                labelBgStyle: { fill: '#ffffff', fillOpacity: 0.8 },
                markerEnd: {
                  type: MarkerType.ArrowClosed,
                }
              });
            }
          }
        }
      });
    } else if (viewMode === "risk") {
      // Connect high risk customers
      const highRiskCustomers = customers.filter(c => 
        c.riskLevel === "High" || c.riskLevel === "Critical"
      );
      
      highRiskCustomers.forEach((customer, i) => {
        // Connect to other high risk customers
        highRiskCustomers.slice(i + 1).forEach(otherCustomer => {
          edges.push({
            id: `edge-risk-${customer.id}-${otherCustomer.id}`,
            source: customer.id,
            target: otherCustomer.id,
            style: { stroke: '#ef4444' },
            label: 'High Risk',
            labelBgStyle: { fill: '#ffffff', fillOpacity: 0.8 },
            animated: true,
          });
        });
      });
    } else if (viewMode === "transactions") {
      // Random transaction relationships for demo purposes
      // In a real app, this would be based on actual transaction data
      for (let i = 0; i < Math.min(customers.length, 15); i++) {
        const source = customers[i];
        const target = customers[Math.floor(Math.random() * customers.length)];
        
        if (source.id !== target.id) {
          edges.push({
            id: `edge-tx-${source.id}-${target.id}`,
            source: source.id,
            target: target.id,
            style: { stroke: '#10b981' },
            label: 'Transaction',
            labelBgStyle: { fill: '#ffffff', fillOpacity: 0.8 },
            data: {
              amount: Math.floor(Math.random() * 1000) + 100
            }
          });
        }
      }
    }
    
    return edges;
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(generateNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState(generateEdges());

  // Update nodes and edges when viewMode changes
  useEffect(() => {
    setNodes(generateNodes());
    setEdges(generateEdges());
  }, [viewMode, customers]);

  const onConnect = (params: Connection) => {
    setEdges(eds => addEdge({ ...params, animated: true }, eds));
  };

  // Customer node component
  const CustomerNode = ({ data }: { data: any }) => {
    const { customer, viewMode } = data;
    
    return (
      <div className="customer-node-content">
        <div className="customer-node-header">{customer.name}</div>
        <div className="customer-node-id">{customer.id}</div>
        <div className="customer-node-details">
          {viewMode === "risk" && (
            <Badge className={getRiskColor(customer.riskLevel)}>
              {customer.riskLevel} ({customer.riskScore})
            </Badge>
          )}
          {viewMode === "country" && (
            <span className="flex items-center text-xs">
              {customer.country}
            </span>
          )}
          {viewMode === "transactions" && (
            <span className="flex items-center text-xs">
              <CreditCard className="h-3 w-3 mr-1" />
              {customer.transactionsCount || '0'} Txs
            </span>
          )}
        </div>
      </div>
    );
  };

  const nodeTypes = {
    customerNode: CustomerNode
  };

  function getRiskClassName(level: string) {
    switch (level) {
      case "Low": return "risk-low";
      case "Medium": return "risk-medium";
      case "High": return "risk-high";
      case "Critical": return "risk-critical";
      default: return "risk-low";
    }
  }

  function getRiskColor(level: string) {
    switch (level) {
      case "Low": return "bg-green-100 text-green-800";
      case "Medium": return "bg-amber-100 text-amber-800";
      case "High": return "bg-red-100 text-red-800";
      case "Critical": return "bg-purple-100 text-purple-800";
      default: return "bg-green-100 text-green-800";
    }
  }

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Network className="h-5 w-5 mr-2" /> Customer Network Analysis
          </DialogTitle>
          <DialogDescription>
            Visualize relationships and connections between customers
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex space-x-2 mb-4">
          <Button 
            variant={viewMode === "risk" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setViewMode("risk")}
            className="flex items-center"
          >
            <AlertTriangle className="h-4 w-4 mr-2" /> Risk Analysis
          </Button>
          <Button 
            variant={viewMode === "transactions" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setViewMode("transactions")}
            className="flex items-center"
          >
            <CreditCard className="h-4 w-4 mr-2" /> Transaction Flows
          </Button>
          <Button 
            variant={viewMode === "country" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setViewMode("country")}
            className="flex items-center"
          >
            <Users className="h-4 w-4 mr-2" /> Country Clusters
          </Button>
        </div>
        
        <div style={{ height: '70vh', width: '100%' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
            <MiniMap zoomable pannable />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </DialogContent>
    </Dialog>
  );
}
