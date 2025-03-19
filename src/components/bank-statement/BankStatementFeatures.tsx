
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  ArrowUp, 
  ArrowDown, 
  DollarSign, 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  CheckCircle,
  AlertCircle,
  BarChart,
  PieChart,
  LineChart,
  BanknoteIcon,
  CreditCard,
  FileText,
  Bot,
  ShieldAlert,
  ThumbsUp
} from "lucide-react";
import {
  Bar,
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line
} from "recharts";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

interface BankStatementFeaturesProps {
  activeTab?: string;
  caseData?: any;
}

const BankStatementFeatures: React.FC<BankStatementFeaturesProps> = ({ caseData }) => {
  // Mock feature values for demonstration
  const featureValues = {
    income: {
      monthlyAverage: caseData?.incomeDetails?.monthlyAverage || "$4,250",
      consistency: caseData?.incomeDetails?.consistency || "92%",
      verificationStatus: caseData?.incomeDetails?.verificationStatus || "Verified",
      sources: caseData?.incomeDetails?.sources || [
        { name: "Primary Employment", amount: "$3,900", frequency: "Monthly" },
        { name: "Side Business", amount: "$350", frequency: "Monthly" }
      ],
      monthlyData: [
        { month: "Jan", amount: 4100 },
        { month: "Feb", amount: 4200 },
        { month: "Mar", amount: 4150 },
        { month: "Apr", amount: 4300 },
        { month: "May", amount: 4250 },
        { month: "Jun", amount: 4350 },
      ],
      anomalies: [],
      exceptions: [] // Add empty exceptions array to fix the TypeScript error
    },
    cashFlow: {
      averageBalance: caseData?.cashFlowDetails?.averageBalance || "$2,850",
      monthlyInflow: caseData?.cashFlowDetails?.monthlyInflow || "$5,320",
      monthlyOutflow: caseData?.cashFlowDetails?.monthlyOutflow || "$4,780",
      volatility: caseData?.cashFlowDetails?.volatility || "Low",
      balanceTrend: [
        { month: "Jan", balance: 2500 },
        { month: "Feb", balance: 2700 },
        { month: "Mar", balance: 2600 },
        { month: "Apr", balance: 2900 },
        { month: "May", balance: 3000 },
        { month: "Jun", balance: 2850 },
      ],
      inOutFlow: [
        { month: "Jan", inflow: 5000, outflow: 4800 },
        { month: "Feb", inflow: 5100, outflow: 4900 },
        { month: "Mar", inflow: 5200, outflow: 5000 },
        { month: "Apr", inflow: 5300, outflow: 4700 },
        { month: "May", inflow: 5400, outflow: 4800 },
        { month: "Jun", inflow: 5320, outflow: 4780 },
      ],
      exceptions: []
    },
    debtService: {
      ratio: caseData?.debtServiceDetails?.ratio || "34%",
      existingDebt: caseData?.debtServiceDetails?.existingDebt || "$1,450",
      proposedDebt: caseData?.debtServiceDetails?.proposedDebt || "$650",
      riskAssessment: caseData?.debtServiceDetails?.riskAssessment || "Medium",
      debtComposition: [
        { name: "Mortgage", value: 1000 },
        { name: "Car Loan", value: 300 },
        { name: "Credit Card", value: 150 },
      ],
      exceptions: ["Debt service ratio above 30%"]
    },
    riskProfile: {
      score: caseData?.riskProfile?.score || "68/100",
      overdrafts: caseData?.riskProfile?.overdrafts || "2 instances",
      irregularActivity: caseData?.riskProfile?.irregularActivity || "Minimal",
      trend: caseData?.riskProfile?.trend || "Improving",
      riskFactors: [
        { factor: "Payment History", score: 75 },
        { factor: "Cash Flow Stability", score: 82 },
        { factor: "Account Age", score: 90 },
        { factor: "Transaction Patterns", score: 65 },
      ],
      exceptions: ["Two overdraft instances in the last 6 months"]
    },
    alternativeCredit: {
      metrics: [
        { name: "Rent/mortgage payment regularity", value: "98% on-time", status: "Good" },
        { name: "Utility payment consistency", value: "95% on-time", status: "Good" },
        { name: "Subscription service payment reliability", value: "99% on-time", status: "Excellent" },
        { name: "Informal loan repayment patterns", value: "No detection", status: "N/A" }
      ],
      indicators: [
        { name: "Savings behavior scoring", value: "72/100", status: "Good" },
        { name: "Investment activity detection", value: "Minimal", status: "Fair" },
        { name: "Insurance premium payment consistency", value: "100% on-time", status: "Excellent" },
        { name: "Financial planning service usage", value: "None detected", status: "N/A" }
      ]
    },
    fraudDetection: {
      verificationSignals: [
        { name: "Name match on deposits", value: "100% match", status: "Verified" },
        { name: "Address consistency with application", value: "100% match", status: "Verified" },
        { name: "Transaction location patterns", value: "Normal pattern", status: "Low Risk" },
        { name: "Digital footprint consistency", value: "Consistent", status: "Low Risk" }
      ],
      incomeManipulation: [
        { name: "Unusual deposit timing", value: "None detected", status: "Low Risk" },
        { name: "Round-sum deposit patterns", value: "1 instance", status: "Medium Risk" },
        { name: "Temporary balance inflation", value: "None detected", status: "Low Risk" },
        { name: "Deposit-withdrawal cycling", value: "None detected", status: "Low Risk" }
      ]
    },
    automatedUnderwriting: {
      accelerationMetrics: [
        { name: "Automated verification completion rate", value: "95%", status: "High" },
        { name: "Data sufficiency scoring", value: "87/100", status: "Good" },
        { name: "Exception flagging precision", value: "92%", status: "High" },
        { name: "Decision confidence scoring", value: "84/100", status: "Good" }
      ],
      standardizedCriteria: [
        { name: "Income stability index", value: "78/100", status: "Good" },
        { name: "Expense management score", value: "72/100", status: "Good" },
        { name: "Debt handling rating", value: "65/100", status: "Fair" },
        { name: "Financial stress resilience metric", value: "70/100", status: "Good" }
      ]
    },
    regulatoryCompliance: {
      kycVerification: [
        { name: "Identity confirmation signals", value: "All verified", status: "Compliant" },
        { name: "Activity pattern consistency", value: "Consistent", status: "Compliant" },
        { name: "Expected vs. actual usage patterns", value: "Match", status: "Compliant" },
        { name: "Customer profile validation", value: "Validated", status: "Compliant" }
      ],
      amlMonitoring: [
        { name: "Unusual transaction pattern detection", value: "None detected", status: "Low Risk" },
        { name: "High-risk jurisdiction transactions", value: "None detected", status: "Low Risk" },
        { name: "Structured transaction identification", value: "None detected", status: "Low Risk" },
        { name: "Source of funds verification", value: "Verified", status: "Compliant" }
      ]
    }
  };
  
  // Function to check if a feature has exceptions
  const hasExceptions = (feature) => {
    return feature.exceptions && feature.exceptions.length > 0;
  };

  const getStatusColor = (status) => {
    if (status === "Good" || status === "Excellent" || status === "Verified" || status === "Compliant" || status === "Low Risk") {
      return "text-green-500";
    } else if (status === "Fair" || status === "Medium Risk") {
      return "text-amber-500";
    } else if (status === "Poor" || status === "High Risk") {
      return "text-red-500";
    }
    return "text-gray-500";
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9b87f5'];

  // Custom income chart for main dashboard view
  const renderIncomeChart = () => (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={featureValues.income.monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#9b87f5" radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );

  // Cash flow chart for main dashboard view
  const renderCashFlowChart = () => (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={featureValues.cashFlow.inOutFlow}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="inflow" stroke="#00C49F" />
          <Line type="monotone" dataKey="outflow" stroke="#FF8042" />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );

  // Debt composition chart for main dashboard view
  const renderDebtChart = () => (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={featureValues.debtService.debtComposition}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {featureValues.debtService.debtComposition.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );

  // Risk profile chart for main dashboard view
  const renderRiskChart = () => (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={featureValues.riskProfile.riskFactors}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="factor" type="category" width={120} />
          <Tooltip />
          <Bar
            dataKey="score"
            fill="#9b87f5"
            radius={[0, 4, 4, 0]}
            label={{ position: 'right', formatter: (value) => `${value}` }}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );

  // Main Bank Statement Dashboard view
  const renderDashboard = () => (
    <Card className="mb-6 border-t-4 border-t-[#9b87f5]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Bank Statement Analysis Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Income Summary */}
          <Card className={`bg-white border ${hasExceptions(featureValues.income) ? 'border-red-300' : 'border-gray-200'}`}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-[#9b87f5] mr-1" />
                    <h3 className="font-medium text-sm">Monthly Income</h3>
                  </div>
                  <p className="text-xl font-bold mt-1">{featureValues.income.monthlyAverage}</p>
                </div>
                <Badge variant={featureValues.income.verificationStatus === "Verified" ? "outline" : "secondary"}>
                  {featureValues.income.verificationStatus}
                </Badge>
              </div>
              <div className="mt-2">
                <p className="text-sm text-muted-foreground">Consistency: <span className="font-medium">{featureValues.income.consistency}</span></p>
              </div>
              {hasExceptions(featureValues.income) && (
                <div className="mt-2 py-1 px-2 bg-red-50 rounded text-xs text-red-600 flex items-center">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  {featureValues.income.exceptions[0]}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Cash Flow Summary */}
          <Card className={`bg-white border ${hasExceptions(featureValues.cashFlow) ? 'border-red-300' : 'border-gray-200'}`}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <Wallet className="h-5 w-5 text-[#9b87f5] mr-1" />
                    <h3 className="font-medium text-sm">Cash Flow</h3>
                  </div>
                  <p className="text-xl font-bold mt-1">{featureValues.cashFlow.averageBalance}</p>
                </div>
                <Badge variant={featureValues.cashFlow.volatility === "Low" ? "outline" : "secondary"}>
                  {featureValues.cashFlow.volatility} Volatility
                </Badge>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1">
                <div className="flex items-center">
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-xs">In: {featureValues.cashFlow.monthlyInflow}</span>
                </div>
                <div className="flex items-center">
                  <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                  <span className="text-xs">Out: {featureValues.cashFlow.monthlyOutflow}</span>
                </div>
              </div>
              {hasExceptions(featureValues.cashFlow) && (
                <div className="mt-2 py-1 px-2 bg-red-50 rounded text-xs text-red-600 flex items-center">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  {featureValues.cashFlow.exceptions[0]}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Debt Service Summary */}
          <Card className={`bg-white border ${hasExceptions(featureValues.debtService) ? 'border-red-300' : 'border-gray-200'}`}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-[#9b87f5] mr-1" />
                    <h3 className="font-medium text-sm">Debt Service</h3>
                  </div>
                  <p className="text-xl font-bold mt-1">{featureValues.debtService.ratio}</p>
                </div>
                <Badge 
                  variant={
                    featureValues.debtService.riskAssessment === "Low" ? "outline" : 
                    featureValues.debtService.riskAssessment === "Medium" ? "secondary" : 
                    "destructive"
                  }
                >
                  {featureValues.debtService.riskAssessment} Risk
                </Badge>
              </div>
              <div className="mt-2">
                <p className="text-xs text-muted-foreground">Monthly Debt: <span className="font-medium">{featureValues.debtService.existingDebt}</span></p>
              </div>
              {hasExceptions(featureValues.debtService) && (
                <div className="mt-2 py-1 px-2 bg-red-50 rounded text-xs text-red-600 flex items-center">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  {featureValues.debtService.exceptions[0]}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Risk Profile Summary */}
          <Card className={`bg-white border ${hasExceptions(featureValues.riskProfile) ? 'border-red-300' : 'border-gray-200'}`}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-[#9b87f5] mr-1" />
                    <h3 className="font-medium text-sm">Risk Profile</h3>
                  </div>
                  <p className="text-xl font-bold mt-1">{featureValues.riskProfile.score}</p>
                </div>
                <Badge 
                  variant={
                    featureValues.riskProfile.trend === "Improving" ? "outline" : 
                    featureValues.riskProfile.trend === "Stable" ? "secondary" : 
                    "destructive"
                  }
                >
                  {featureValues.riskProfile.trend}
                </Badge>
              </div>
              <div className="mt-2">
                <p className="text-xs text-muted-foreground">Overdrafts: <span className="font-medium">{featureValues.riskProfile.overdrafts}</span></p>
              </div>
              {hasExceptions(featureValues.riskProfile) && (
                <div className="mt-2 py-1 px-2 bg-red-50 rounded text-xs text-red-600 flex items-center">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  {featureValues.riskProfile.exceptions[0]}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Income Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center">
                <TrendingUp className="h-4 w-4 mr-1 text-[#9b87f5]" />
                Income Trend (Last 6 Months)
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderIncomeChart()}
            </CardContent>
          </Card>
          
          {/* Cash Flow Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center">
                <BarChart className="h-4 w-4 mr-1 text-[#9b87f5]" />
                Income vs. Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderCashFlowChart()}
            </CardContent>
          </Card>
          
          {/* Debt Composition */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center">
                <PieChart className="h-4 w-4 mr-1 text-[#9b87f5]" />
                Debt Composition
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderDebtChart()}
            </CardContent>
          </Card>
          
          {/* Risk Factors */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center">
                <LineChart className="h-4 w-4 mr-1 text-[#9b87f5]" />
                Risk Factor Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderRiskChart()}
            </CardContent>
          </Card>
        </div>

        {/* Exceptions Summary */}
        {(hasExceptions(featureValues.income) || 
          hasExceptions(featureValues.cashFlow) || 
          hasExceptions(featureValues.debtService) || 
          hasExceptions(featureValues.riskProfile)) && (
          <Card className="mt-6 border-red-300">
            <CardHeader className="pb-2 bg-red-50">
              <CardTitle className="text-sm flex items-center text-red-700">
                <AlertTriangle className="h-4 w-4 mr-1 text-red-500" />
                Highlighted Exceptions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {hasExceptions(featureValues.income) && featureValues.income.exceptions.map((exception, idx) => (
                  <div key={`income-${idx}`} className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-red-500" />
                    <span>{exception}</span>
                  </div>
                ))}
                
                {hasExceptions(featureValues.cashFlow) && featureValues.cashFlow.exceptions.map((exception, idx) => (
                  <div key={`cashflow-${idx}`} className="flex items-center text-sm">
                    <Wallet className="h-4 w-4 mr-2 text-red-500" />
                    <span>{exception}</span>
                  </div>
                ))}
                
                {hasExceptions(featureValues.debtService) && featureValues.debtService.exceptions.map((exception, idx) => (
                  <div key={`debt-${idx}`} className="flex items-center text-sm">
                    <CreditCard className="h-4 w-4 mr-2 text-red-500" />
                    <span>{exception}</span>
                  </div>
                ))}
                
                {hasExceptions(featureValues.riskProfile) && featureValues.riskProfile.exceptions.map((exception, idx) => (
                  <div key={`risk-${idx}`} className="flex items-center text-sm">
                    <AlertCircle className="h-4 w-4 mr-2 text-red-500" />
                    <span>{exception}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );

  // Feature category table component
  const FeatureCategoryTable = ({ title, icon, data }) => (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.value}</TableCell>
                <TableCell className={getStatusColor(item.status)}>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <>
      {/* Dashboard overview for all feature tabs */}
      {renderDashboard()}
      
      {/* Tabulated feature results by category */}
      <div className="space-y-6">
        <FeatureCategoryTable 
          title="Income Verification" 
          icon={<DollarSign className="h-5 w-5 text-green-600" />}
          data={[
            { name: "Monthly Average", value: featureValues.income.monthlyAverage, status: "Good" },
            { name: "Consistency", value: featureValues.income.consistency, status: "Good" },
            { name: "Verification Status", value: featureValues.income.verificationStatus, status: "Verified" },
            ...featureValues.income.sources.map(source => ({
              name: `Source: ${source.name}`,
              value: source.amount,
              status: "Verified"
            }))
          ]}
        />
        
        <FeatureCategoryTable 
          title="Cash Flow Assessment" 
          icon={<Wallet className="h-5 w-5 text-blue-600" />}
          data={[
            { name: "Average Balance", value: featureValues.cashFlow.averageBalance, status: "Good" },
            { name: "Monthly Inflow", value: featureValues.cashFlow.monthlyInflow, status: "Good" },
            { name: "Monthly Outflow", value: featureValues.cashFlow.monthlyOutflow, status: "Good" },
            { name: "Volatility", value: featureValues.cashFlow.volatility, status: "Low Risk" }
          ]}
        />
        
        <FeatureCategoryTable 
          title="Debt Service Coverage" 
          icon={<CreditCard className="h-5 w-5 text-purple-600" />}
          data={[
            { name: "Debt Service Ratio", value: featureValues.debtService.ratio, status: "Medium Risk" },
            { name: "Existing Monthly Debt", value: featureValues.debtService.existingDebt, status: "Medium Risk" },
            { name: "Proposed Monthly Debt", value: featureValues.debtService.proposedDebt, status: "Medium Risk" },
            { name: "Risk Assessment", value: featureValues.debtService.riskAssessment, status: "Medium Risk" }
          ]}
        />
        
        <FeatureCategoryTable 
          title="Risk Profiling" 
          icon={<ShieldAlert className="h-5 w-5 text-red-600" />}
          data={[
            { name: "Risk Score", value: featureValues.riskProfile.score, status: "Medium Risk" },
            { name: "Overdrafts (Last 3 Months)", value: featureValues.riskProfile.overdrafts, status: "Medium Risk" },
            { name: "Irregular Activity", value: featureValues.riskProfile.irregularActivity, status: "Low Risk" },
            { name: "Trend", value: featureValues.riskProfile.trend, status: "Improving" }
          ]}
        />
        
        <FeatureCategoryTable 
          title="Alternative Credit Assessment" 
          icon={<ThumbsUp className="h-5 w-5 text-green-600" />}
          data={[
            ...featureValues.alternativeCredit.metrics,
            ...featureValues.alternativeCredit.indicators
          ]}
        />
        
        <FeatureCategoryTable 
          title="Fraud Detection" 
          icon={<ShieldAlert className="h-5 w-5 text-amber-600" />}
          data={[
            ...featureValues.fraudDetection.verificationSignals,
            ...featureValues.fraudDetection.incomeManipulation
          ]}
        />
        
        <FeatureCategoryTable 
          title="Automated Underwriting" 
          icon={<Bot className="h-5 w-5 text-blue-600" />}
          data={[
            ...featureValues.automatedUnderwriting.accelerationMetrics,
            ...featureValues.automatedUnderwriting.standardizedCriteria
          ]}
        />
        
        <FeatureCategoryTable 
          title="Regulatory Compliance" 
          icon={<FileText className="h-5 w-5 text-indigo-600" />}
          data={[
            ...featureValues.regulatoryCompliance.kycVerification,
            ...featureValues.regulatoryCompliance.amlMonitoring
          ]}
        />
      </div>
    </>
  );
};

export default BankStatementFeatures;
