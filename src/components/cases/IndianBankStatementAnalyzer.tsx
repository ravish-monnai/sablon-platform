
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, IndianRupee, ArrowUpRight } from "lucide-react";
import SummaryTabContent from "./indian-bank-statement/SummaryTabContent";
import AlertsTabContent from "./indian-bank-statement/AlertsTabContent";
import BanksTabContent from "./indian-bank-statement/BanksTabContent";
import UPITabContent from "./indian-bank-statement/UPITabContent";

const IndianBankStatementAnalyzer = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-amber-500" />
          <CardTitle>Bank Statement Analyzer Agent</CardTitle>
        </div>
        <CardDescription>
          Specialized analysis for Indian bank statements with UPI transaction support
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="banks">Banks</TabsTrigger>
            <TabsTrigger value="upi">UPI Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary">
            <SummaryTabContent />
          </TabsContent>
          
          <TabsContent value="alerts">
            <AlertsTabContent />
          </TabsContent>
          
          <TabsContent value="banks">
            <BanksTabContent />
          </TabsContent>
          
          <TabsContent value="upi">
            <UPITabContent />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <IndianRupee className="h-4 w-4" />
          View All Cases
        </Button>
        <Button size="sm" className="flex items-center gap-2">
          <ArrowUpRight className="h-4 w-4" />
          Go to Journey
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IndianBankStatementAnalyzer;
