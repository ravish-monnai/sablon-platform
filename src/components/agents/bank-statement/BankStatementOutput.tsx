
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BankStatementOutput = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="json-output">JSON Output</Label>
        <Switch id="json-output" checked={true} disabled />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="csv-export">CSV Export</Label>
        <Switch id="csv-export" checked={true} />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="pdf-report">PDF Report</Label>
        <Switch id="pdf-report" checked={false} />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="dashboard-visuals">Dashboard Visuals</Label>
        <Switch id="dashboard-visuals" checked={true} />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="api-webhook">API Webhook</Label>
        <Switch id="api-webhook" checked={true} />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="case-creation">Auto Case Creation</Label>
        <Switch id="case-creation" checked={true} />
      </div>
      
      <div className="pt-4">
        <Label className="mb-2 block">Output Integrations</Label>
        <Select defaultValue="crm">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select integration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="crm">CRM System</SelectItem>
            <SelectItem value="underwriting">Underwriting Platform</SelectItem>
            <SelectItem value="loan-origination">Loan Origination System</SelectItem>
            <SelectItem value="none">None</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BankStatementOutput;
