
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrafficCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Request Volume Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-60 flex items-center justify-center bg-slate-50">
          <div className="text-center text-muted-foreground">
            Traffic volume visualization
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Response Time Analysis</CardTitle>
        </CardHeader>
        <CardContent className="h-60 flex items-center justify-center bg-slate-50">
          <div className="text-center text-muted-foreground">
            Response time visualization
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrafficCharts;
