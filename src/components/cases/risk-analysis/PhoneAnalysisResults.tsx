
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, AlertTriangle, HelpCircle, XCircle, 
  Smartphone, Calendar, RefreshCw, Building, Globe, 
  AlertCircle, Clock, Shield
} from "lucide-react";

interface PhoneAnalysisResultsProps {
  phoneNumber: string;
}

const PhoneAnalysisResults: React.FC<PhoneAnalysisResultsProps> = ({ phoneNumber }) => {
  // Mock data for phone analysis results based on the given structure
  const phoneBasicInfo = {
    phoneValid: true,
    active: "NO",
    phoneType: "VOIP",
    phoneDisposable: true,
    simType: "VIRTUAL",
    country: "US",
    originalCarrier: "Twilio Inc.",
    currentCarrier: "Twilio Inc.",
  };
  
  const phoneLifecycle = {
    activationDate: "2024-01-15",
    deactivationDate: "2024-03-01",
    ported: false,
    phoneTenure: { min: 2, max: 3 }
  };
  
  // Generate risk flags based on phone data
  const riskFlags = [
    { 
      id: "P101", 
      description: "Phone number is a disposable VOIP number", 
      status: "error",
      icon: XCircle 
    },
    { 
      id: "P102", 
      description: "Phone is currently inactive", 
      status: "error",
      icon: XCircle 
    },
    { 
      id: "P103", 
      description: `Phone was active for only ${phoneLifecycle.phoneTenure.min} months`, 
      status: "warning",
      icon: AlertTriangle 
    },
    { 
      id: "P104", 
      description: "Number has not been ported", 
      status: "success",
      icon: CheckCircle 
    },
    { 
      id: "P105", 
      description: "Carrier is consistent with registration", 
      status: "success",
      icon: CheckCircle 
    }
  ];

  // Render result icon based on status
  const getStatusIcon = (Icon: React.ElementType, status: string) => {
    switch (status) {
      case "success":
        return <Icon className="h-4 w-4 text-green-500" />;
      case "warning":
        return <Icon className="h-4 w-4 text-amber-500" />;
      case "error":
        return <Icon className="h-4 w-4 text-red-500" />;
      default:
        return <Icon className="h-4 w-4 text-gray-500" />;
    }
  };

  // Get status badge 
  const getStatusBadge = (active: string, disposable: boolean) => {
    if (active === "NO" && disposable) {
      return <Badge variant="destructive" className="ml-2">High Risk</Badge>;
    } else if (active === "NO" || disposable) {
      return <Badge variant="warning" className="ml-2">Medium Risk</Badge>;
    }
    return <Badge variant="outline" className="bg-green-100 text-green-800 ml-2">Low Risk</Badge>;
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Smartphone className="h-5 w-5 mr-2 text-[#9b87f5]" />
            <CardTitle className="text-base">Phone Analysis</CardTitle>
          </div>
          {getStatusBadge(phoneBasicInfo.active, phoneBasicInfo.phoneDisposable)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Phone Basic Information */}
          <div className="bg-gray-50 rounded-md p-3 border">
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <Shield className="h-4 w-4 mr-1 text-[#9b87f5]" /> 
              Phone Verification
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-muted-foreground mr-1">Country:</span>
                <span className="font-medium">{phoneBasicInfo.country}</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-muted-foreground mr-1">Type:</span>
                <span className="font-medium">{phoneBasicInfo.phoneType}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-muted-foreground mr-1">Carrier:</span>
                <span className="font-medium">{phoneBasicInfo.currentCarrier}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-muted-foreground mr-1">Active Since:</span>
                <span className="font-medium">{phoneLifecycle.activationDate}</span>
              </div>
            </div>
          </div>
          
          {/* Risk Flags */}
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
          
          {/* Social Presence Summary */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <RefreshCw className="h-4 w-4 mr-1 text-[#9b87f5]" /> 
              Digital Activity
            </h3>
            <div className="flex text-sm gap-x-4">
              <div>
                <span className="text-muted-foreground">Total Profiles:</span>
                <span className="font-medium ml-1">19</span>
              </div>
              <div>
                <span className="text-muted-foreground">Local Platforms:</span>
                <span className="font-medium ml-1">63.64%</span>
              </div>
              <div>
                <span className="text-muted-foreground">Global Platforms:</span>
                <span className="font-medium ml-1">36.36%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhoneAnalysisResults;
