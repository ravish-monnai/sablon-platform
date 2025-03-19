
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  BadgeDollarSign, ArrowUpRight, ArrowDownRight, Wallet, CreditCard, BarChart3, 
  ShieldAlert, AlertTriangle, CheckCircle, Brain, MessageSquare, 
  ListChecks, IndianRupee, FileText, Calculator, Calendar,
  RefreshCw, TrendingUp, User, Bot, Scale
} from "lucide-react";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import {
  LineChart,
  Line,
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

const BankStatementTestResults: React.FC = () => {
  const [showAssistant, setShowAssistant] = useState(false);

  // Sample data for charts
  const incomeData = [
    { name: 'Jan', amount: 58000 },
    { name: 'Feb', amount: 59000 },
    { name: 'Mar', amount: 59000 },
    { name: 'Apr', amount: 59000 },
    { name: 'May', amount: 65000 },
    { name: 'Jun', amount: 65000 },
  ];

  const expenseData = [
    { name: 'Housing', value: 35 },
    { name: 'Transportation', value: 15 },
    { name: 'Food', value: 20 },
    { name: 'Utilities', value: 10 },
    { name: 'Entertainment', value: 10 },
    { name: 'Other', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#d88489'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-semibold">Indian Bank Statement Analysis Results</h3>
          <p className="text-sm text-muted-foreground">Analysis of HDFC Bank statements from January - June 2023</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <IndianRupee className="h-3 w-3" />
            HDFC Bank
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Jan - Jun 2023
          </Badge>
        </div>
      </div>

      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h3 className="font-medium">Analysis Completed Successfully</h3>
            </div>
            <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">
              Low Risk
            </Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            The bank statement shows consistent income, healthy cash flow patterns, and responsible financial behavior.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid grid-cols-4 md:grid-cols-8 h-auto p-1">
          <TabsTrigger value="summary" className="text-xs flex items-center gap-1 h-10">
            <ListChecks className="h-4 w-4" />
            <span className="hidden sm:inline">Summary</span>
          </TabsTrigger>
          <TabsTrigger value="income" className="text-xs flex items-center gap-1 h-10">
            <BadgeDollarSign className="h-4 w-4" />
            <span className="hidden sm:inline">Income</span>
          </TabsTrigger>
          <TabsTrigger value="cashflow" className="text-xs flex items-center gap-1 h-10">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Cash Flow</span>
          </TabsTrigger>
          <TabsTrigger value="debt" className="text-xs flex items-center gap-1 h-10">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Debt</span>
          </TabsTrigger>
          <TabsTrigger value="risk" className="text-xs flex items-center gap-1 h-10">
            <AlertTriangle className="h-4 w-4" />
            <span className="hidden sm:inline">Risk</span>
          </TabsTrigger>
          <TabsTrigger value="alternative" className="text-xs flex items-center gap-1 h-10">
            <Scale className="h-4 w-4" />
            <span className="hidden sm:inline">Alt Credit</span>
          </TabsTrigger>
          <TabsTrigger value="fraud" className="text-xs flex items-center gap-1 h-10">
            <ShieldAlert className="h-4 w-4" />
            <span className="hidden sm:inline">Fraud</span>
          </TabsTrigger>
          <TabsTrigger value="ai" className="text-xs flex items-center gap-1 h-10">
            <Brain className="h-4 w-4" />
            <span className="hidden sm:inline">AI Reasoning</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />
                    Income Summary
                  </CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3 text-green-600" />
                    Consistent
                  </Badge>
                </div>
                <CardDescription>Monthly average: ₹61,000</CardDescription>
              </CardHeader>
              <CardContent className="h-[130px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={incomeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis fontSize={10} />
                    <Line type="monotone" dataKey="amount" stroke="#4ade80" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-blue-600" />
                    Expense Breakdown
                  </CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <BarChart3 className="h-3 w-3 text-blue-600" />
                    Balanced
                  </Badge>
                </div>
                <CardDescription>Monthly average: ₹38,000</CardDescription>
              </CardHeader>
              <CardContent className="h-[130px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name }) => name}
                      labelLine={false}
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-purple-600" />
                    Risk Profile
                  </CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1 bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3" />
                    Low Risk
                  </Badge>
                </div>
                <CardDescription>Risk score: 15/100</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Fraud Risk</span>
                      <span className="font-medium">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Default Risk</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Identity Risk</span>
                      <span className="font-medium">8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <button 
              onClick={() => setShowAssistant(!showAssistant)}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/90 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              {showAssistant ? "Hide AI Assistant" : "Show AI Assistant"}
            </button>
            
            {showAssistant && (
              <Card className="mt-4 border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">AI Assistant</h4>
                      <p className="text-sm text-muted-foreground">
                        I can help you understand the bank statement analysis results. What specific aspect would you like me to explain?
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 transition-colors">Income stability?</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 transition-colors">Cash flow meaning?</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 transition-colors">Risk score explained</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 transition-colors">Why is this low risk?</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="income" className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-green-600" />
                  Regular Income Identification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Primary Income Source:</span>
                    <span className="text-sm font-medium">ACME Corp (Salary)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Payment Frequency:</span>
                    <span className="text-sm font-medium">Monthly (Last day)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Consistency Score:</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800">95/100</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium mb-2">Income Trend Analysis</h4>
                  <div className="h-[100px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={incomeData}>
                        <XAxis dataKey="name" fontSize={10} />
                        <YAxis fontSize={10} />
                        <Line type="monotone" dataKey="amount" stroke="#4ade80" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <BadgeDollarSign className="h-5 w-5 text-green-600" />
                  Income Amount Validation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 border rounded-md p-3">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Average Income</span>
                    </div>
                    <div className="text-xl font-bold text-green-600">₹61,000</div>
                    <div className="text-xs text-muted-foreground">Per month</div>
                  </div>
                  <div className="space-y-2 border rounded-md p-3">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Median Income</span>
                    </div>
                    <div className="text-xl font-bold text-green-600">₹59,000</div>
                    <div className="text-xs text-muted-foreground">Per month</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Income Volatility:</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800">Low (5.2%)</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Income Trend:</span>
                    <span className="text-sm font-medium flex items-center gap-1 text-green-600">
                      <TrendingUp className="h-4 w-4" /> Increasing
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <User className="h-5 w-5 text-amber-600" />
                Multiple Income Stream Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-md p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Secondary Income</span>
                      <Badge>Detected</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Freelance payments from XYZ Ltd</span>
                      <span className="text-sm font-medium text-green-600">₹15,000/month</span>
                    </div>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Passive Income</span>
                      <Badge>Detected</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Dividend payments</span>
                      <span className="text-sm font-medium text-green-600">₹2,500/quarter</span>
                    </div>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Income Diversification</span>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800">Medium</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Primary income represents 78% of total</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cashflow" className="mt-6 space-y-4">
          {/* Simplified cash flow tab content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Wallet className="h-5 w-5 text-blue-600" />
                Net Cash Flow Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Monthly Net Cash Flow</span>
                  </div>
                  <div className="text-xl font-bold text-green-600">₹23,000</div>
                  <div className="text-xs text-muted-foreground">Average per month</div>
                </div>
                <div className="border rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Cash Flow Trend</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium">Positive & Stable</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Consistent over 6 months</div>
                </div>
                <div className="border rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Cash Flow Stability</span>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800">High (92/100)</Badge>
                  <div className="text-xs text-muted-foreground mt-1">Low seasonal variations</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Reasoning & Summary
              </CardTitle>
              <CardDescription>Comprehensive analysis of the bank statement data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 border rounded-md bg-primary/5">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Executive Summary
                </h3>
                <p className="text-sm text-muted-foreground">
                  Based on the comprehensive analysis of the bank statement from HDFC Bank over the period January to June 2023, this individual demonstrates a strong financial profile with low risk indicators. The data shows consistent and growing income patterns, responsible expense management, and healthy cash flow metrics.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Key Strengths</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Consistent Primary Income</p>
                        <p className="text-xs text-muted-foreground">Salary deposits are regular and show an upward trend</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Diversified Income Sources</p>
                        <p className="text-xs text-muted-foreground">Additional income from freelance work and investments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Positive Cash Flow</p>
                        <p className="text-xs text-muted-foreground">Consistent surplus of income over expenses</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Responsible Debt Management</p>
                        <p className="text-xs text-muted-foreground">All recurring obligations paid on time</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Areas for Consideration</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Emergency Fund</p>
                        <p className="text-xs text-muted-foreground">Could be strengthened to provide better financial cushion</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">High Housing Expense Ratio</p>
                        <p className="text-xs text-muted-foreground">Housing costs represent 35% of total expenses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">AI Decision Path</h3>
                <div className="p-4 border rounded-md">
                  <div className="relative">
                    <div className="absolute left-1.5 top-1 bottom-0 w-0.5 bg-primary/20"></div>
                    <div className="space-y-6">
                      <div className="ml-6 relative">
                        <div className="absolute -left-9 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/30">
                          <span className="text-xs text-primary font-medium">1</span>
                        </div>
                        <p className="text-sm font-medium">Income Verification</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          AI identified consistent salary deposits from the same source over the entire period, with two increases in May, indicating strong employment stability.
                        </p>
                      </div>
                      
                      <div className="ml-6 relative">
                        <div className="absolute -left-9 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/30">
                          <span className="text-xs text-primary font-medium">2</span>
                        </div>
                        <p className="text-sm font-medium">Cash Flow Analysis</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          AI calculated positive monthly cash flow averaging ₹23,000, with no negative months, indicating strong ability to manage expenses.
                        </p>
                      </div>
                      
                      <div className="ml-6 relative">
                        <div className="absolute -left-9 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/30">
                          <span className="text-xs text-primary font-medium">3</span>
                        </div>
                        <p className="text-sm font-medium">Risk Assessment</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          AI detected no suspicious transactions, consistent spending patterns, and no overdrafts or returned payments.
                        </p>
                      </div>
                      
                      <div className="ml-6 relative">
                        <div className="absolute -left-9 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/30">
                          <span className="text-xs text-primary font-medium">4</span>
                        </div>
                        <p className="text-sm font-medium">Final Conclusion</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Based on the comprehensive analysis, the AI has classified this profile as Low Risk with high confidence (92%).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Include simplified placeholder content for other tabs (debt, risk, alternative, fraud, etc.) */}
        <TabsContent value="debt" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-blue-600" />
                Debt Service Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-md text-center space-y-2">
                <div className="flex justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-medium">Healthy Debt Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Debt-to-income ratio: 18% (Well below the 36% threshold)
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Risk Profiling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-md text-center space-y-2">
                <h3 className="font-medium">Low Risk Profile</h3>
                <p className="text-sm text-muted-foreground">
                  No high-risk transactions or financial management concerns detected
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alternative" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-purple-600" />
                Alternative Credit Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-md text-center space-y-2">
                <h3 className="font-medium">Strong Alternative Credit Indicators</h3>
                <p className="text-sm text-muted-foreground">
                  Consistent utility payments and financial responsibility indicators present
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fraud" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-red-600" />
                Fraud Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-md text-center space-y-2">
                <div className="flex justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-medium">No Fraud Indicators</h3>
                <p className="text-sm text-muted-foreground">
                  All transactions consistent with normal financial behavior
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BankStatementTestResults;
