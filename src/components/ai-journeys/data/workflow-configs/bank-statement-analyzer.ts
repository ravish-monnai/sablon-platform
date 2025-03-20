
import React from 'react';
import { ArrowDownToLine, FileText, ShieldAlert, UserCheck } from 'lucide-react';
import { JourneyWorkflowConfig } from './types';

// Bank statement analyzer journey configuration
export const bankStatementAnalyzer: JourneyWorkflowConfig = {
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
        type: 'datasource',
        apiSpecs: {
          endpoint: '/api/v1/bank-statements/upload',
          method: 'POST',
          authType: 'Bearer Token',
          requiredFields: ['customerId', 'statementDate', 'fileContent'],
          optionalFields: ['bankName', 'accountType', 'currency'],
          responseFormat: 'JSON',
          s3Config: {
            bucketName: 'monnai-bank-statements',
            region: 'us-west-2',
            accessKeyRequired: true,
            allowedFileTypes: ['.pdf', '.csv', '.xlsx', '.xml'],
            maxFileSize: '25MB'
          }
        }
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
        modelType: 'binary',
        featureExtraction: {
          features: [
            'Monthly Income Verification',
            'Income Consistency Analysis',
            'Income Source Identification',
            'Average Balance Calculation',
            'Cash Flow Analysis',
            'Recurring Transaction Patterns',
            'Expense Categorization',
            'Debt Service Ratio Calculation',
            'Overdraft Detection',
            'Payment Regularity Assessment',
            'Account Volatility Measurement',
            'Fraud Indicators Analysis',
            'Abnormal Transaction Detection',
            'Customer Behavioral Patterns',
            'Financial Stability Metrics',
            'Credit Risk Indicators'
          ],
          models: ['LLM Parser', 'OCR Engine', 'Transaction Classifier'],
          confidenceThreshold: 85,
          processingTime: '30-60 seconds'
        }
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
        modelType: 'multiclass',
        riskAssessment: {
          thresholds: {
            highRisk: 75,
            mediumRisk: 45,
            lowRisk: 20
          },
          factors: [
            'Income Stability Score',
            'Debt-to-Income Ratio',
            'Account Balance Volatility',
            'Suspicious Transaction Patterns',
            'Overdraft Frequency',
            'Spending Behavior Consistency',
            'Payment Reliability'
          ],
          modelType: 'Ensemble (Random Forest + Neural Network)',
          autoDecision: true
        }
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
        agentType: 'ai_agent',
        caseConfiguration: {
          caseType: 'Auto-Rejected',
          priority: 'Low',
          assignedTeam: 'Fraud Analytics',
          slaHours: 48,
          autoNotify: true,
          requiredDocuments: ['Bank Statement', 'Risk Assessment Report']
        }
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
        agentType: 'regular_agent',
        caseConfiguration: {
          caseType: 'Underwriting Review',
          priority: 'Medium',
          assignedTeam: 'Underwriting',
          slaHours: 24,
          autoNotify: true,
          requiredDocuments: ['Bank Statement', 'Income Verification Report', 'Credit Report']
        }
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
};
