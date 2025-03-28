
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail, Calendar, Shield, AlertTriangle, CheckCircle,
  Globe, Building, ShieldCheck, XCircle, AlertCircle,
  MousePointer, BarChart, Clock
} from "lucide-react";

interface EmailAnalysisResultsProps {
  email: string;
}

const EmailAnalysisResults: React.FC<EmailAnalysisResultsProps> = ({ email }) => {
  // Mock data for digital footprint based on provided data
  const emailBasic = {
    deliverable: true,
    domainDetails: {
      domainName: "gmail.com",
      registered: true,
      companyName: "Google LLC",
      freeProvider: true,
      disposable: false,
      suspiciousTld: false,
      acceptAll: false,
      creationDate: "1995-08-13"
    },
    breach: {
      isBreached: true,
      breachCount: 12,
      firstBreachDate: "2021-09-17",
      lastBreachDate: "2024-06-10",
      breaches: [
        { platformName: "8fit", domainName: "8fit.com", breachDate: "2022-07-01" },
        { platformName: "Canva", domainName: "canva.com", breachDate: "2023-04-27" }
      ]
    },
    tenure: {
      years: 7.74,
      days: 2827
    },
    classification: {
      type: "PERSONAL",
      confidence: 95
    }
  };

  // Digital footprint categories
  const digitalCategories = [
    { 
      category: "Email Provider", 
      count: 1, 
      services: ["Google"],
      status: "success" 
    },
    { 
      category: "Ecommerce", 
      count: 6, 
      services: ["Amazon", "Flipkart", "Myntra", "Ajio", "Meesho", "Nykaa"],
      status: "success" 
    },
    { 
      category: "Social Media", 
      count: 3, 
      services: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
      status: "success" 
    },
    { 
      category: "Education", 
      count: 1, 
      services: ["Byjus"],
      status: "success" 
    }
  ];

  // Risk indicators based on email data
  const riskFlags = [
    emailBasic.breach.isBreached ? {
      id: "E101",
      description: `Email found in ${emailBasic.breach.breachCount} data breaches`,
      status: "warning",
      icon: AlertTriangle
    } : null,
    emailBasic.domainDetails.freeProvider ? {
      id: "E102",
      description: "Email uses free provider domain",
      status: "info",
      icon: AlertCircle
    } : null,
    emailBasic.tenure.years > 5 ? {
      id: "E103",
      description: `Email has ${emailBasic.tenure.years.toFixed(1)} years of history`,
      status: "success",
      icon: CheckCircle
    } : null,
    emailBasic.deliverable ? {
      id: "E104",
      description: "Email is deliverable",
      status: "success",
      icon: CheckCircle
    } : null
  ].filter(Boolean);

  // Get status icon based on status
  const getStatusIcon = (Icon: React.ElementType, status: string) => {
    switch (status) {
      case "success":
        return <Icon className="h-4 w-4 text-green-500" />;
      case "warning":
        return <Icon className="h-4 w-4 text-amber-500" />;
      case "error":
        return <Icon className="h-4 w-4 text-red-500" />;
      case "info":
        return <Icon className="h-4 w-4 text-blue-500" />;
      default:
        return <Icon className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2 text-[#9b87f5]" />
            <CardTitle className="text-base">Digital Footprint</CardTitle>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            {emailBasic.classification.type} ({emailBasic.classification.confidence}%)
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Email Domain Information */}
          <div className="bg-gray-50 rounded-md p-3 border">
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <Shield className="h-4 w-4 mr-1 text-[#9b87f5]" /> 
              Email Verification
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-muted-foreground mr-1">Domain:</span>
                <span className="font-medium">{emailBasic.domainDetails.domainName}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-muted-foreground mr-1">Provider:</span>
                <span className="font-medium">{emailBasic.domainDetails.companyName}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-muted-foreground mr-1">History:</span>
                <span className="font-medium">{emailBasic.tenure.years.toFixed(1)} years</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-muted-foreground mr-1">Type:</span>
                <span className="font-medium">
                  {emailBasic.domainDetails.freeProvider ? "Free" : "Premium"}
                </span>
              </div>
            </div>
          </div>
          
          {/* Risk Indicators */}
          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1 text-[#9b87f5]" /> 
              Risk Indicators
            </h3>
            <div className="space-y-2">
              {riskFlags.map((flag, index) => (
                <div key={flag.id} className="flex items-start">
                  {getStatusIcon(flag.icon, flag.status)}
                  <div className="ml-2">
                    <p className="text-sm flex items-center">
                      <span className="font-mono text-xs bg-gray-100 px-1 rounded mr-2">{flag.id}</span>
                      <span>{flag.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Footprint Categories */}
          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <BarChart className="h-4 w-4 mr-1 text-[#9b87f5]" /> 
              Digital Categories
            </h3>
            <div className="space-y-4">
              {digitalCategories.map((profile, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium">{profile.category}</p>
                    <Badge variant="outline" className="bg-blue-50">
                      {profile.count} Registered
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {profile.services.map((service, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Data Breach Information */}
          {emailBasic.breach.isBreached && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <h3 className="text-sm font-medium mb-2 flex items-center text-amber-600">
                <AlertTriangle className="h-4 w-4 mr-1 text-amber-500" /> 
                Data Breach History
              </h3>
              <div className="p-2 bg-amber-50 rounded-md border border-amber-100 text-sm">
                <p className="mb-1 font-medium">Found in {emailBasic.breach.breachCount} breaches</p>
                <div className="text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1 text-amber-500" />
                    <span>First breach: {emailBasic.breach.firstBreachDate}</span>
                  </div>
                  <div className="flex items-center mt-0.5">
                    <Clock className="h-3 w-3 mr-1 text-amber-500" />
                    <span>Latest breach: {emailBasic.breach.lastBreachDate}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailAnalysisResults;
