
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { 
  DollarSign, Wallet, CreditCard, AlertCircle, 
  ArrowUp, ArrowDown, TrendingUp, BarChart, 
  PieChart, LineChart
} from "lucide-react";
import FeatureSummaryCard from "./FeatureSummaryCard";
import { FeatureValues } from "./FeatureValueTypes";
import { 
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  Pie,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import ExceptionsSummary from "./ExceptionsSummary";

interface SummaryDashboardProps {
  featureValues: FeatureValues;
}

const SummaryDashboard: React.FC<SummaryDashboardProps> = ({ featureValues }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9b87f5'];

  // Income chart
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

  // Cash flow chart
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

  // Debt composition chart
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

  // Risk profile chart
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

  return (
    <Card className="mb-6 border-t-4 border-t-[#9b87f5]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Bank Statement Analysis Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Income Summary */}
          <FeatureSummaryCard
            icon={<DollarSign className="h-5 w-5 text-[#9b87f5] mr-1" />}
            title="Monthly Income"
            mainValue={featureValues.income.monthlyAverage}
            badgeLabel={featureValues.income.verificationStatus}
            badgeVariant={featureValues.income.verificationStatus === "Verified" ? "outline" : "secondary"}
            additionalInfo={
              <p className="text-sm text-muted-foreground">
                Consistency: <span className="font-medium">{featureValues.income.consistency}</span>
              </p>
            }
            exceptions={featureValues.income.exceptions}
          />

          {/* Cash Flow Summary */}
          <FeatureSummaryCard
            icon={<Wallet className="h-5 w-5 text-[#9b87f5] mr-1" />}
            title="Cash Flow"
            mainValue={featureValues.cashFlow.averageBalance}
            badgeLabel={`${featureValues.cashFlow.volatility} Volatility`}
            badgeVariant={featureValues.cashFlow.volatility === "Low" ? "outline" : "secondary"}
            additionalInfo={
              <div className="grid grid-cols-2 gap-1">
                <div className="flex items-center">
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-xs">In: {featureValues.cashFlow.monthlyInflow}</span>
                </div>
                <div className="flex items-center">
                  <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                  <span className="text-xs">Out: {featureValues.cashFlow.monthlyOutflow}</span>
                </div>
              </div>
            }
            exceptions={featureValues.cashFlow.exceptions}
          />

          {/* Debt Service Summary */}
          <FeatureSummaryCard
            icon={<CreditCard className="h-5 w-5 text-[#9b87f5] mr-1" />}
            title="Debt Service"
            mainValue={featureValues.debtService.ratio}
            badgeLabel={`${featureValues.debtService.riskAssessment} Risk`}
            badgeVariant={
              featureValues.debtService.riskAssessment === "Low" ? "outline" : 
              featureValues.debtService.riskAssessment === "Medium" ? "secondary" : 
              "destructive"
            }
            additionalInfo={
              <p className="text-xs text-muted-foreground">
                Monthly Debt: <span className="font-medium">{featureValues.debtService.existingDebt}</span>
              </p>
            }
            exceptions={featureValues.debtService.exceptions}
          />

          {/* Risk Profile Summary */}
          <FeatureSummaryCard
            icon={<AlertCircle className="h-5 w-5 text-[#9b87f5] mr-1" />}
            title="Risk Profile"
            mainValue={featureValues.riskProfile.score}
            badgeLabel={featureValues.riskProfile.trend}
            badgeVariant={
              featureValues.riskProfile.trend === "Improving" ? "outline" : 
              featureValues.riskProfile.trend === "Stable" ? "secondary" : 
              "destructive"
            }
            additionalInfo={
              <p className="text-xs text-muted-foreground">
                Overdrafts: <span className="font-medium">{featureValues.riskProfile.overdrafts}</span>
              </p>
            }
            exceptions={featureValues.riskProfile.exceptions}
          />
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
        <ExceptionsSummary featureValues={featureValues} />
      </CardContent>
    </Card>
  );
};

export default SummaryDashboard;
