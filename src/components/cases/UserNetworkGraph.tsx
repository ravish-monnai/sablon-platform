
import React, { useEffect, useMemo } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap 
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { UserCheck, UserX, User } from 'lucide-react';

interface UserNetworkGraphProps {
  caseData: any;
}

const UserNetworkGraph: React.FC<UserNetworkGraphProps> = ({ caseData }) => {
  // Generate random connected users based on the case risk level
  const { nodes, edges } = useMemo(() => {
    const numberOfUsers = Math.floor(Math.random() * 5) + 5; // 5-10 users
    const badUserRatio = caseData.riskScore / 100; // Higher risk score = more bad users
    
    // Create the main user node
    const mainNode = {
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
        ) 
      },
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

    // Create connected users
    const userNodes = [];
    const userEdges = [];
    
    // Create nodes in a circle around the main user
    const radius = 150;
    const angleStep = (2 * Math.PI) / numberOfUsers;
    
    for (let i = 0; i < numberOfUsers; i++) {
      // Determine if this is a "bad" user based on the risk score
      const isBadUser = Math.random() < badUserRatio;
      
      // Calculate position in a circle
      const angle = i * angleStep;
      const x = 250 + radius * Math.cos(angle);
      const y = 150 + radius * Math.sin(angle);
      
      const userId = `user-${i}`;
      userNodes.push({
        id: userId,
        type: 'default',
        data: { 
          label: (
            <div className="flex flex-col items-center">
              <div className={`${isBadUser ? 'bg-red-100' : 'bg-green-100'} p-1.5 rounded-full mb-1`}>
                {isBadUser ? 
                  <UserX className="h-5 w-5 text-red-500" /> : 
                  <UserCheck className="h-5 w-5 text-green-500" />
                }
              </div>
              <div className="text-xs font-medium">User #{Math.floor(Math.random() * 1000) + 1000}</div>
            </div>
          ) 
        },
        position: { x, y },
        style: {
          background: 'white',
          border: `1px solid ${isBadUser ? '#fee2e2' : '#dcfce7'}`,
          borderRadius: '8px',
          padding: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          width: 100,
          height: 70,
        }
      });
      
      // Create edge to main user
      userEdges.push({
        id: `e-main-${userId}`,
        source: 'main-user',
        target: userId,
        animated: false,
        style: { 
          stroke: isBadUser ? '#ef4444' : '#22c55e',
          strokeWidth: 2,
          opacity: 0.6 
        },
      });
      
      // Randomly connect some users to each other (about 30% chance)
      for (let j = 0; j < i; j++) {
        if (Math.random() < 0.3) {
          const targetId = `user-${j}`;
          // Fixed: using proper type checking instead of includes() on border
          const targetNode = userNodes.find(n => n.id === targetId);
          const targetIsBad = targetNode && 
            typeof targetNode.style?.border === 'string' && 
            targetNode.style.border.includes('#fee2e2');
          
          userEdges.push({
            id: `e-${userId}-${targetId}`,
            source: userId,
            target: targetId,
            animated: false,
            style: { 
              stroke: isBadUser || targetIsBad ? '#ef4444' : '#22c55e',
              strokeWidth: 1,
              opacity: 0.4 
            },
          });
        }
      }
    }
    
    return {
      nodes: [mainNode, ...userNodes],
      edges: userEdges
    };
  }, [caseData]);

  return (
    <div className="h-[400px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#f0f0f0" gap={16} />
        <Controls showInteractive={false} />
        <MiniMap 
          nodeColor={(node) => {
            if (node.id === 'main-user') return '#3b82f6';
            // Fixed: safer type checking for border property
            if (node.style?.border && 
                typeof node.style.border === 'string' && 
                node.style.border.includes('#fee2e2')) return '#ef4444';
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
