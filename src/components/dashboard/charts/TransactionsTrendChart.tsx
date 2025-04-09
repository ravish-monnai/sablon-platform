
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ComposedChart,
  Area
} from "recharts";

interface TransactionData {
  name: string;
  transactions: number;
  users: number;
  statements?: number;
  cases?: number;
}

interface TransactionsTrendChartProps {
  data: TransactionData[];
}

const TransactionsTrendChart: React.FC<TransactionsTrendChartProps> = ({ data }) => {
  // Find max value for proper scaling
  const maxTransactions = Math.max(...data.map(item => item.transactions));
  const maxUsers = Math.max(...data.map(item => item.users));
  
  // Custom tooltip to make it more informative and sleek
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border shadow-md rounded-md">
          <p className="font-medium text-sm">{`${label}`}</p>
          <div className="text-[#10B981] flex items-center gap-1 text-sm">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            Transactions: {payload[0].value}
          </div>
          <div className="text-[#8B5CF6] flex items-center gap-1 text-sm">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
            Users: {payload[1].value}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart 
          data={data}
          margin={{ top: 5, right: 10, bottom: 5, left: 10 }}
        >
          <defs>
            <linearGradient id="colorTransactions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis 
            dataKey="name" 
            scale="point" 
            padding={{ left: 20, right: 20 }} 
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickLine={false}
          />
          <YAxis 
            yAxisId="left" 
            orientation="left" 
            stroke="#10B981"
            tickLine={false}
            axisLine={false}
            tickFormatter={value => value >= 1000 ? `${value/1000}k` : value}
            domain={[0, maxTransactions * 1.2]}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            stroke="#8B5CF6"
            tickLine={false}
            axisLine={false}
            tickFormatter={value => value >= 1000 ? `${value/1000}k` : value}
            domain={[0, maxUsers * 1.2]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            iconType="circle" 
            iconSize={8} 
            wrapperStyle={{ paddingTop: 10 }} 
          />
          <Bar 
            yAxisId="left" 
            dataKey="transactions" 
            fill="#10B981" 
            name="Transactions" 
            radius={[4, 4, 0, 0]} 
            barSize={25}
            fillOpacity={0.8}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="users"
            stroke="#8B5CF6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUsers)"
            name="Users"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="users"
            stroke="#8B5CF6"
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2, fill: "white" }}
            name="Users"
            activeDot={{ r: 6, strokeWidth: 0, fill: "#8B5CF6" }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(TransactionsTrendChart);
