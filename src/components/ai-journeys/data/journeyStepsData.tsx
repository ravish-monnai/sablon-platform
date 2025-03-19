
import React from 'react';
import { JourneyStep } from '../components/journey-steps/types';
import { 
  ArrowDownToLine, 
  FileText, 
  ShieldAlert, 
  UserCheck, 
  CreditCard,
  DatabaseZap,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export const getBankStatementJourneySteps = (): JourneyStep[] => {
  return [
    {
      id: 'step-1',
      title: 'Document Upload',
      description: 'Customer uploads bank statements via API or secure path',
      icon: <ArrowDownToLine className="text-blue-500" />,
      status: 'completed',
      statsData: {
        processed: 167,
        passed: 165,
        exceptions: 2
      }
    },
    {
      id: 'step-2',
      title: 'Feature Extraction',
      description: 'Parse statements and extract configured features',
      icon: <FileText className="text-blue-500" />,
      status: 'completed',
      statsData: {
        processed: 165,
        passed: 163,
        exceptions: 2
      }
    },
    {
      id: 'step-3',
      title: 'Risk Assessment',
      description: 'Evaluate risk score and make initial determination',
      icon: <ShieldAlert className="text-amber-500" />,
      status: 'active',
      statsData: {
        processed: 163,
        passed: 154,
        exceptions: 9
      },
      branches: [
        {
          id: 'branch-high',
          title: 'High Risk',
          description: 'Auto-reject cases',
          icon: <AlertTriangle className="text-white" />,
        },
        {
          id: 'branch-low',
          title: 'Acceptable Risk',
          description: 'Forward to underwriting',
          icon: <CheckCircle className="text-white" />,
        }
      ]
    },
    {
      id: 'step-4',
      title: 'Underwriting',
      description: 'Detailed analysis by underwriting team',
      icon: <CreditCard className="text-green-500" />,
      status: 'upcoming',
      statsData: {
        processed: 154,
        passed: 149,
        exceptions: 5
      }
    },
    {
      id: 'step-5',
      title: 'Data Storage',
      description: 'Store analysis results in secure database',
      icon: <DatabaseZap className="text-purple-500" />,
      status: 'upcoming',
      statsData: {
        processed: 149,
        passed: 149,
        exceptions: 0
      }
    }
  ];
};

export const getOnboardingFraudJourneySteps = (): JourneyStep[] => {
  // This could be implemented similarly to the bank statement journey steps
  return getBankStatementJourneySteps(); // Placeholder for now
};
