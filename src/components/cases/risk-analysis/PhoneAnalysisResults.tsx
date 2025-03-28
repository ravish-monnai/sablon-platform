
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, HelpCircle } from "lucide-react";

interface PhoneAnalysisResultsProps {
  phoneNumber: string;
}

const PhoneAnalysisResults: React.FC<PhoneAnalysisResultsProps> = ({ phoneNumber }) => {
  // Mock data for phone analysis results
  const phoneResults = [
    { 
      id: "P101", 
      description: "At least 2 online profiles were found", 
      status: "success" 
    },
    { 
      id: "P102", 
      description: "Phone number is active", 
      status: "success" 
    },
    { 
      id: "P106", 
      description: "Phone number is valid", 
      status: "success" 
    },
    { 
      id: "P108", 
      description: "Phone number did not return any social profile images", 
      status: "warning" 
    }
  ];

  // Render result icon based on status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <HelpCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Phone Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {phoneResults.map((result) => (
            <div key={result.id} className="flex items-start">
              {getStatusIcon(result.status)}
              <div className="ml-2">
                <p className="text-sm flex items-center">
                  <span className="font-mono text-xs bg-gray-100 px-1 rounded mr-2">{result.id}</span>
                  <span>{result.description}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhoneAnalysisResults;
