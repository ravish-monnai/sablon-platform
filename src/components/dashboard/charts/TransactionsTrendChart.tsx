
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
  ComposedChart
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
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart 
          data={data}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis yAxisId="left" orientation="left" stroke="#10B981" />
          <YAxis yAxisId="right" orientation="right" stroke="#8B5CF6" />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} 
          />
          <Legend iconSize={10} wrapperStyle={{ paddingTop: 10 }} />
          <Bar 
            yAxisId="left" 
            dataKey="transactions" 
            fill="#10B981" 
            name="Transactions" 
            radius={[4, 4, 0, 0]} 
            barSize={30} 
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="users"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={{ r: 3 }}
            name="Users"
            activeDot={{ r: 6 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(TransactionsTrendChart);
