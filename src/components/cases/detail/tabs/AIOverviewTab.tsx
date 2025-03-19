
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseItem } from "@/types/caseTypes";
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  BrainCircuit, 
  Cpu, 
  FileText,
  Shield,
  ThumbsUp,
  ThumbsDown,
  HelpCircle
} from "lucide-react";
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

interface AIOverviewTabProps {
  caseData: CaseItem;
}

const AIOverviewTab: React.FC<AIOverviewTabProps> = ({ caseData }) => {
  // Risk factor data for pie chart
  const riskFactorData = caseData.decisionFactors?.map((factor) => ({
    name: factor.factor,
    value: factor.score,
    weight: factor.weight
  })) || [];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9b87f5'];

  // Get decision recommendation based on risk level
  const getDecisionRecommendation = () => {
    switch (caseData.riskLevel) {
      case "Low":
        return {
          recommendation: "Approve",
          description: "The case shows low risk indicators with consistent income and good financial behavior. Automatic approval is recommended.",
          icon: <ThumbsUp className="h-5 w-5 text-green-500" />,
          actionClass: "bg-green-50 border-green-200 text-green-700"
        };
      case "Medium":
        return {
          recommendation: "Review",
          description: "The case has some risk indicators that require human review. Consider requesting additional verification before approval.",
          icon: <HelpCircle className="h-5 w-5 text-amber-500" />,
          actionClass: "bg-amber-50 border-amber-200 text-amber-700"
        };
      case "High":
      case "Critical":
        return {
          recommendation: "Reject",
          description: "The case shows significant risk factors with multiple anomalies. Rejection is recommended unless mitigating circumstances exist.",
          icon: <ThumbsDown className="h-5 w-5 text-red-500" />,
          actionClass: "bg-red-50 border-red-200 text-red-700"
        };
      default:
        return {
          recommendation: "Review",
          description: "No clear recommendation available. Please review the case manually.",
          icon: <HelpCircle className="h-5 w-5 text-gray-500" />,
          actionClass: "bg-gray-50 border-gray-200 text-gray-700"
        };
    }
  };

  const decision = getDecisionRecommendation();

  return (
    <div className="space-y-6">
      {/* Decision Recommendation */}
      <Card className="border border-[#9b87f5]/20">
        <CardHeader className="pb-2">
          <div className="flex items-center">
            <BrainCircuit className="h-5 w-5 mr-2 text-[#9b87f5]" />
            <CardTitle className="text-base">AI Decision Recommendation</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={`p-4 rounded-md border ${decision.actionClass}`}>
            <div className="flex items-center mb-2">
              {decision.icon}
              <span className="ml-2 font-medium text-lg">{decision.recommendation}</span>
            </div>
            <p className="text-sm">{decision.description}</p>
          </div>

          <div className="bg-[#9b87f5]/10 rounded-md p-4 border border-[#9b87f5]/20">
            <div className="flex items-start mb-3">
              <Cpu className="h-5 w-5 mr-2 text-[#9b87f5] mt-0.5" />
              <div>
                <h3 className="font-medium text-[#9b87f5]">AI Reasoning</h3>
                <p className="text-sm mt-1">{caseData.reasoning}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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

      {/* Detailed Analysis section from AI Reasoning tab */}
      <div className="mt-6">
        <h3 className="font-medium text-sm mb-2">Detailed Analysis</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-3 rounded-md">
            <h4 className="text-sm font-medium mb-1">Income Assessment</h4>
            <p className="text-xs text-gray-600">
              The customer's income pattern shows regular deposits from a verified employer source. 
              The income amount matches the stated income with a variance of less than 5%. 
              Historical income data shows consistency over the past 6 months with no significant fluctuations.
            </p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <h4 className="text-sm font-medium mb-1">Expense Behavior</h4>
            <p className="text-xs text-gray-600">
              Expense patterns indicate responsible financial management with consistent payment of essential bills.
              The expense-to-income ratio is within acceptable parameters at approximately 65%, which is below
              the threshold of concern (80%). No significant irregular or suspicious expense patterns detected.
            </p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <h4 className="text-sm font-medium mb-1">Risk Evaluation</h4>
            <p className="text-xs text-gray-600">
              Several risk factors were evaluated including transaction patterns, account management history,
              and digital activity consistency. The overall risk score of {caseData.riskScore || "N/A"} indicates 
              {caseData.riskLevel === "Low" ? " a low-risk profile suitable for standard approval." : 
                caseData.riskLevel === "Medium" ? " a medium-risk profile requiring additional verification." : 
                " a high-risk profile requiring manual review and possible rejection."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIOverviewTab;
