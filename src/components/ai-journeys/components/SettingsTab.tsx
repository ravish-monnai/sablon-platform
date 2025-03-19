
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SettingsTab: React.FC = () => {
  return (
    <div className="pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Journey Configuration</CardTitle>
          <CardDescription>Configure how the Indian Bank Statement Analyzer works</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Supported Indian Banks</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Badge variant="outline" className="justify-start">HDFC Bank</Badge>
              <Badge variant="outline" className="justify-start">State Bank of India</Badge>
              <Badge variant="outline" className="justify-start">ICICI Bank</Badge>
              <Badge variant="outline" className="justify-start">Axis Bank</Badge>
              <Badge variant="outline" className="justify-start">Kotak Mahindra Bank</Badge>
              <Badge variant="outline" className="justify-start">Punjab National Bank</Badge>
              <Badge variant="outline" className="justify-start">Bank of Baroda</Badge>
              <Badge variant="outline" className="justify-start">Yes Bank</Badge>
              <Badge variant="outline" className="justify-start">IndusInd Bank</Badge>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <h4 className="font-medium">UPI Transaction Detection</h4>
            <p className="text-sm text-muted-foreground">Specialized detection for UPI transactions from popular Indian payment apps</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Badge variant="outline" className="justify-start">Google Pay</Badge>
              <Badge variant="outline" className="justify-start">PhonePe</Badge>
              <Badge variant="outline" className="justify-start">Paytm</Badge>
              <Badge variant="outline" className="justify-start">Amazon Pay</Badge>
              <Badge variant="outline" className="justify-start">BHIM</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsTab;
