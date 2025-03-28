
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Network } from "lucide-react";

interface DataSourcesTabProps {
  onOpenSOPDialog: (title: string) => void;
}

const DataSourcesTab: React.FC<DataSourcesTabProps> = ({ onOpenSOPDialog }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Configure Data Sources</h3>
      <p className="text-sm text-muted-foreground">
        Select which data sources the Fraud Review Agent should access to evaluate cases.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card className="border-[#9b87f5]/30">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-[#9b87f5]" />
              <CardTitle className="text-base">Phone Basic</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Phone number validation, carrier data, line type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-7 text-xs"
                onClick={() => onOpenSOPDialog("Phone Basic Data Source")}
              >
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#9b87f5]/30">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-[#9b87f5]" />
              <CardTitle className="text-base">Phone Social</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Associated social profiles, usage patterns, reputation data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-7 text-xs"
                onClick={() => onOpenSOPDialog("Phone Social Data Source")}
              >
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#9b87f5]/30">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-[#9b87f5]" />
              <CardTitle className="text-base">Email Basic</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Email validation, domain info, deliverability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-7 text-xs"
                onClick={() => onOpenSOPDialog("Email Basic Data Source")}
              >
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#9b87f5]/30">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-[#9b87f5]" />
              <CardTitle className="text-base">Email Social</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Linked social accounts, registration info, online reputation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-7 text-xs"
                onClick={() => onOpenSOPDialog("Email Social Data Source")}
              >
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#9b87f5]/30">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Network className="h-5 w-5 mr-2 text-[#9b87f5]" />
              <CardTitle className="text-base">Network Graph</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Connections between users, entities, and transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-7 text-xs"
                onClick={() => onOpenSOPDialog("Network Graph Data Source")}
              >
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataSourcesTab;
