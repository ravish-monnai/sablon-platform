
import { Journey } from "./JourneyCard";
import { Database, Brain, Users } from 'lucide-react';
import React from 'react';

// Sample data for live journeys by market
export const journeysByMarket: Record<string, Journey[]> = {
  'Global': [
    {
      id: "onboarding-fraud-detection",
      name: "Onboarding Fraud Detection",
      description: "Analyzes new user registrations and detects potential fraud patterns during onboarding.",
      status: "active",
      lastRun: "1 minute ago",
      apiIntegration: "REST API",
      totalAnalyzed: 132,
      alerts: 14,
      fraudCases: 5,
    },
    {
      id: "bank-statement-analyzer",
      name: "Bank Statement Analysis",
      description: "Analyzes bank statements with the Bank Statement Analyzer Agent for fraud detection.",
      status: "active",
      lastRun: "2 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 167,
      alerts: 23,
      fraudCases: 8,
    }
  ],
  'India': [
    {
      id: "india-bank-statement-analyzer",
      name: "Bank Statement Analysis",
      description: "Specialized analysis for bank statements with UPI transaction support.",
      status: "active",
      lastRun: "30 seconds ago",
      apiIntegration: "REST API",
      totalAnalyzed: 167,
      alerts: 23,
      fraudCases: 8,
    }
  ]
};

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
          icon: <Database className="text-monnai-yellow" size={20} />,
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
          icon: <Database className="text-monnai-yellow" size={20} />,
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
          icon: <Brain className="text-monnai-pink" size={20} />,
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
          icon: <Brain className="text-monnai-pink" size={20} />,
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
          icon: <Users className="text-monnai-blue" size={20} />,
          type: 'agent'
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
    nodeCount: 5,
    edgeCount: 4,
    nodes: [
      {
        id: 'data-1',
        type: 'default',
        position: { x: 100, y: 100 },
        data: { 
          label: 'Bank Statement Upload',
          description: 'Bank statement documents for analysis',
          icon: <Database className="text-monnai-yellow" size={20} />,
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
          icon: <Brain className="text-monnai-pink" size={20} />,
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
          icon: <Brain className="text-monnai-pink" size={20} />,
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
          icon: <Brain className="text-monnai-pink" size={20} />,
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
          description: 'Final analysis and recommendations',
          icon: <Users className="text-monnai-blue" size={20} />,
          type: 'agent'
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
      }
    ]
  }
};

