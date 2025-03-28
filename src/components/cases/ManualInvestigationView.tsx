
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AlertTriangle, UserCheck, PhoneCall } from "lucide-react";

const InvestigationCard = ({ 
  title, 
  description, 
  icon: Icon,
  onStart
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  onStart: () => void;
}) => (
  <Card className="border border-gray-200 hover:border-primary/50 transition-all">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-lg font-medium">{title}</CardTitle>
      <Icon className="h-5 w-5 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Button onClick={onStart} className="w-full">Start Investigation</Button>
    </CardContent>
  </Card>
);

const ManualInvestigationView = () => {
  const [activeTab, setActiveTab] = useState<string>("fraud-risk");
  
  const handleStartInvestigation = (type: string) => {
    console.log(`Starting ${type} investigation`);
    // In a real application, this would navigate to a details page or open a form
  };
  
  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">Manual Investigation</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="fraud-risk">Fraud Risk</TabsTrigger>
            <TabsTrigger value="identity-verification">Identity Verification</TabsTrigger>
            <TabsTrigger value="reachability">Reachability Scan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fraud-risk" className="space-y-4">
            <p className="text-muted-foreground mb-6">
              Investigate potential fraud risks by analyzing customer behavior patterns, transaction anomalies,
              and network connections.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InvestigationCard
                title="Transaction Pattern Analysis"
                description="Detect unusual patterns in transaction history that may indicate fraudulent activity"
                icon={AlertTriangle}
                onStart={() => handleStartInvestigation("transaction-pattern")}
              />
              <InvestigationCard
                title="Network Analysis"
                description="Examine network connections to identify potential fraud rings or suspicious relationships"
                icon={AlertTriangle}
                onStart={() => handleStartInvestigation("network-analysis")}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="identity-verification" className="space-y-4">
            <p className="text-muted-foreground mb-6">
              Verify customer identity through manual document review, biometric analysis, 
              and cross-reference with external databases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InvestigationCard
                title="Document Verification"
                description="Manually review identity documents for authenticity and consistency"
                icon={UserCheck}
                onStart={() => handleStartInvestigation("document-verification")}
              />
              <InvestigationCard
                title="Identity Cross-Check"
                description="Cross-reference customer information with external databases"
                icon={UserCheck}
                onStart={() => handleStartInvestigation("identity-cross-check")}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="reachability" className="space-y-4">
            <p className="text-muted-foreground mb-6">
              Verify customer reachability through phone, email, and address validation
              to ensure accurate contact information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InvestigationCard
                title="Contact Information Validation"
                description="Verify phone numbers, email addresses, and physical addresses for accuracy"
                icon={PhoneCall}
                onStart={() => handleStartInvestigation("contact-validation")}
              />
              <InvestigationCard
                title="Address Verification"
                description="Verify customer's residential address through various data sources"
                icon={PhoneCall}
                onStart={() => handleStartInvestigation("address-verification")}
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ManualInvestigationView;
