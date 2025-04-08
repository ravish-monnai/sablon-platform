
import { Database, Brain, Shield, CheckCircle, FileCheck, UserCheck } from 'lucide-react';
import { JourneyWorkflowConfig } from './types';

// Create serializable icon references that will be resolved at render time
const createIconReference = (iconName: string, className: string, size: number) => {
  return { iconName, className, size };
};

export const onboardingKycWorkflow: JourneyWorkflowConfig = {
  name: "Customer Onboarding with KYC",
  description: "End-to-end customer onboarding process with comprehensive KYC verification",
  status: "active",
  lastModified: "2025-04-08",
  nodeCount: 6,
  edgeCount: 5,
  nodes: [
    {
      id: 'datasource-1',
      type: 'default',
      position: { x: 100, y: 100 },
      data: { 
        label: 'User Registration',
        description: 'Initial user registration data',
        iconConfig: { name: 'Database', className: "text-yellow-500", size: 20 },
        type: 'datasource',
        featureTag: 'new'
      }
    },
    {
      id: 'model-1',
      type: 'default',
      position: { x: 350, y: 100 },
      data: { 
        label: 'Risk Scoring',
        description: 'Initial risk assessment',
        iconConfig: { name: 'Brain', className: "text-pink-600", size: 20 },
        type: 'model',
        modelType: 'multiclass'
      }
    },
    {
      id: 'kyc-1',
      type: 'default',
      position: { x: 600, y: 100 },
      data: { 
        label: 'ID Verification',
        description: 'Document verification and facial matching',
        iconConfig: { name: 'Shield', className: "text-blue-600", size: 20 },
        type: 'process',
        featureTag: 'ai'
      }
    },
    {
      id: 'decision-1',
      type: 'default',
      position: { x: 350, y: 300 },
      data: { 
        label: 'KYC Decision',
        description: 'Automated KYC approval or manual review',
        iconConfig: { name: 'CheckCircle', className: "text-green-600", size: 20 },
        type: 'decision',
        decisions: [
          { condition: 'low_risk', outcome: 'approve', nextNode: 'approve-1' },
          { condition: 'medium_risk', outcome: 'review', nextNode: 'review-1' },
          { condition: 'high_risk', outcome: 'reject', nextNode: 'reject-1' }
        ]
      }
    },
    {
      id: 'kyc-2',
      type: 'default',
      position: { x: 600, y: 300 },
      data: { 
        label: 'Enhanced Due Diligence',
        description: 'Additional verification for medium-risk customers',
        iconConfig: { name: 'FileCheck', className: "text-purple-600", size: 20 },
        type: 'process'
      }
    },
    {
      id: 'account-1',
      type: 'default',
      position: { x: 850, y: 200 },
      data: { 
        label: 'Account Creation',
        description: 'Finalize account setup after approval',
        iconConfig: { name: 'UserCheck', className: "text-blue-600", size: 20 },
        type: 'endpoint'
      }
    }
  ],
  edges: [
    {
      id: 'e1-2',
      source: 'datasource-1',
      target: 'model-1'
    },
    {
      id: 'e2-3',
      source: 'model-1',
      target: 'kyc-1'
    },
    {
      id: 'e3-4',
      source: 'kyc-1',
      target: 'decision-1'
    },
    {
      id: 'e4-5',
      source: 'decision-1',
      target: 'kyc-2'
    },
    {
      id: 'e5-6',
      source: 'kyc-2',
      target: 'account-1'
    }
  ]
};
