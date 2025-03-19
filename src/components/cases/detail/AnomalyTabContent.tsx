
import React from "react";
import { AlertTriangle, AlertCircle, CheckCircle, Info } from "lucide-react";
import { CaseItem } from "@/types/caseTypes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnomalyTabContentProps {
  caseData: CaseItem;
}

const AnomalyTabContent: React.FC<AnomalyTabContentProps> = ({ caseData }) => {
  // Generate placeholder anomalies based on status if none provided
  const anomalies = caseData.anomalyFlags || [];
  const hasAnomalies = anomalies.length > 0 || caseData.status !== "Low Risk";
  
  const getDefaultAnomalies = () => {
    if (caseData.status === "High Risk") {
      return [
        { 
          severity: "high", 
          title: "Irregular Cash Deposits", 
          description: "Multiple large cash deposits detected that don't match declared income."
        },
        { 
          severity: "high", 
          title: "Structured Transactions", 
          description: "Series of transactions just below reporting thresholds detected."
        },
        { 
          severity: "medium", 
          title: "Unusual Login Activity", 
          description: "Account accessed from multiple unusual locations in short timeframe."
        }
      ];
    } else if (caseData.status === "Medium Risk") {
      return [
        { 
          severity: "medium", 
          title: "Income Inconsistency", 
          description: "Declared income doesn't match transaction patterns in statement."
        },
        { 
          severity: "low", 
          title: "Document Discrepancy", 
          description: "Minor inconsistencies found in submitted documentation."
        }
      ];
    }
    return [];
  };
  
  const displayAnomalies = anomalies.length > 0 
    ? anomalies.map(flag => ({ 
        severity: caseData.status === "High Risk" ? "high" : "medium", 
        title: flag, 
        description: "Further investigation required."
      })) 
    : getDefaultAnomalies();
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center">
          <AlertTriangle className="h-4 w-4 mr-2 text-[#9b87f5]" />
          Anomaly Detection Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-3 bg-blue-50 rounded-md border border-blue-100">
          <div className="flex items-center mb-1">
            <Info className="h-4 w-4 mr-2 text-blue-500" />
            <h4 className="text-sm font-medium text-blue-800">Anomaly Detection System</h4>
          </div>
          <p className="text-xs text-blue-700">
            Our AI-powered anomaly detection system analyzes transaction patterns, behavior, and documentation to identify potential risks.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Detected Anomalies</h3>
            <Badge 
              variant={hasAnomalies ? "outline" : "secondary"} 
              className={
                !hasAnomalies ? "bg-green-100 text-green-800" : 
                caseData.status === "High Risk" ? "bg-red-100 text-red-800" : 
                "bg-amber-100 text-amber-800"
              }
            >
              {!hasAnomalies ? "No Anomalies" : 
                caseData.status === "High Risk" ? "High Risk" : "Medium Risk"}
            </Badge>
          </div>
          
          {!hasAnomalies ? (
            <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-md border">
              <CheckCircle className="h-12 w-12 text-green-500 mb-3" />
              <h3 className="text-base font-medium mb-1">No Anomalies Detected</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                Our system has analyzed this case and found no significant anomalies or risk indicators.
                Standard processing is recommended.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {displayAnomalies.map((anomaly, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-2 p-3 rounded-md border ${
                    anomaly.severity === 'high' ? 'bg-red-50 border-red-200' : 
                    anomaly.severity === 'medium' ? 'bg-amber-50 border-amber-200' : 
                    'bg-blue-50 border-blue-200'
                  }`}
                >
                  {anomaly.severity === 'high' ? (
                    <AlertTriangle className={`h-5 w-5 mt-0.5 text-red-500`} />
                  ) : anomaly.severity === 'medium' ? (
                    <AlertCircle className={`h-5 w-5 mt-0.5 text-amber-500`} />
                  ) : (
                    <Info className={`h-5 w-5 mt-0.5 text-blue-500`} />
                  )}
                  <div>
                    <p className="text-sm font-medium">{anomaly.title}</p>
                    <p className="text-xs text-muted-foreground">{anomaly.description}</p>
                  </div>
                </div>
              ))}
              
              {caseData.status === "High Risk" && (
                <div className="mt-6 p-3 bg-red-50 border border-red-200 rounded-md">
                  <h4 className="text-sm font-medium text-red-800 mb-1">Recommended Action</h4>
                  <p className="text-xs text-red-700">
                    Due to multiple high-risk anomalies, this case requires thorough manual review before proceeding.
                    Consider requesting additional documentation from the customer.
                  </p>
                </div>
              )}
              
              {caseData.status === "Medium Risk" && (
                <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-md">
                  <h4 className="text-sm font-medium text-amber-800 mb-1">Recommended Action</h4>
                  <p className="text-xs text-amber-700">
                    Additional verification is recommended for this case. Consider reviewing the flagged areas
                    before making a final decision.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnomalyTabContent;
