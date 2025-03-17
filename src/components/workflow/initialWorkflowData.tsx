
import React from 'react';
import { Database, Brain, Users } from 'lucide-react';

// Initial nodes for the fraud detection workflow
export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: 'Customer Data Collection',
      description: 'Collect phone, email, IP address',
      icon: <Database className="text-monnai-blue" size={20} />
    },
    position: { x: 250, y: 0 },
    style: { 
      width: 200, 
      padding: '10px',
      borderColor: '#5100ff',
      borderWidth: '2px' 
    }
  },
  {
    id: '2',
    data: { 
      label: 'Fraud Risk Model',
      description: 'Calculate risk score',
      icon: <Brain className="text-monnai-pink" size={20} />
    },
    position: { x: 250, y: 100 },
    style: { width: 200, padding: '10px' }
  },
  {
    id: '3',
    data: { 
      label: 'Decision Engine',
      description: 'Auto-approve, auto-reject, or route to review',
      icon: <Brain className="text-monnai-blue" size={20} />
    },
    position: { x: 250, y: 200 },
    style: { width: 200, padding: '10px' }
  },
  {
    id: '4',
    type: 'output',
    data: { 
      label: 'AI-Assisted Review',
      description: 'Manual review by fraud agents',
      icon: <Users className="text-monnai-yellow" size={20} />
    },
    position: { x: 250, y: 300 },
    style: { 
      width: 200, 
      padding: '10px',
      backgroundColor: '#f5f5f5' 
    }
  },
  {
    id: 'datasource-1',
    data: { 
      label: 'Email Database',
      description: 'Email verification data source',
      icon: <Database className="text-monnai-yellow" size={20} />,
      type: 'datasource'
    },
    position: { x: 0, y: 50 },
    style: { width: 150, backgroundColor: '#fffaed', padding: '10px' }
  },
  {
    id: 'model-1',
    data: { 
      label: 'Fraud Detection Model v2.4',
      description: 'Machine learning model for fraud detection',
      icon: <Brain className="text-monnai-pink" size={20} />,
      type: 'model'
    },
    position: { x: 0, y: 150 },
    style: { width: 150, backgroundColor: '#fff0f8', padding: '10px' }
  },
  {
    id: 'agent-1',
    data: { 
      label: 'Fraud Risk Agent Team',
      description: 'Human agents for manual review',
      icon: <Users className="text-monnai-blue" size={20} />,
      type: 'agent'
    },
    position: { x: 0, y: 250 },
    style: { width: 150, backgroundColor: '#f0f0ff', padding: '10px' }
  }
];

// Initial edges for the fraud detection workflow
export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#5100ff' }
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: '#5100ff' }
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    style: { stroke: '#5100ff' }
  }
];
