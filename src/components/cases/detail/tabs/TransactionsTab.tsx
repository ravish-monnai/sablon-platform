
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseItem } from "@/types/caseTypes";
import { CreditCard, BarChart3, Smartphone } from "lucide-react";
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
import { getCurrencySymbol, formatCurrency } from "@/components/bank-statement/dashboard/utils";

interface TransactionsTabProps {
  caseData: CaseItem;
}

const TransactionsTab: React.FC<TransactionsTabProps> = ({ caseData }) => {
  // Explicitly use the market to determine currency symbol
  const currencySymbol = getCurrencySymbol(caseData.market);
  
  // Check if this is an Indian case
  const isIndianCase = caseData.market === "India";
  
  // Sample transaction data
  const transactionData = [
    { category: "Salary", amount: 45000, type: "income" },
    { category: "Rent", amount: 15000, type: "expense" },
    { category: "Utilities", amount: 5000, type: "expense" },
    { category: "Groceries", amount: 8000, type: "expense" },
    { category: "Entertainment", amount: 3000, type: "expense" },
    { category: "Savings", amount: 10000, type: "savings" }
  ];
  
  // UPI app usage data for Indian cases
  const upiAppData = [
    { name: "Google Pay", value: 68 },
    { name: "PhonePe", value: 22 },
    { name: "Paytm", value: 8 },
    { name: "Others", value: 2 }
  ];
  
  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
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
                <Tooltip formatter={(value) => [formatCurrency(value as number, caseData.market), "Amount"]} />
                <Bar 
                  dataKey="amount" 
                  fill="#9b87f5" 
                  name="Amount" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* UPI Analysis for Indian Cases */}
          {isIndianCase && (
            <div className="mt-6 mb-4">
              <div className="flex items-center mb-2">
                <Smartphone className="h-5 w-5 mr-2 text-indigo-600" />
                <h3 className="font-medium">UPI Payment Analysis</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-64">
                  <h4 className="text-sm font-medium mb-2">UPI App Usage</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={upiAppData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {upiAppData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 rounded-md">
                    <h4 className="text-sm font-medium">UPI Transaction Summary</h4>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Total Transactions</p>
                        <p className="font-medium">47</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Total Amount</p>
                        <p className="font-medium">₹24,850</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Average Transaction</p>
                        <p className="font-medium">₹528</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Merchants</p>
                        <p className="font-medium">22</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-md">
                    <h4 className="text-sm font-medium text-blue-800">UPI Reliability Score</h4>
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-medium text-blue-800">92/100</p>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Good</Badge>
                    </div>
                    <p className="text-xs text-blue-700 mt-1">
                      Consistent pattern with verified merchants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                  
                  // Include UPI transactions for Indian cases
                  const categories = isIndianCase ? 
                    ['Salary', 'UPI Payment', 'UPI Transfer', 'Rent', 'Utilities', 'Groceries', 'Entertainment', 'Transport', 'Healthcare'] :
                    ['Salary', 'Rent', 'Utilities', 'Groceries', 'Entertainment', 'Transport', 'Healthcare'];
                    
                  const category = categories[Math.floor(Math.random() * categories.length)];
                  
                  const descriptions = {
                    'Salary': ['Monthly Salary', 'Payroll Deposit', 'Compensation'],
                    'Rent': ['Rent Payment', 'Housing Rent', 'Apartment Lease'],
                    'Utilities': ['Electricity Bill', 'Water Bill', 'Internet Payment'],
                    'Groceries': ['Supermarket', 'Grocery Store', 'Food Market'],
                    'Entertainment': ['Movie Tickets', 'Restaurant Bill', 'Concert Tickets'],
                    'Transport': ['Uber Ride', 'Fuel Payment', 'Train Ticket'],
                    'Healthcare': ['Medical Bill', 'Pharmacy', 'Health Insurance'],
                    'UPI Payment': ['UPI: GooglePay', 'UPI: PhonePe', 'UPI: Paytm'],
                    'UPI Transfer': ['UPI Transfer to Friend', 'UPI P2P', 'UPI Family Transfer']
                  };
                  
                  const description = descriptions[category][Math.floor(Math.random() * descriptions[category].length)];
                  
                  const date = new Date();
                  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
                  
                  // Get payment method based on market
                  const getPaymentMethod = () => {
                    const marketSpecificMethods: Record<string, string[]> = {
                      "India": ["UPI", "IMPS", "NEFT", "Credit Card", "Debit Card"],
                      "US": ["ACH", "Zelle", "Credit Card", "Debit Card", "Check"],
                      "Mexico": ["SPEI", "CoDi", "Debit Card", "Credit Card"],
                      "Indonesia": ["QRIS", "GoPay", "OVO", "Bank Transfer"],
                      "Philippines": ["InstaPay", "PESONet", "GCash", "Maya"]
                    };
                    
                    const defaultMethods = ["Bank Transfer", "Credit Card", "Debit Card"];
                    const methods = caseData.market ? 
                                   (marketSpecificMethods[caseData.market] || defaultMethods) : 
                                   defaultMethods;
                    
                    return methods[Math.floor(Math.random() * methods.length)];
                  };
                  
                  return (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-2 px-3">{date.toLocaleDateString()}</td>
                      <td className="py-2 px-3">
                        {description}
                        {isIndianCase && (category === 'UPI Payment' || category === 'UPI Transfer') && (
                          <Badge variant="outline" className="ml-2 bg-indigo-50 text-indigo-700 border-indigo-200 text-[10px]">
                            UPI
                          </Badge>
                        )}
                      </td>
                      <td className={`py-2 px-3 text-right font-medium ${amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {formatCurrency(Math.abs(amount), caseData.market)}
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
  );
};

export default TransactionsTab;
