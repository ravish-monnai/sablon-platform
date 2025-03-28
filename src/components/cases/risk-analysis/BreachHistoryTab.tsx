
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Clock, Calendar, Lock, FileWarning } from "lucide-react";

interface BreachItem {
  platformName: string;
  breachDate: string;
  affectedUsers: number;
  dataTypes: string[];
  severity: "high" | "medium" | "low";
}

interface BreachHistoryTabProps {
  email: string;
}

const BreachHistoryTab: React.FC<BreachHistoryTabProps> = ({ email }) => {
  // Mock breach data
  const breaches: BreachItem[] = [
    {
      platformName: "Canva",
      breachDate: "2023-04-27",
      affectedUsers: 137_000_000,
      dataTypes: ["Email address", "Username", "Name", "Password (hashed)"],
      severity: "medium"
    },
    {
      platformName: "LinkedIn",
      breachDate: "2021-06-22",
      affectedUsers: 700_000_000,
      dataTypes: ["Email address", "Full names", "Phone numbers", "Physical addresses", "Geolocation data"],
      severity: "high"
    },
    {
      platformName: "Flipkart",
      breachDate: "2023-11-30",
      affectedUsers: 550_000,
      dataTypes: ["Email address", "Phone numbers", "Order details"],
      severity: "medium"
    },
    {
      platformName: "Adobe",
      breachDate: "2022-10-15",
      affectedUsers: 38_000_000,
      dataTypes: ["Email address", "Password hints", "Product preferences"],
      severity: "low"
    }
  ];

  // Get severity badge color
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge variant="destructive">High Risk</Badge>;
      case "medium":
        return <Badge variant="warning" className="bg-amber-100 hover:bg-amber-100 text-amber-800 border-0">Medium Risk</Badge>;
      default:
        return <Badge variant="outline" className="bg-blue-50 text-blue-700">Low Risk</Badge>;
    }
  };

  // Get security recommendations based on breach history
  const getRecommendations = () => {
    const hasHighSeverity = breaches.some(b => b.severity === "high");
    const hasPasswordBreach = breaches.some(b => b.dataTypes.some(d => d.includes("Password")));
    
    return [
      {
        title: "Update Passwords",
        description: "Change passwords for all affected accounts, especially where passwords were exposed.",
        priority: hasPasswordBreach ? "high" : "medium",
        icon: Lock
      },
      {
        title: "Enable Two-Factor Authentication",
        description: "Add an extra layer of security to prevent unauthorized access.",
        priority: hasHighSeverity ? "high" : "medium",
        icon: Shield
      },
      {
        title: "Monitor Credit Reports",
        description: "Regularly check your credit reports for suspicious activity.",
        priority: hasHighSeverity ? "high" : "low",
        icon: FileWarning
      }
    ];
  };

  const recommendations = getRecommendations();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-[#9b87f5]" />
            Data Breach Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 bg-red-50 rounded-md text-center">
              <p className="text-2xl font-bold text-red-500">{breaches.length}</p>
              <p className="text-xs text-muted-foreground">Total Breaches</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-md text-center">
              <p className="text-2xl font-bold text-amber-500">{breaches.filter(b => b.severity === "high").length}</p>
              <p className="text-xs text-muted-foreground">High Severity</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-md text-center">
              <p className="text-2xl font-bold text-blue-500">
                {new Date().getFullYear() - new Date(Math.min(...breaches.map(b => new Date(b.breachDate).getTime()))).getFullYear()} yrs
              </p>
              <p className="text-xs text-muted-foreground">Breach History</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {breaches.map((breach, index) => (
              <div key={index} className={`p-3 rounded-md border ${
                breach.severity === "high" ? "border-red-200 bg-red-50" : 
                breach.severity === "medium" ? "border-amber-200 bg-amber-50" : 
                "border-blue-200 bg-blue-50"
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded overflow-hidden mr-2">
                      <img
                        src={`https://logo.clearbit.com/${breach.platformName.toLowerCase()}.com`}
                        alt={breach.platformName}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${breach.platformName}&background=random&color=fff&size=32`;
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{breach.platformName}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{breach.breachDate}</span>
                      </div>
                    </div>
                  </div>
                  {getSeverityBadge(breach.severity)}
                </div>
                <div className="text-xs">
                  <p className="text-muted-foreground mb-1">
                    Affected {breach.affectedUsers.toLocaleString()} users
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {breach.dataTypes.map((type, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-white">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="border border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <Shield className="h-5 w-5 mr-2 text-[#9b87f5]" />
            Security Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Based on the breach history of this email address, we recommend the following security measures:
          </p>
          
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className={`p-4 rounded-md border ${
                rec.priority === "high" ? "border-red-200 bg-red-50" : 
                rec.priority === "medium" ? "border-amber-200 bg-amber-50" : 
                "border-blue-200 bg-blue-50"
              }`}>
                <div className="flex items-start">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    rec.priority === "high" ? "bg-red-100" : 
                    rec.priority === "medium" ? "bg-amber-100" : 
                    "bg-blue-100"
                  }`}>
                    <rec.icon className={`h-4 w-4 ${
                      rec.priority === "high" ? "text-red-500" : 
                      rec.priority === "medium" ? "text-amber-500" : 
                      "text-blue-500"
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{rec.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-[#E5DEFF] rounded-md">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-[#7E69AB] mr-2" />
              <p className="text-xs text-[#7E69AB]">
                <span className="font-medium">Last updated:</span> {new Date().toLocaleDateString()}. We continuously monitor for new breaches.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BreachHistoryTab;
