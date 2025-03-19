
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseItem } from "@/types/caseTypes";
import { AlertTriangle, CheckCircle, Clock, User, Mail, Phone, MapPin } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

interface OverviewTabProps {
  caseData: CaseItem;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ caseData }) => {
  // Risk factor data for pie chart
  const riskFactorData = caseData.decisionFactors?.map((factor) => ({
    name: factor.factor,
    value: factor.score,
    weight: factor.weight
  })) || [];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9b87f5'];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Customer Info Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Customer Information</CardTitle>
            <CardDescription>Basic details about the customer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Customer</p>
              <p className="font-medium">{caseData.customer}</p>
            </div>
            
            {caseData.email && (
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{caseData.email}</p>
              </div>
            )}
            
            {caseData.phone && (
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{caseData.phone}</p>
              </div>
            )}
            
            {caseData.location && (
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{caseData.location}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Risk Assessment Card */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Risk Assessment</CardTitle>
            <CardDescription>Overall risk analysis of the case</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <div className="flex items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${
                  caseData.riskLevel === "Critical" ? "bg-red-100 text-red-500" :
                  caseData.riskLevel === "High" ? "bg-red-100 text-red-400" :
                  caseData.riskLevel === "Medium" ? "bg-amber-100 text-amber-400" :
                  "bg-green-100 text-green-500"
                }`}>
                  {caseData.riskLevel === "Low" && <CheckCircle className="h-5 w-5" />}
                  {(caseData.riskLevel === "Critical" || caseData.riskLevel === "High") && 
                    <AlertTriangle className="h-5 w-5" />}
                  {caseData.riskLevel === "Medium" && <Clock className="h-5 w-5" />}
                </div>
                <div>
                  <p className="font-medium">Risk Score: {caseData.riskScore || 0}/100</p>
                  <p className="text-sm text-muted-foreground">
                    {caseData.riskLevel === "Low" && "Low risk, approval recommended."}
                    {caseData.riskLevel === "Medium" && "Medium risk, review recommended."}
                    {caseData.riskLevel === "High" && "High risk, manual review required."}
                    {caseData.riskLevel === "Critical" && "Critical risk, rejection recommended."}
                  </p>
                </div>
              </div>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    (caseData.riskScore || 0) >= 80 ? "bg-red-500" :
                    (caseData.riskScore || 0) >= 60 ? "bg-red-400" :
                    (caseData.riskScore || 0) >= 40 ? "bg-amber-400" :
                    "bg-green-500"
                  }`} 
                  style={{ width: `${caseData.riskScore || 0}%` }}
                ></div>
              </div>
            </div>

            {caseData.decisionFactors && caseData.decisionFactors.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-48">
                  <h3 className="font-medium mb-2">Risk Factors</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={riskFactorData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {riskFactorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Key Factors</h3>
                  {caseData.decisionFactors.map((factor, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="flex justify-between text-sm">
                        <span>{factor.factor}</span>
                        <span className="font-medium">{factor.score}</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                        <div 
                          className={`h-full ${
                            factor.score >= 80 ? "bg-red-500" :
                            factor.score >= 60 ? "bg-red-400" :
                            factor.score >= 40 ? "bg-amber-400" :
                            "bg-green-500"
                          }`} 
                          style={{ width: `${factor.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Anomalies section */}
      {caseData.anomalyFlags && caseData.anomalyFlags.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
              <CardTitle className="text-base">Detected Anomalies</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {caseData.anomalyFlags.map((flag, idx) => (
                <div key={idx} className="flex items-center text-sm bg-amber-50 text-amber-800 p-2 rounded-md">
                  <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                  <span>{flag}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OverviewTab;
