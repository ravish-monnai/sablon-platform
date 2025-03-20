
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseItem } from "@/types/caseTypes";
import { CreditCard, BarChart3 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface TransactionsTabProps {
  caseData: CaseItem;
}

const TransactionsTab: React.FC<TransactionsTabProps> = ({ caseData }) => {
  // Sample transaction data
  const transactionData = [
    { category: "Salary", amount: 45000, type: "income" },
    { category: "Rent", amount: 15000, type: "expense" },
    { category: "Utilities", amount: 5000, type: "expense" },
    { category: "Groceries", amount: 8000, type: "expense" },
    { category: "Entertainment", amount: 3000, type: "expense" },
    { category: "Savings", amount: 10000, type: "savings" }
  ];

  // Get currency symbol based on market
  const getCurrencySymbol = (market?: string) => {
    if (!market) return "₹";
    
    switch (market) {
      case "India":
        return "₹";
      case "US":
        return "$";
      case "Mexico":
        return "$";
      case "Indonesia":
        return "Rp";
      case "Philippines":
        return "₱";
      default:
        return "₹";
    }
  };

  const currencySymbol = caseData.currency?.split(' ')[0] || getCurrencySymbol(caseData.market);

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
                <Tooltip formatter={(value) => [`${currencySymbol}${value.toLocaleString()}`, "Amount"]} />
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
                      <td className="py-2 px-3">{description}</td>
                      <td className={`py-2 px-3 text-right font-medium ${amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {currencySymbol}{Math.abs(amount).toLocaleString()}
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
