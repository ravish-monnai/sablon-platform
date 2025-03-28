
import React from "react";
import { BarChart2, ShieldAlert, CreditCard, User, AlertCircle } from "lucide-react";
import InvestigationCard from "./InvestigationCard";

interface CustomerCheckTabProps {
  onStartInvestigation: (type: string) => void;
}

const CustomerCheckTab: React.FC<CustomerCheckTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Check customer details by inputting various identifiers such as phone number,
        email, IP address, or device ID to assess risk levels and detect potential fraud.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InvestigationCard 
          title="Risk Analysis" 
          description="Analyze customer data for risk indicators and fraud signals" 
          icon={BarChart2}
          onStart={() => onStartInvestigation('risk-analysis')}
        />
        
        <InvestigationCard 
          title="Fraud Detection" 
          description="Check for signs of fraudulent activity in user behavior and patterns" 
          icon={ShieldAlert}
          onStart={() => onStartInvestigation('risk-analysis')}
        />
        
        <InvestigationCard 
          title="Transaction Check" 
          description="Review transaction history and payment method validation" 
          icon={CreditCard}
          onStart={() => onStartInvestigation('risk-analysis')}
        />
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-blue-800">Usage Tips</h4>
            <p className="text-sm text-blue-700 mt-1">
              For best results, provide multiple identifiers (e.g., both email and phone number) 
              to get a comprehensive risk assessment. The more data points provided, the more 
              accurate the analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCheckTab;
