
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, Cpu, Gauge, Clock, Brain, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

interface ModelPerformanceStatsProps {
  selectedModel: string;
}

const ModelPerformanceStats: React.FC<ModelPerformanceStatsProps> = ({ selectedModel }) => {
  // Mock data for charts
  const accuracyData = [
    { name: "June", accuracy: 92 },
    { name: "July", accuracy: 93 },
    { name: "August", accuracy: 95 },
    { name: "September", accuracy: 94 },
    { name: "October", accuracy: 96 },
    { name: "November", accuracy: 97 },
  ];

  const latencyData = [
    { name: "June", latency: 320 },
    { name: "July", latency: 300 },
    { name: "August", latency: 280 },
    { name: "September", latency: 260 },
    { name: "October", latency: 240 },
    { name: "November", latency: 220 },
  ];

  const usageData = [
    { name: "Week 1", queries: 1200 },
    { name: "Week 2", queries: 1400 },
    { name: "Week 3", queries: 1600 },
    { name: "Week 4", queries: 1900 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <ModelStatCard 
          title="Accuracy" 
          value="97.2%" 
          description="Detection accuracy" 
          icon={<Gauge className="h-5 w-5 text-blue-500" />} 
          trend="+2.1% from last month"
          trendPositive={true}
        />
        <ModelStatCard 
          title="Latency" 
          value="218ms" 
          description="Average response time" 
          icon={<Clock className="h-5 w-5 text-green-500" />} 
          trend="-32ms from last month"
          trendPositive={true}
        />
        <ModelStatCard 
          title="Usage" 
          value="14.2k" 
          description="Queries this month" 
          icon={<Zap className="h-5 w-5 text-amber-500" />} 
          trend="+22% from last month"
          trendPositive={true}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Gauge className="h-5 w-5 mr-2 text-blue-500" />
                <CardTitle className="text-base">Accuracy Trend</CardTitle>
              </div>
            </div>
            <CardDescription className="text-xs">
              Model accuracy over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                  data={accuracyData}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[85, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke="#8884d8" 
                    strokeWidth={2} 
                    name="Accuracy (%)" 
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-green-500" />
                <CardTitle className="text-base">Latency Trend</CardTitle>
              </div>
            </div>
            <CardDescription className="text-xs">
              Response time in milliseconds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                  data={latencyData}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[200, 350]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="latency" 
                    stroke="#82ca9d" 
                    strokeWidth={2} 
                    name="Latency (ms)" 
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-amber-500" />
              <CardTitle className="text-base">Usage Statistics</CardTitle>
            </div>
          </div>
          <CardDescription className="text-xs">
            Number of queries processed by the model
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={usageData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="queries" fill="#8884d8" name="Queries" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center">
            <Brain className="h-5 w-5 mr-2 text-[#9b87f5]" />
            <CardTitle className="text-base">Model Comparison</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Performance comparison with other available models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-2 text-sm font-medium border-b pb-2">
              <div>Model</div>
              <div>Accuracy</div>
              <div>Avg. Latency</div>
              <div>Cost per 1k tokens</div>
            </div>
            
            <ModelComparisonRow
              modelName="GPT-4o"
              accuracy="97.2%"
              latency="218ms"
              cost="$0.01"
              isSelected={selectedModel === "gpt-4o"}
            />
            
            <ModelComparisonRow
              modelName="GPT-4o Mini"
              accuracy="95.8%"
              latency="180ms"
              cost="$0.005"
              isSelected={selectedModel === "gpt-4o-mini"}
            />
            
            <ModelComparisonRow
              modelName="Llama 3.1 70B"
              accuracy="94.5%"
              latency="240ms"
              cost="$0.003"
              isSelected={selectedModel === "llama-3.1-70b"}
            />
            
            <ModelComparisonRow
              modelName="Claude 3 Opus"
              accuracy="96.7%"
              latency="230ms"
              cost="$0.015"
              isSelected={selectedModel === "claude-3-opus"}
            />
            
            <ModelComparisonRow
              modelName="Claude 3 Sonnet"
              accuracy="95.2%"
              latency="200ms"
              cost="$0.008"
              isSelected={selectedModel === "claude-3-sonnet"}
            />
            
            <ModelComparisonRow
              modelName="Mixtral 8x7B"
              accuracy="93.1%"
              latency="210ms"
              cost="$0.002"
              isSelected={selectedModel === "mixtral-8x7b"}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface ModelStatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend: string;
  trendPositive: boolean;
}

const ModelStatCard: React.FC<ModelStatCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  trendPositive
}) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div>
            {icon}
          </div>
        </div>
        <div className={`text-xs mt-2 ${trendPositive ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </div>
      </CardContent>
    </Card>
  );
};

interface ModelComparisonRowProps {
  modelName: string;
  accuracy: string;
  latency: string;
  cost: string;
  isSelected: boolean;
}

const ModelComparisonRow: React.FC<ModelComparisonRowProps> = ({
  modelName,
  accuracy,
  latency,
  cost,
  isSelected
}) => {
  return (
    <div className={`grid grid-cols-4 gap-2 text-sm py-2 ${isSelected ? 'bg-muted/50 rounded-md' : ''}`}>
      <div className="font-medium">{modelName} {isSelected && <span className="text-xs ml-1 text-[#9b87f5]">(Current)</span>}</div>
      <div>{accuracy}</div>
      <div>{latency}</div>
      <div>{cost}</div>
    </div>
  );
};

export default ModelPerformanceStats;
