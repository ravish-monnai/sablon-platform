
import React from 'react';
import { Database, Brain, Users, ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';
import { JourneyWorkflowConfig } from './types';
import { MarkerType } from '@xyflow/react';

// Onboarding fraud detection journey configuration
export const onboardingFraudDetection: JourneyWorkflowConfig = {
  name: "Onboarding Fraud Detection",
  description: "Detects potential fraud during user onboarding",
  status: "active",
  lastModified: "1 day ago",
  nodeCount: 7,
  edgeCount: 8,
  nodes: [
    {
      id: 'data-1',
      type: 'default',
      position: { x: 100, y: 100 },
      data: { 
        label: 'User Registration Data',
        description: 'Collection of user input during registration',
        icon: React.createElement(Database, { className: "text-monnai-yellow", size: 20 }),
        type: 'datasource',
        apiSpecs: {
          endpoint: '/api/user/registration',
          method: 'POST',
          authType: 'API Key',
          requiredFields: ['name', 'email', 'phone', 'address', 'dob'],
          optionalFields: ['referral_code', 'marketing_consent', 'preferences'],
          responseFormat: 'JSON'
        }
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
        type: 'datasource',
        apiSpecs: {
          endpoint: '/api/device/fingerprint',
          method: 'POST',
          authType: 'API Key',
          requiredFields: ['ip_address', 'user_agent', 'browser_info', 'screen_resolution'],
          optionalFields: ['connection_type', 'language', 'timezone'],
          responseFormat: 'JSON'
        }
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
        modelType: 'binary',
        featureExtraction: {
          features: [
            'Email Reputation',
            'Phone Verification',
            'Address Validation',
            'Name Matching',
            'Document Verification',
            'Biometric Analysis'
          ],
          models: ['IdentityVerifier-v3', 'DocumentAnalyzer-v2'],
          confidenceThreshold: 0.90,
          processingTime: '5-10 seconds'
        }
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
        modelType: 'binary',
        riskAssessment: {
          thresholds: {
            highRisk: 0.80,
            mediumRisk: 0.50,
            lowRisk: 0.30
          },
          factors: [
            'Identity Consistency',
            'Velocity Patterns',
            'Digital Footprint',
            'Network Connections',
            'Behavioral Biometrics',
            'Historical Patterns'
          ],
          modelType: 'Ensemble',
          autoDecision: true
        }
      }
    },
    {
      id: 'high-risk',
      type: 'default',
      position: { x: 550, y: 350 },
      data: { 
        label: 'High Risk Cases',
        description: 'Likely fraudulent applications',
        icon: React.createElement(AlertTriangle, { className: "text-red-500", size: 20 }),
        type: 'rule',
        color: '#FEE2E2',
        caseConfiguration: {
          caseType: 'Fraud Investigation',
          priority: 'Critical',
          assignedTeam: 'Fraud Operations',
          slaHours: 6,
          autoNotify: true,
          requiredDocuments: ['Additional Identity Proof', 'Video Verification']
        }
      }
    },
    {
      id: 'low-risk',
      type: 'default',
      position: { x: 850, y: 350 },
      data: { 
        label: 'Low Risk Cases',
        description: 'Legitimate user applications',
        icon: React.createElement(CheckCircle, { className: "text-green-500", size: 20 }),
        type: 'rule',
        color: '#DCFCE7',
        caseConfiguration: {
          caseType: 'Fast-Track Approval',
          priority: 'Low',
          assignedTeam: 'Onboarding',
          slaHours: 24,
          autoNotify: false,
          requiredDocuments: []
        }
      }
    },
    {
      id: 'agent-1',
      type: 'default',
      position: { x: 1000, y: 250 },
      data: { 
        label: 'Fraud Review Team',
        description: 'Manual review for high-risk cases',
        icon: React.createElement(Users, { className: "text-monnai-blue", size: 20 }),
        type: 'agent',
        agentType: 'fraud_specialist'
      }
    }
  ],
  edges: [
    {
      id: 'e1-3',
      source: 'data-1',
      target: 'model-1',
      animated: true,
      style: { stroke: '#94a3b8' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e2-3',
      source: 'data-2',
      target: 'model-1',
      animated: true,
      style: { stroke: '#94a3b8' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e3-4',
      source: 'model-1',
      target: 'model-2',
      animated: true,
      style: { stroke: '#94a3b8' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e4-5',
      source: 'model-2',
      target: 'high-risk',
      animated: true,
      label: 'High Risk',
      labelStyle: { fill: '#ef4444', fontWeight: 500 },
      style: { stroke: '#ef4444' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e4-6',
      source: 'model-2',
      target: 'low-risk',
      animated: true, 
      label: 'Low Risk',
      labelStyle: { fill: '#22c55e', fontWeight: 500 },
      style: { stroke: '#22c55e' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e5-7',
      source: 'high-risk',
      target: 'agent-1',
      animated: true,
      style: { stroke: '#94a3b8' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e6-7',
      source: 'low-risk',
      target: 'agent-1',
      style: { stroke: '#94a3b8' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e6-4',
      source: 'low-risk',
      target: 'model-2',
      style: { stroke: '#94a3b8', strokeDasharray: '5,5' },
      animated: false,
      label: 'Feedback',
      labelStyle: { fill: '#64748b' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    }
  ]
};
