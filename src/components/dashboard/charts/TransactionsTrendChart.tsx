
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
  statements: number;
  cases: number;
}

interface TransactionsTrendChartProps {
  data: TransactionData[];
}

const TransactionsTrendChart: React.FC<TransactionsTrendChartProps> = ({ data }) => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="transactions" fill="#10B981" name="Transactions" />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="users"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Users"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionsTrendChart;
