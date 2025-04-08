
import { Database, Brain, Shield, CheckCircle, AlertTriangle, UserCheck } from 'lucide-react';
import { JourneyWorkflowConfig } from './types';

// Create serializable icon references that will be resolved at render time
const createIconReference = (iconName: string, className: string, size: number) => {
  return { iconName, className, size };
};

export const kycVerificationWorkflow: JourneyWorkflowConfig = {
  name: "KYC Verification",
  description: "Standalone KYC verification process with global compliance",
  status: "active",
  lastModified: "2025-04-08",
  nodeCount: 5,
  edgeCount: 4,
  nodes: [
    {
      id: 'input-1',
      type: 'default',
      position: { x: 100, y: 100 },
      data: { 
        label: 'Identity Documents',
        description: 'ID, passport, or driving license',
        iconConfig: { name: 'Database', className: "text-yellow-500", size: 20 },
        type: 'datasource'
      }
    },
    {
      id: 'process-1',
      type: 'default',
      position: { x: 350, y: 100 },
      data: { 
        label: 'Document Authentication',
        description: 'Verify document authenticity',
        iconConfig: { name: 'Shield', className: "text-blue-600", size: 20 },
        type: 'process',
        featureTag: 'ai'
      }
    },
    {
      id: 'model-1',
      type: 'default',
      position: { x: 600, y: 100 },
      data: { 
        label: 'Biometric Matching',
        description: 'Facial recognition and liveness check',
        iconConfig: { name: 'Brain', className: "text-pink-600", size: 20 },
        type: 'model',
        modelType: 'binary'
      }
    },
    {
      id: 'verify-1',
      type: 'default',
      position: { x: 350, y: 250 },
      data: { 
        label: 'Sanctions Screening',
        description: 'Check against global watchlists',
        iconConfig: { name: 'AlertTriangle', className: "text-red-500", size: 20 },
        type: 'process'
      }
    },
    {
      id: 'result-1',
      type: 'default',
      position: { x: 600, y: 250 },
      data: { 
        label: 'KYC Outcome',
        description: 'Final verification result',
        iconConfig: { name: 'CheckCircle', className: "text-green-600", size: 20 },
        type: 'decision',
        featureTag: 'new'
      }
    }
  ],
  edges: [
    {
      id: 'e1-2',
      source: 'input-1',
      target: 'process-1'
    },
    {
      id: 'e2-3',
      source: 'process-1',
      target: 'model-1'
    },
    {
      id: 'e3-4',
      source: 'model-1',
      target: 'verify-1'
    },
    {
      id: 'e4-5',
      source: 'verify-1',
      target: 'result-1'
    }
  ]
};
