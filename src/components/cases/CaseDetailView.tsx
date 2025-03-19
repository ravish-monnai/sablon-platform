import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import {
  FileText,
  BrainCircuit,
  AlertTriangle,
  CheckCircle,
  Clock,
  CreditCard,
  BarChart3,
  Calendar,
  ArrowLeft,
  Wallet,
  ChartLine,
  ShieldAlert
} from "lucide-react";

import BankStatementFeatures from "../bank-statement/BankStatementFeatures";

interface CaseDetailViewProps {
  caseData: any;
  onClose: () => void;
}

const CaseDetailView: React.FC<CaseDetailViewProps> = ({ caseData, onClose }) => {
  const [activeFeatureTab, setActiveFeatureTab] = useState("income-verification");
  
  // Sample transaction data
  const transactionData = [
    { category: "Salary", amount: 45000, type: "income" },
    { category: "Rent", amount: 15000, type: "expense" },
    { category: "Utilities", amount: 5000, type: "expense" },
    { category: "Groceries", amount: 8000, type: "expense" },
    { category: "Entertainment", amount: 3000, type: "expense" },
    { category: "Savings", amount: 10000, type: "savings" }
  ];

  // Risk factor data for pie chart
  const riskFactorData = caseData.decisionFactors.map((factor: any) => ({
    name: factor.factor,
    value: factor.score,
    weight: factor.weight
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9b87f5'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={onClose}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Back
          </Button>
          <h1 className="text-xl font-bold">{caseData.id}</h1>
          <Badge variant={
            caseData.riskLevel === "Critical" || caseData.riskLevel === "High" 
              ? "destructive" 
              : caseData.riskLevel === "Medium" 
                ? "secondary" 
                : "outline"
          }>
            {caseData.riskLevel === "Low" && <CheckCircle className="h-3 w-3 mr-1" />}
            {(caseData.riskLevel === "Critical" || caseData.riskLevel === "High") && 
              <AlertTriangle className="h-3 w-3 mr-1" />}
            {caseData.riskLevel === "Medium" && <Clock className="h-3 w-3 mr-1" />}
            {caseData.riskLevel} Risk
          </Badge>
        </div>
        <div className="flex gap-2">
          {caseData.status === "Pending Review" && (
            <>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-green-500 text-green-600 hover:bg-green-50"
              >
                <CheckCircle className="h-4 w-4 mr-1" /> Approve
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-red-500 text-red-600 hover:bg-red-50"
              >
                <AlertTriangle className="h-4 w-4 mr-1" /> Reject
              </Button>
            </>
          )}
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bank-features">Bank Statement Features</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="ai-reasoning">AI Reasoning</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
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
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{caseData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{caseData.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{caseData.location}</p>
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment Card */}
            <Card className="col-span-2">
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
                      <p className="font-medium">Risk Score: {caseData.riskScore}/100</p>
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
                        caseData.riskScore >= 80 ? "bg-red-500" :
                        caseData.riskScore >= 60 ? "bg-red-400" :
                        caseData.riskScore >= 40 ? "bg-amber-400" :
                        "bg-green-500"
                      }`} 
                      style={{ width: `${caseData.riskScore}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                          {riskFactorData.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Key Factors</h3>
                    {caseData.decisionFactors.map((factor: any, idx: number) => (
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
                  {caseData.anomalyFlags.map((flag: string, idx: number) => (
                    <div key={idx} className="flex items-center text-sm bg-amber-50 text-amber-800 p-2 rounded-md">
                      <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                      <span>{flag}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="bank-features" className="space-y-6">
          <Tabs value={activeFeatureTab} onValueChange={setActiveFeatureTab}>
            <TabsList className="flex flex-wrap h-auto py-2 overflow-auto mb-4">
              <TabsTrigger value="income-verification">Income Verification</TabsTrigger>
              <TabsTrigger value="cash-flow">Cash Flow Assessment</TabsTrigger>
              <TabsTrigger value="debt-service">Debt Service Coverage</TabsTrigger>
              <TabsTrigger value="risk-profiling">Risk Profiling</TabsTrigger>
              <TabsTrigger value="alternative-credit">Alternative Credit</TabsTrigger>
              <TabsTrigger value="fraud-detection">Fraud Detection</TabsTrigger>
              <TabsTrigger value="automated-underwriting">Automated Underwriting</TabsTrigger>
              <TabsTrigger value="regulatory">Regulatory Compliance</TabsTrigger>
            </TabsList>
            
            <BankStatementFeatures activeTab={activeFeatureTab} />
          </Tabs>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <CardTitle className="text-base">Bank Statement Transactions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-64">
                  <h3 className="font-medium mb-2">Transaction Breakdown</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={transactionData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Bar 
                        dataKey="amount" 
                        fill="#9b87f5" 
                        name="Amount" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="overflow-hidden rounded-lg border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="py-2 px-3 text-left">Date</th>
                        <th className="py-2 px-3 text-left">Description</th>
                        <th className="py-2 px-3 text-right">Amount</th>
                        <th className="py-2 px-3 text-left">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }).map((_, index) => {
                        const amount = Math.random() > 0.6 ? 
                          Math.floor(Math.random() * 10000) * -1 : 
                          Math.floor(Math.random() * 50000);
                        
                        const categories = ['Salary', 'Rent', 'Utilities', 'Groceries', 'Entertainment', 'Transport', 'Healthcare'];
                        const category = categories[Math.floor(Math.random() * categories.length)];
                        
                        const descriptions = {
                          'Salary': ['Monthly Salary', 'Payroll Deposit', 'Compensation'],
                          'Rent': ['Rent Payment', 'Housing Rent', 'Apartment Lease'],
                          'Utilities': ['Electricity Bill', 'Water Bill', 'Internet Payment'],
                          'Groceries': ['Supermarket', 'Grocery Store', 'Food Market'],
                          'Entertainment': ['Movie Tickets', 'Restaurant Bill', 'Concert Tickets'],
                          'Transport': ['Uber Ride', 'Fuel Payment', 'Train Ticket'],
                          'Healthcare': ['Medical Bill', 'Pharmacy', 'Health Insurance']
                        };
                        
                        const description = descriptions[category][Math.floor(Math.random() * descriptions[category].length)];
                        
                        const date = new Date();
                        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
                        
                        return (
                          <tr key={index} className="border-b last:border-0">
                            <td className="py-2 px-3">{date.toLocaleDateString()}</td>
                            <td className="py-2 px-3">{description}</td>
                            <td className={`py-2 px-3 text-right font-medium ${amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                              ₹{Math.abs(amount).toLocaleString()}
                            </td>
                            <td className="py-2 px-3">
                              <Badge variant="outline" className="bg-gray-100">
                                {category}
                              </Badge>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-reasoning" className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <BrainCircuit className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <CardTitle className="text-base">AI Reasoning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-[#9b87f5]/10 rounded-md p-4 border border-[#9b87f5]/20">
                <p className="text-sm">{caseData.reasoning}</p>
              </div>
              
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
                      and digital activity consistency. The overall risk score of {caseData.riskScore} indicates 
                      {caseData.riskLevel === "Low" ? " a low-risk profile suitable for standard approval." : 
                        caseData.riskLevel === "Medium" ? " a medium-risk profile requiring additional verification." : 
                        " a high-risk profile requiring manual review and possible rejection."}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CaseDetailView;
