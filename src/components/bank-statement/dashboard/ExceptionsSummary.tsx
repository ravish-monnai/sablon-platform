
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Wallet, CreditCard, AlertCircle } from "lucide-react";
import { FeatureValues } from "./FeatureValueTypes";
import { hasExceptions } from "./utils";

interface ExceptionsSummaryProps {
  featureValues: FeatureValues;
}

const ExceptionsSummary: React.FC<ExceptionsSummaryProps> = ({ featureValues }) => {
  const hasAnyExceptions = 
    hasExceptions(featureValues.income) || 
    hasExceptions(featureValues.cashFlow) || 
    hasExceptions(featureValues.debtService) || 
    hasExceptions(featureValues.riskProfile);
  
  if (!hasAnyExceptions) return null;
  
  return (
    <Card className="mt-6 border-red-300">
      <CardHeader className="pb-2 bg-red-50">
        <CardTitle className="text-sm flex items-center text-red-700">
          <AlertTriangle className="h-4 w-4 mr-1 text-red-500" />
          Highlighted Exceptions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          {hasExceptions(featureValues.income) && featureValues.income.exceptions.map((exception, idx) => (
            <div key={`income-${idx}`} className="flex items-center text-sm">
              <DollarSign className="h-4 w-4 mr-2 text-red-500" />
              <span>{exception}</span>
            </div>
          ))}
          
          {hasExceptions(featureValues.cashFlow) && featureValues.cashFlow.exceptions.map((exception, idx) => (
            <div key={`cashflow-${idx}`} className="flex items-center text-sm">
              <Wallet className="h-4 w-4 mr-2 text-red-500" />
              <span>{exception}</span>
            </div>
          ))}
          
          {hasExceptions(featureValues.debtService) && featureValues.debtService.exceptions.map((exception, idx) => (
            <div key={`debt-${idx}`} className="flex items-center text-sm">
              <CreditCard className="h-4 w-4 mr-2 text-red-500" />
              <span>{exception}</span>
            </div>
          ))}
          
          {hasExceptions(featureValues.riskProfile) && featureValues.riskProfile.exceptions.map((exception, idx) => (
            <div key={`risk-${idx}`} className="flex items-center text-sm">
              <AlertCircle className="h-4 w-4 mr-2 text-red-500" />
              <span>{exception}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExceptionsSummary;
