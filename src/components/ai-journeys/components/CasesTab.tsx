
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Filter, 
  Download, 
  ArrowUpRight, 
  CheckCircle, 
  AlertTriangle, 
  Calendar, 
  User, 
  DollarSign, 
  FileText
} from "lucide-react";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";

const CasesTab: React.FC = () => {
  // Sample cases data for bank statement analysis journey
  const cases = [
    {
      id: "BSA-2023-10-01",
      customer: "Rahul Sharma",
      bank: "HDFC Bank",
      date: "October 1, 2023",
      amount: "₹4,25,000.00",
      status: "success",
      details: "All verification checks passed",
      risk: "Low Risk"
    },
    {
      id: "BSA-2023-09-15",
      customer: "Priya Patel",
      bank: "SBI Bank",
      date: "September 15, 2023",
      amount: "₹7,85,000.00",
      status: "success",
      details: "Income verification passed",
      risk: "Low Risk"
    },
    {
      id: "BSA-2023-09-12",
      customer: "Vivek Singh",
      bank: "ICICI Bank",
      date: "September 12, 2023",
      amount: "₹6,50,000.00",
      status: "failure",
      details: "Suspicious transaction pattern detected",
      risk: "High Risk"
    },
    {
      id: "BSA-2023-09-08",
      customer: "Ananya Desai",
      bank: "Axis Bank",
      date: "September 8, 2023",
      amount: "₹3,20,000.00",
      status: "failure",
      details: "Income inconsistency detected",
      risk: "High Risk"
    },
    {
      id: "BSA-2023-09-05",
      customer: "Ravi Kumar",
      bank: "Yes Bank",
      date: "September 5, 2023",
      amount: "₹5,15,000.00",
      status: "success",
      details: "All verification checks passed",
      risk: "Low Risk"
    }
  ];

  return (
    <div className="space-y-6 pt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Recent Analysis Cases</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      </div>
      
      {/* Table view for cases */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Bank</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map((caseItem) => (
                <TableRow key={caseItem.id}>
                  <TableCell className="font-medium">{caseItem.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      {caseItem.customer}
                    </div>
                  </TableCell>
                  <TableCell>{caseItem.bank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {caseItem.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      {caseItem.amount}
                    </div>
                  </TableCell>
                  <TableCell>
                    {caseItem.status === "success" ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> 
                        Success
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> 
                        {caseItem.risk}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Card view for cases (more detailed view) */}
      <div className="space-y-4">
        {cases.map((caseItem) => (
          <Card key={caseItem.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                {caseItem.status === "success" ? (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> 
                    Success
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" /> 
                    {caseItem.risk}
                  </Badge>
                )}
                <Badge variant="outline">{caseItem.bank}</Badge>
              </div>
              <CardTitle className="text-lg mt-2">Case #{caseItem.id}</CardTitle>
              <CardDescription>{caseItem.details}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 py-2">
                <div>
                  <p className="text-sm text-muted-foreground">Customer</p>
                  <p className="font-medium">{caseItem.customer}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Amount</p>
                  <p className="font-medium">{caseItem.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Analysis date</p>
                  <p className="font-medium">{caseItem.date}</p>
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-4">
              <Button variant="outline" size="sm" className="w-full">
                View Analysis Details
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CasesTab;
