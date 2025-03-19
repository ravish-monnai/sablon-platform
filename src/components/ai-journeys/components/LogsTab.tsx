
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LogsTab: React.FC = () => {
  return (
    <div className="pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Analysis Logs</CardTitle>
          <CardDescription>Recent system activity for this journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b pb-2">
              <div>
                <p className="font-medium">HDFC Bank statement analyzed</p>
                <p className="text-sm text-muted-foreground">Completed analysis in 1.2 seconds</p>
              </div>
              <Badge variant="outline">30 sec ago</Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-2">
              <div>
                <p className="font-medium">ICICI Bank statement analyzed</p>
                <p className="text-sm text-muted-foreground">Completed analysis in 1.5 seconds</p>
              </div>
              <Badge variant="outline">2 min ago</Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-2">
              <div>
                <p className="font-medium">SBI Bank statement analyzed</p>
                <p className="text-sm text-muted-foreground">Completed analysis in 1.8 seconds</p>
              </div>
              <Badge variant="outline">5 min ago</Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-2">
              <div>
                <p className="font-medium">Kotak Bank statement analyzed</p>
                <p className="text-sm text-muted-foreground">Completed analysis in 1.3 seconds</p>
              </div>
              <Badge variant="outline">10 min ago</Badge>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">System updated UPI transaction detection rules</p>
                <p className="text-sm text-muted-foreground">Added support for new UPI payment providers</p>
              </div>
              <Badge variant="outline">1 hour ago</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogsTab;
