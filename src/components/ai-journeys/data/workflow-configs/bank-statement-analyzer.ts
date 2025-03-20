
import React from 'react';
import { Upload, Brain, BarChart4, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { JourneyWorkflowConfig } from './types';
import { MarkerType } from '@xyflow/react';

// Bank statement analyzer journey configuration
export const bankStatementAnalyzer: JourneyWorkflowConfig = {
  name: "Bank Statement Analyzer",
  description: "Analyzes and extracts insights from bank statements",
  status: "active",
  lastModified: "2 days ago",
  nodeCount: 7,
  edgeCount: 7,
  nodes: [
    {
      id: 'upload-1',
      type: 'default',
      position: { x: 100, y: 150 },
      data: { 
        label: 'Bank Statement Upload',
        description: 'API endpoint for statement uploads',
        icon: React.createElement(Upload, { className: "text-blue-500", size: 20 }),
        type: 'datasource',
        featureTag: 'updated',
        apiSpecs: {
          endpoint: '/api/bank-statements/upload',
          method: 'POST',
          authType: 'Bearer Token',
          requiredFields: ['file', 'customer_id', 'bank_id'],
          optionalFields: ['statement_date', 'account_number'],
          responseFormat: 'JSON',
          s3Config: {
            bucketName: 'monnai-bank-statements',
            region: 'us-west-2',
            accessKeyRequired: true,
            allowedFileTypes: ['.pdf', '.csv', '.xlsx', '.xml'],
            maxFileSize: '10MB'
          }
        }
      }
    },
    {
      id: 'analysis-1',
      type: 'default',
      position: { x: 400, y: 150 },
      data: { 
        label: 'Feature Extraction',
        description: 'Extracts financial insights from statements',
        icon: React.createElement(Brain, { className: "text-purple-500", size: 20 }),
        type: 'model',
        featureTag: 'ai',
        featureExtraction: {
          features: [
            'Account Balances',
            'Income Verification',
            'Expense Categorization',
            'Cash Flow Analysis',
            'Transaction Patterns',
            'Recurring Payments',
            'Overdraft Frequency',
            'Deposit Consistency',
            'Debt Service Ratio',
            'Savings Rate',
            'Debt-to-Income Ratio',
            'Lifestyle Spending'
          ],
          models: ['TransactionClassifier-v2', 'FinancialMetricsCalculator-v1'],
          confidenceThreshold: 0.85,
          processingTime: '30-45 seconds'
        }
      }
    },
    {
      id: 'risk-1',
      type: 'default',
      position: { x: 700, y: 150 },
      data: { 
        label: 'Risk Assessment',
        description: 'Evaluates financial risk profile',
        icon: React.createElement(Shield, { className: "text-red-500", size: 20 }),
        type: 'model',
        featureTag: 'beta',
        riskAssessment: {
          thresholds: {
            highRisk: 0.75,
            mediumRisk: 0.45,
            lowRisk: 0.25
          },
          factors: [
            'Income Stability',
            'Expense Management',
            'Debt Burden',
            'Cash Flow Volatility',
            'Fraud Indicators',
            'Account Management Behavior'
          ],
          modelType: 'Ensemble',
          autoDecision: true
        }
      }
    },
    {
      id: 'high-risk-1',
      type: 'default',
      position: { x: 550, y: 350 },
      data: { 
        label: 'High Risk Case',
        description: 'Automatically rejected applications',
        icon: React.createElement(AlertTriangle, { className: "text-red-500", size: 20 }),
        type: 'rule',
        color: '#FEE2E2',
        caseConfiguration: {
          caseType: 'High Risk',
          priority: 'High',
          assignedTeam: 'Risk Management',
          slaHours: 24,
          autoNotify: true,
          requiredDocuments: ['Additional Income Proof', 'Existing Debt Documentation']
        }
      }
    },
    {
      id: 'acceptable-risk-1',
      type: 'default',
      position: { x: 850, y: 350 },
      data: { 
        label: 'Acceptable Risk Case',
        description: 'Automatically approved applications',
        icon: React.createElement(CheckCircle, { className: "text-green-500", size: 20 }),
        type: 'rule',
        color: '#DCFCE7',
        caseConfiguration: {
          caseType: 'Acceptable Risk',
          priority: 'Normal',
          assignedTeam: 'Underwriting',
          slaHours: 48,
          autoNotify: false,
          requiredDocuments: []
        }
      }
    },
    {
      id: 'reports-1',
      type: 'default',
      position: { x: 1000, y: 150 },
      data: { 
        label: 'Report Generation',
        description: 'Creates financial insights reports',
        icon: React.createElement(BarChart4, { className: "text-blue-500", size: 20 }),
        type: 'notification'
      }
    },
    {
      id: 'agent-1',
      type: 'default',
      position: { x: 1000, y: 250 },
      data: { 
        label: 'Manual Review Team',
        description: 'Team that reviews edge cases',
        icon: React.createElement(Users, { className: "text-indigo-500", size: 20 }),
        type: 'agent'
      }
    }
  ],
  edges: [
    {
      id: 'e1-2',
      source: 'upload-1',
      target: 'analysis-1',
      animated: true,
      style: { stroke: '#94a3b8' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e2-3',
      source: 'analysis-1',
      target: 'risk-1',
      animated: true,
      style: { stroke: '#94a3b8' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e3-4',
      source: 'risk-1',
      target: 'high-risk-1',
      animated: true,
      label: 'High Risk',
      labelStyle: { fill: '#ef4444', fontWeight: 500 },
      style: { stroke: '#ef4444' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e3-5',
      source: 'risk-1',
      target: 'acceptable-risk-1',
      animated: true,
      label: 'Acceptable',
      labelStyle: { fill: '#22c55e', fontWeight: 500 },
      style: { stroke: '#22c55e' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e3-6',
      source: 'risk-1',
      target: 'reports-1',
      animated: true,
      style: { stroke: '#94a3b8' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e5-7',
      source: 'acceptable-risk-1',
      target: 'agent-1',
      style: { stroke: '#94a3b8' },
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
    {
      id: 'e4-7',
      source: 'high-risk-1',
      target: 'agent-1',
      style: { stroke: '#94a3b8' },
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    }
  ]
};
