
import React, { ReactNode } from 'react';
import { Database, Brain, Users, Bot, FileText, ArrowRightLeft, ArrowDownToLine, ShieldAlert, UserCheck } from 'lucide-react';

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
    nodeCount: 4,
    edgeCount: 4,
    nodes: [
      {
        id: 'step-1',
        type: 'default',
        position: { x: 100, y: 175 },
        data: { 
          label: 'Bank Statement Upload',
          description: 'Customer uploads bank statements through API or secure S3 path',
          icon: React.createElement(ArrowDownToLine, { className: "text-blue-500", size: 20 }),
          type: 'datasource'
        }
      },
      {
        id: 'step-2',
        type: 'default',
        position: { x: 350, y: 175 },
        data: { 
          label: 'Analysis & Feature Extraction',
          description: 'Bank statement analyzer agent parses the statements and extracts all configured features',
          icon: React.createElement(FileText, { className: "text-blue-500", size: 20 }),
          type: 'model',
          modelType: 'binary'
        }
      },
      {
        id: 'step-3',
        type: 'default',
        position: { x: 600, y: 175 },
        data: { 
          label: 'Risk Assessment',
          description: 'Agent evaluates risk score and makes initial determination',
          icon: React.createElement(ShieldAlert, { className: "text-blue-500", size: 20 }),
          type: 'model',
          modelType: 'multiclass'
        }
      },
      {
        id: 'step-4-high',
        type: 'default',
        position: { x: 850, y: 100 },
        data: { 
          label: 'High Risk - Auto Reject',
          description: 'Journey ends with auto-rejected case',
          icon: React.createElement(ShieldAlert, { className: "text-gray-500", size: 20 }),
          type: 'agent',
          agentType: 'ai_agent'
        }
      },
      {
        id: 'step-4-low',
        type: 'default',
        position: { x: 850, y: 250 },
        data: { 
          label: 'Acceptable Risk - Underwriting',
          description: 'Case forwarded to underwriting agent',
          icon: React.createElement(UserCheck, { className: "text-green-500", size: 20 }),
          type: 'agent',
          agentType: 'regular_agent'
        }
      }
    ],
    edges: [
      {
        id: 'e1-2',
        source: 'step-1',
        target: 'step-2',
        animated: true,
      },
      {
        id: 'e2-3',
        source: 'step-2',
        target: 'step-3',
        animated: true,
      },
      {
        id: 'e3-4a',
        source: 'step-3',
        target: 'step-4-high',
        animated: true,
        label: 'High Risk',
      },
      {
        id: 'e3-4b',
        source: 'step-3',
        target: 'step-4-low',
        animated: true,
        label: 'Acceptable Risk',
      }
    ]
  }
};
