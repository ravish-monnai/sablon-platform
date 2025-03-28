
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertTriangle, UserCheck, X } from "lucide-react";

const DecisionsTab: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Decision Configuration</h3>
      <p className="text-sm text-muted-foreground">
        Configure how the agent should recommend decisions to close cases.
      </p>
      
      <div className="space-y-4 mt-4">
        <Card className="border-green-500/30">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <UserCheck className="h-5 w-5 mr-2 text-green-500" />
              <CardTitle className="text-base">Approve</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs" htmlFor="approve-threshold">Risk Score Threshold</label>
                  <Input id="approve-threshold" type="number" defaultValue="30" className="h-8" />
                </div>
                <div>
                  <label className="text-xs" htmlFor="approve-confidence">Minimum Confidence</label>
                  <Input id="approve-confidence" type="number" defaultValue="80" className="h-8" />
                </div>
              </div>
              <div>
                <label className="text-xs">Required Verifications</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">ID Document</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Email Verified</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-500/30">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
              <CardTitle className="text-base">Review Required</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs" htmlFor="review-lower">Lower Threshold</label>
                  <Input id="review-lower" type="number" defaultValue="30" className="h-8" />
                </div>
                <div>
                  <label className="text-xs" htmlFor="review-upper">Upper Threshold</label>
                  <Input id="review-upper" type="number" defaultValue="70" className="h-8" />
                </div>
              </div>
              <div>
                <label className="text-xs">Triggers for Review</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Multiple Attempts</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Network Flag</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Document Anomaly</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-500/30">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <X className="h-5 w-5 mr-2 text-red-500" />
              <CardTitle className="text-base">Reject</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs" htmlFor="reject-threshold">Risk Score Threshold</label>
                  <Input id="reject-threshold" type="number" defaultValue="70" className="h-8" />
                </div>
                <div>
                  <label className="text-xs" htmlFor="reject-confidence">Minimum Confidence</label>
                  <Input id="reject-confidence" type="number" defaultValue="85" className="h-8" />
                </div>
              </div>
              <div>
                <label className="text-xs">Automatic Rejection Triggers</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Blacklist Match</span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">ID Fraud Detected</span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Sanction List</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DecisionsTab;
