
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Banknote, ChartLine, CreditCard, AlertTriangle, 
  Calculator, ShieldAlert, Bot, FileText
} from "lucide-react";

const BankStatementTestResults: React.FC = () => {
  return (
    <ScrollArea className="h-[500px]">
      <div className="space-y-4 p-1">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Badge variant="outline">HDFC</Badge>
              Account Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Account Type</p>
                <p className="text-sm font-medium">Savings Account</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Account Number</p>
                <p className="text-sm font-medium">XXXX-XXXX-1234</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Statement Period</p>
                <p className="text-sm font-medium">Apr 1 - Jun 30, 2023</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Closing Balance</p>
                <p className="text-sm font-medium">₹145,728.52</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="income" className="w-full">
          <TabsList className="grid grid-cols-8 h-auto">
            <TabsTrigger value="income" className="text-xs py-1 h-auto">
              <Banknote className="h-3.5 w-3.5 mr-1" /> Income
            </TabsTrigger>
            <TabsTrigger value="cashflow" className="text-xs py-1 h-auto">
              <ChartLine className="h-3.5 w-3.5 mr-1" /> Cash Flow
            </TabsTrigger>
            <TabsTrigger value="debt" className="text-xs py-1 h-auto">
              <CreditCard className="h-3.5 w-3.5 mr-1" /> Debt
            </TabsTrigger>
            <TabsTrigger value="risk" className="text-xs py-1 h-auto">
              <AlertTriangle className="h-3.5 w-3.5 mr-1" /> Risk
            </TabsTrigger>
            <TabsTrigger value="alternative" className="text-xs py-1 h-auto">
              <Calculator className="h-3.5 w-3.5 mr-1" /> Alt. Credit
            </TabsTrigger>
            <TabsTrigger value="fraud" className="text-xs py-1 h-auto">
              <ShieldAlert className="h-3.5 w-3.5 mr-1" /> Fraud
            </TabsTrigger>
            <TabsTrigger value="underwriting" className="text-xs py-1 h-auto">
              <Bot className="h-3.5 w-3.5 mr-1" /> Underwriting
            </TabsTrigger>
            <TabsTrigger value="regulatory" className="text-xs py-1 h-auto">
              <FileText className="h-3.5 w-3.5 mr-1" /> Regulatory
            </TabsTrigger>
          </TabsList>

          <TabsContent value="income" className="pt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Banknote className="h-4 w-4 mr-2 text-amber-500" />
                  Income Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2">Regular Income Identification</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Primary Income Source</p>
                      <p className="text-sm font-medium">Salary</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Income Frequency</p>
                      <p className="text-sm font-medium">Monthly (Last day)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Income Consistency Score</p>
                      <p className="text-sm font-medium">9.8/10 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Recurring Payment Pattern</p>
                      <p className="text-sm font-medium">Stable</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Income Amount Validation</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Average Monthly Income</p>
                      <p className="text-sm font-medium">₹85,000</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Median Monthly Income</p>
                      <p className="text-sm font-medium">₹85,000</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Income Trend</p>
                      <p className="text-sm font-medium">Stable <Badge className="ml-1 bg-blue-100 text-blue-800 hover:bg-blue-100">+2% YoY</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Income Volatility</p>
                      <p className="text-sm font-medium">Very Low (3.2%)</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Multiple Income Stream Analysis</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Secondary Income Sources</p>
                      <p className="text-sm font-medium">Rental Income</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Freelance/Gig Income</p>
                      <p className="text-sm font-medium">Not Detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Passive Income</p>
                      <p className="text-sm font-medium">Dividends, FD Interest</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Income Diversification Score</p>
                      <p className="text-sm font-medium">7.5/10 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Good</Badge></p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Income Stability Metrics</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Income Longevity</p>
                      <p className="text-sm font-medium">24+ months (observable history)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Gaps Between Income</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Seasonal Patterns</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Income Interruptions</p>
                      <p className="text-sm font-medium">0 in past 24 months</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Income Verification Flags</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Unusual Large Deposits</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Round-Sum Deposits</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Transfers vs. Genuine Income</p>
                      <p className="text-sm font-medium">All income sources verified</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Source Credibility Score</p>
                      <p className="text-sm font-medium">9.5/10 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cashflow" className="pt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <ChartLine className="h-4 w-4 mr-2 text-blue-500" />
                  Cash Flow Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2">Net Cash Flow Metrics</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Average Monthly Net Cash Flow</p>
                      <p className="text-sm font-medium">₹25,245</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Rolling 3-month Cash Flow</p>
                      <p className="text-sm font-medium">₹27,120 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Positive</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Cash Flow Trend</p>
                      <p className="text-sm font-medium">Increasing <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">+7.4% QoQ</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Min/Max Period</p>
                      <p className="text-sm font-medium">Max: May 2023 (₹29,458)</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Expense Analysis</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Fixed/Variable Expense Ratio</p>
                      <p className="text-sm font-medium">68:32</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Essential/Discretionary Ratio</p>
                      <p className="text-sm font-medium">73:27</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Expense Growth Rate</p>
                      <p className="text-sm font-medium">3.2% annually</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Expense-to-Income Ratio</p>
                      <p className="text-sm font-medium">70.3% <Badge className="ml-1 bg-blue-100 text-blue-800 hover:bg-blue-100">Moderate</Badge></p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Balance Management</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Average Daily Balance</p>
                      <p className="text-sm font-medium">₹112,450</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Balance Volatility</p>
                      <p className="text-sm font-medium">Low (15.7%)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Minimum Balance Maintained</p>
                      <p className="text-sm font-medium">₹84,235 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Healthy</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Balance Trend</p>
                      <p className="text-sm font-medium">Gradually Increasing</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Liquidity Indicators</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Days of Cash Buffer</p>
                      <p className="text-sm font-medium">84 days</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Quick Liquidity Ratio</p>
                      <p className="text-sm font-medium">2.3 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Strong</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Cash Reserve Adequacy</p>
                      <p className="text-sm font-medium">Excellent</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Emergency Fund Assessment</p>
                      <p className="text-sm font-medium">2.8 months of expenses</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="debt" className="pt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <CreditCard className="h-4 w-4 mr-2 text-purple-500" />
                  Debt Service Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2">Existing Debt Payment Analysis</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Identified Debt Payments</p>
                      <p className="text-sm font-medium">Home Loan, Car Loan, Credit Card</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Debt Payment-to-Income Ratio</p>
                      <p className="text-sm font-medium">32.4% <Badge className="ml-1 bg-blue-100 text-blue-800 hover:bg-blue-100">Moderate</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Debt Payment Consistency Score</p>
                      <p className="text-sm font-medium">9.7/10 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Debt Payment Trend</p>
                      <p className="text-sm font-medium">Stable</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Debt Capacity Assessment</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Residual Income After Debt</p>
                      <p className="text-sm font-medium">₹57,460</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Debt Service Coverage Ratio</p>
                      <p className="text-sm font-medium">2.08 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Strong</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Maximum Sustainable Debt</p>
                      <p className="text-sm font-medium">₹39,950 monthly</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Stress Test Result</p>
                      <p className="text-sm font-medium">Can withstand 23% income reduction</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Payment Behavior Patterns</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">On-Time Payment Frequency</p>
                      <p className="text-sm font-medium">100% (24/24 months)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Late Payment Patterns</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Minimum Payment Behavior</p>
                      <p className="text-sm font-medium">Always pays more than minimum</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Payment Prioritization</p>
                      <p className="text-sm font-medium">Mortgage first, then other debts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk" className="pt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                  Risk Profiling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2">Financial Distress Signals</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Overdraft Incidents</p>
                      <p className="text-sm font-medium">None in past 24 months</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">NSF/Returned Items</p>
                      <p className="text-sm font-medium">None in past 24 months</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Declined Transactions</p>
                      <p className="text-sm font-medium">1 in past 24 months (isolated)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Balance Depletion Speed</p>
                      <p className="text-sm font-medium">Normal</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">High-Risk Transaction Patterns</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Gambling Transactions</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Luxury Discretionary Spending</p>
                      <p className="text-sm font-medium">Low (3.2% of income)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">High-risk Merchant Categories</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Rapid Fund Depletion</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Financial Management Discipline</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Savings Behavior</p>
                      <p className="text-sm font-medium">Regular saver (8.5% of income)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Budget Adherence</p>
                      <p className="text-sm font-medium">Strong - consistent spending patterns</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Financial Planning</p>
                      <p className="text-sm font-medium">Evidence of systematic investing</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Financial Cushion</p>
                      <p className="text-sm font-medium">Well maintained</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fraud" className="pt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <ShieldAlert className="h-4 w-4 mr-2 text-red-500" />
                  Fraud Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2">Identity Verification Signals</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Name Match on Deposits</p>
                      <p className="text-sm font-medium">100% match with account holder</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Address Consistency</p>
                      <p className="text-sm font-medium">Consistent with application</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Employment Verification</p>
                      <p className="text-sm font-medium">Confirmed via deposit source</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Digital Footprint</p>
                      <p className="text-sm font-medium">Consistent patterns</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Suspicious Transaction Patterns</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Unusual Timing/Frequency</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Out-of-pattern Amounts</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Atypical Merchant Spending</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Velocity Check Results</p>
                      <p className="text-sm font-medium">All within normal parameters</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Application Consistency Checks</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Stated vs. Actual Income</p>
                      <p className="text-sm font-medium">Matches (98.5% accuracy)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Declared vs. Observed Debt</p>
                      <p className="text-sm font-medium">Matches (100% accuracy)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Reported vs. Actual Expenses</p>
                      <p className="text-sm font-medium">Slight variance (92% accuracy)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Lifestyle Consistency</p>
                      <p className="text-sm font-medium">Consistent with stated profile</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alternative" className="pt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Calculator className="h-4 w-4 mr-2 text-green-500" />
                  Alternative Credit Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2">Payment Consistency Metrics</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Rent/Mortgage Regularity</p>
                      <p className="text-sm font-medium">100% consistent</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Utility Payment Consistency</p>
                      <p className="text-sm font-medium">100% consistent</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Subscription Service Payments</p>
                      <p className="text-sm font-medium">100% consistent</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Informal Loan Repayments</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Financial Responsibility Indicators</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Savings Behavior Score</p>
                      <p className="text-sm font-medium">8.7/10 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Strong</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Investment Activity</p>
                      <p className="text-sm font-medium">Regular SIPs, occasional lump sums</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Insurance Premium Consistency</p>
                      <p className="text-sm font-medium">100% consistent</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Financial Planning Services</p>
                      <p className="text-sm font-medium">Evidence of usage</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Cash-Based Credit Alternatives</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Cash Flow-Based Creditworthiness</p>
                      <p className="text-sm font-medium">9.2/10 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Transaction History Depth</p>
                      <p className="text-sm font-medium">24+ months (extensive)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Income-to-Spending Stability</p>
                      <p className="text-sm font-medium">Very stable</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Financial Behavior Score</p>
                      <p className="text-sm font-medium">9.0/10 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="underwriting" className="pt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Bot className="h-4 w-4 mr-2 text-indigo-500" />
                  Automated Underwriting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2">Decision Acceleration Metrics</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Automated Verification Completion</p>
                      <p className="text-sm font-medium">100% <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Complete</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Data Sufficiency Score</p>
                      <p className="text-sm font-medium">9.8/10 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Exception Flags</p>
                      <p className="text-sm font-medium">None raised</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Decision Confidence Score</p>
                      <p className="text-sm font-medium">9.5/10 <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">High</Badge></p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Standardized Evaluation Criteria</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Income Stability Index</p>
                      <p className="text-sm font-medium">92/100</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Expense Management Score</p>
                      <p className="text-sm font-medium">88/100</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Debt Handling Rating</p>
                      <p className="text-sm font-medium">A+ <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Financial Stress Resilience</p>
                      <p className="text-sm font-medium">High (can withstand significant shocks)</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Manual Review Triggers</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Anomaly Detection</p>
                      <p className="text-sm font-medium">No anomalies detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Verification Gaps</p>
                      <p className="text-sm font-medium">None identified</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Conflicting Information</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">High-Risk Patterns</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regulatory" className="pt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-gray-500" />
                  Regulatory Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2">KYC Verification Components</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Identity Confirmation</p>
                      <p className="text-sm font-medium">Verified <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Complete</Badge></p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Activity Pattern Consistency</p>
                      <p className="text-sm font-medium">Consistent with declared purpose</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Expected vs. Actual Usage</p>
                      <p className="text-sm font-medium">Aligns with expectations</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Customer Profile Validation</p>
                      <p className="text-sm font-medium">Validated <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Complete</Badge></p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">AML Monitoring Metrics</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Unusual Transaction Patterns</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">High-Risk Jurisdiction Activity</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Structured Transactions</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Source of Funds Verification</p>
                      <p className="text-sm font-medium">All major sources verified</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-semibold mb-2">Responsible Lending Indicators</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Affordability Assessment</p>
                      <p className="text-sm font-medium">Indicates strong affordability</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Vulnerability Signals</p>
                      <p className="text-sm font-medium">None detected</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Over-indebtedness Risk</p>
                      <p className="text-sm font-medium">Low</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Financial Capability</p>
                      <p className="text-sm font-medium">High <Badge className="ml-1 bg-green-100 text-green-800 hover:bg-green-100">Strong</Badge></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between">
          <div className="flex items-center">
            <Badge variant="outline" className="bg-green-50 text-green-800 mr-2">
              Confidence: 97%
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-800">
              Analysis Time: 3.2s
            </Badge>
          </div>
          <Badge variant="outline" className="bg-amber-50 text-amber-800">
            Powered by GPT-4o
          </Badge>
        </div>
      </div>
    </ScrollArea>
  );
};

export default BankStatementTestResults;
