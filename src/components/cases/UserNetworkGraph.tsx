
import React, { useEffect, useMemo } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap,
  Edge,
  Node,
  NodeProps
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { UserCheck, UserX, User, AlertTriangle, Shield, CreditCard, Building } from 'lucide-react';

interface UserNetworkGraphProps {
  caseData: any;
}

type NodeType = 'user' | 'riskyUser' | 'safeUser' | 'mainUser' | 'financialEntity' | 'business';

// Extend the CustomNodeData to include an index signature
interface CustomNodeData {
  label: React.ReactNode;
  type: NodeType;
  risk?: number;
  flags?: string[];
  [key: string]: unknown; // Add this to satisfy Record<string, unknown>
}

const UserNetworkGraph: React.FC<UserNetworkGraphProps> = ({ caseData }) => {
  const { nodes, edges } = useMemo(() => {
    const numberOfConnections = Math.min(Math.max(Math.floor(caseData.riskScore / 20) + 2, 3), 8);
    const badConnectionRatio = caseData.riskScore / 100;
    
    const mainNode: Node = {
      id: 'main-user',
      type: 'default',
      data: { 
        label: (
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-1.5 rounded-full mb-1">
              <User className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-xs font-medium">{caseData.customer}</div>
          </div>
        ),
        type: 'mainUser'
      } as CustomNodeData,
      position: { x: 250, y: 150 },
      style: {
        background: 'white',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        width: 100,
        height: 70,
      }
    };

    const nodes: Node[] = [mainNode];
    const edges: Edge[] = [];
    
    const radius = 150;
    const angleStep = (2 * Math.PI) / numberOfConnections;
    
    const entityTypes = [
      { type: 'user', icon: User, label: 'User', color: 'gray' },
      { type: 'riskyUser', icon: UserX, label: 'High Risk User', color: 'red' },
      { type: 'safeUser', icon: UserCheck, label: 'Low Risk User', color: 'green' },
      { type: 'financialEntity', icon: CreditCard, label: 'Financial Entity', color: 'purple' },
      { type: 'business', icon: Building, label: 'Business', color: 'blue' }
    ];
    
    const possibleFlags = [
      "Multiple accounts",
      "Unusual transactions",
      "Identity mismatch",
      "Location anomaly",
      "Device switching",
      "New connections",
      "Rapid fund movement"
    ];
    
    for (let i = 0; i < numberOfConnections; i++) {
      let entityTypeIndex;
      const isSuspicious = Math.random() < badConnectionRatio;
      
      if (i === 0) {
        entityTypeIndex = 3;
      } else if (i === 1 && caseData.riskScore > 50) {
        entityTypeIndex = 4;
      } else {
        entityTypeIndex = isSuspicious ? 1 : 2;
      }
      
      const entityType = entityTypes[entityTypeIndex];
      const EntityIcon = entityType.icon;
      
      const angle = i * angleStep;
      const x = 250 + radius * Math.cos(angle);
      const y = 150 + radius * Math.sin(angle);
      
      const riskScore = isSuspicious ? 
        Math.floor(Math.random() * 30) + 70 : 
        Math.floor(Math.random() * 40) + 10;
      
      const flags = [];
      if (riskScore > 60) {
        const numFlags = Math.floor(Math.random() * 3) + 1;
        const availableFlags = [...possibleFlags];
        for (let f = 0; f < numFlags; f++) {
          if (availableFlags.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableFlags.length);
            flags.push(availableFlags[randomIndex]);
            availableFlags.splice(randomIndex, 1);
          }
        }
      }
      
      const nodeId = `entity-${i}`;
      const nodeName = entityType.type === 'financialEntity' ? 
        'Bank of ' + ['America', 'Trust', 'Finance', 'Credit'][Math.floor(Math.random() * 4)] :
        entityType.type === 'business' ?
        ['Acme Corp', 'XYZ Inc', 'Global Trade', 'Tech Solutions'][Math.floor(Math.random() * 4)] :
        `${entityType.label} #${Math.floor(Math.random() * 1000) + 1000}`;
      
      nodes.push({
        id: nodeId,
        type: 'default',
        data: { 
          label: (
            <div className="flex flex-col items-center">
              <div className={`${isSuspicious ? 'bg-red-100' : 'bg-green-100'} p-1.5 rounded-full mb-1`}>
                <EntityIcon className={`h-5 w-5 ${isSuspicious ? 'text-red-500' : 'text-green-500'}`} />
                {riskScore > 80 && <AlertTriangle className="h-3 w-3 text-red-500 absolute -top-1 -right-1" />}
              </div>
              <div className="text-xs font-medium">{nodeName}</div>
            </div>
          ),
          type: entityType.type as NodeType,
          risk: riskScore,
          flags: flags
        } as CustomNodeData,
        position: { x, y },
        style: {
          background: 'white',
          border: `1px solid ${isSuspicious ? '#fee2e2' : '#dcfce7'}`,
          borderRadius: '8px',
          padding: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          width: 100,
          height: 70,
        }
      });
      
      edges.push({
        id: `e-main-${nodeId}`,
        source: 'main-user',
        target: nodeId,
        animated: riskScore > 80,
        style: { 
          stroke: isSuspicious ? '#ef4444' : '#22c55e',
          strokeWidth: riskScore > 70 ? 2 : 1,
          opacity: 0.6 
        },
      });
      
      if (caseData.riskScore > 60 && i > 0 && Math.random() < 0.6) {
        const targetIndex = Math.floor(Math.random() * i);
        const targetId = `entity-${targetIndex}`;
        
        // Check if node exists before accessing its data
        const targetNode = nodes[targetIndex + 1];
        const targetRisk = targetNode?.data?.risk as number | undefined;
        
        edges.push({
          id: `e-${nodeId}-${targetId}`,
          source: nodeId,
          target: targetId,
          animated: riskScore > 80 && targetRisk !== undefined && targetRisk > 70,
          style: { 
            stroke: isSuspicious ? '#ef4444' : '#22c55e',
            strokeWidth: 1,
            opacity: 0.4,
            strokeDasharray: '5 5'
          },
        });
      }
    }
    
    return { nodes, edges };
  }, [caseData]);

  // Custom node tooltip renderer
  const nodeTooltipRenderer = (node: NodeProps) => {
    const nodeData = node.data as unknown as CustomNodeData;
    if (nodeData?.risk && nodeData.risk > 50) {
      return (
        <div className="bg-white p-2 rounded shadow-md border text-xs max-w-[200px]">
          <div className="font-bold">{node.id}</div>
          <div>Risk Score: {nodeData.risk}</div>
          {nodeData.flags && nodeData.flags.length > 0 && (
            <div>
              <div className="font-semibold mt-1">Flags:</div>
              <ul className="list-disc pl-3">
                {nodeData.flags.map((flag, idx) => (
                  <li key={idx}>{flag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[400px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#f0f0f0" gap={16} />
        <Controls showInteractive={false} />
        <MiniMap 
          nodeColor={(node) => {
            const data = node.data as unknown as CustomNodeData;
            if (data.type === 'mainUser') return '#3b82f6';
            if (data.type === 'riskyUser') return '#ef4444';
            if (data.type === 'financialEntity') return '#9b87f5';
            if (data.type === 'business') return '#6366f1';
            return '#22c55e';
          }}
          maskColor="#f8fafc"
          style={{ right: 10, bottom: 10 }}
        />
      </ReactFlow>
    </div>
  );
};

export default UserNetworkGraph;
