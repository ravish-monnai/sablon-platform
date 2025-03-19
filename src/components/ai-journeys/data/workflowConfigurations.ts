
import React, { ReactNode } from 'react';
import { Database, Brain, Users, Bot, FileText, ArrowRightLeft } from 'lucide-react';

// Define a type for node data that includes icon as ReactNode
export interface NodeData {
  label: string;
  description: string;
  icon: ReactNode;
  type: string;
  modelType?: string;
  agentType?: string;
}

// Journey workflow configurations for the journey builder
export const journeyWorkflowConfigurations = {
  "onboarding-fraud-detection": {
    name: "Onboarding Fraud Detection",
    description: "Detects potential fraud during user onboarding",
    status: "active",
    lastModified: "1 day ago",
    nodeCount: 6,
    edgeCount: 5,
    nodes: [
      {
        id: 'data-1',
        type: 'default',
        position: { x: 100, y: 100 },
        data: { 
          label: 'User Registration Data',
          description: 'Collection of user input during registration',
          icon: React.createElement(Database, { className: "text-monnai-yellow", size: 20 }),
          type: 'datasource'
        }
      },
      {
        id: 'data-2',
        type: 'default',
        position: { x: 100, y: 250 },
        data: { 
          label: 'Device Fingerprint',
          description: 'Device and browser information',
          icon: React.createElement(Database, { className: "text-monnai-yellow", size: 20 }),
          type: 'datasource'
        }
      },
      {
        id: 'model-1',
        type: 'default',
        position: { x: 400, y: 175 },
        data: { 
          label: 'Identity Verification Model',
          description: 'Verifies user identity against data sources',
          icon: React.createElement(Brain, { className: "text-monnai-pink", size: 20 }),
          type: 'model',
          modelType: 'binary'
        }
      },
      {
        id: 'model-2',
        type: 'default',
        position: { x: 700, y: 175 },
        data: { 
          label: 'Fraud Risk Scoring',
          description: 'Assigns fraud risk score based on patterns',
          icon: React.createElement(Brain, { className: "text-monnai-pink", size: 20 }),
          type: 'model',
          modelType: 'binary'
        }
      },
      {
        id: 'agent-1',
        type: 'default',
        position: { x: 1000, y: 175 },
        data: { 
          label: 'Fraud Review Team',
          description: 'Manual review for high-risk cases',
          icon: React.createElement(Users, { className: "text-monnai-blue", size: 20 }),
          type: 'agent',
          agentType: 'regular_agent'
        }
      }
    ],
    edges: [
      {
        id: 'e1-3',
        source: 'data-1',
        target: 'model-1',
        animated: true,
      },
      {
        id: 'e2-3',
        source: 'data-2',
        target: 'model-1',
        animated: true,
      },
      {
        id: 'e3-4',
        source: 'model-1',
        target: 'model-2',
        animated: true,
      },
      {
        id: 'e4-5',
        source: 'model-2',
        target: 'agent-1',
        animated: true,
      }
    ]
  },
  "bank-statement-analyzer": {
    name: "Bank Statement Analysis",
    description: "Analyzes bank statements for fraud detection and verification",
    status: "active",
    lastModified: "2 hours ago",
    nodeCount: 6,
    edgeCount: 5,
    nodes: [
      {
        id: 'data-1',
        type: 'default',
        position: { x: 100, y: 100 },
        data: { 
          label: 'Bank Statement Upload',
          description: 'Bank statement documents for analysis',
          icon: React.createElement(FileText, { className: "text-monnai-yellow", size: 20 }),
          type: 'datasource'
        }
      },
      {
        id: 'model-1',
        type: 'default',
        position: { x: 400, y: 100 },
        data: { 
          label: 'Document Parser',
          description: 'Extracts structured data from statements',
          icon: React.createElement(Brain, { className: "text-monnai-pink", size: 20 }),
          type: 'model',
          modelType: 'binary'
        }
      },
      {
        id: 'model-2',
        type: 'default',
        position: { x: 700, y: 100 },
        data: { 
          label: 'Transaction Analyzer',
          description: 'Analyzes transaction patterns',
          icon: React.createElement(Brain, { className: "text-monnai-pink", size: 20 }),
          type: 'model',
          modelType: 'multiclass'
        }
      },
      {
        id: 'model-3',
        type: 'default',
        position: { x: 400, y: 250 },
        data: { 
          label: 'Income Verification',
          description: 'Verifies income claims',
          icon: React.createElement(Brain, { className: "text-monnai-pink", size: 20 }),
          type: 'model',
          modelType: 'regression'
        }
      },
      {
        id: 'agent-1',
        type: 'default',
        position: { x: 700, y: 250 },
        data: { 
          label: 'Bank Statement Analyzer Agent',
          description: 'AI-powered analysis and recommendations',
          icon: React.createElement(Bot, { className: "text-monnai-blue", size: 20 }),
          type: 'agent',
          agentType: 'ai_agent'
        }
      },
      {
        id: 'agent-2',
        type: 'default',
        position: { x: 1000, y: 175 },
        data: { 
          label: 'Review Team',
          description: 'Human review for complex cases',
          icon: React.createElement(Users, { className: "text-monnai-blue", size: 20 }),
          type: 'agent',
          agentType: 'regular_agent'
        }
      }
    ],
    edges: [
      {
        id: 'e1-2',
        source: 'data-1',
        target: 'model-1',
        animated: true,
      },
      {
        id: 'e2-3',
        source: 'model-1',
        target: 'model-2',
        animated: true,
      },
      {
        id: 'e2-4',
        source: 'model-1',
        target: 'model-3',
        animated: true,
      },
      {
        id: 'e3-5',
        source: 'model-2',
        target: 'agent-1',
        animated: true,
      },
      {
        id: 'e4-5',
        source: 'model-3',
        target: 'agent-1',
        animated: true,
      },
      {
        id: 'e5-6',
        source: 'agent-1',
        target: 'agent-2',
        animated: true,
      }
    ]
  }
};
