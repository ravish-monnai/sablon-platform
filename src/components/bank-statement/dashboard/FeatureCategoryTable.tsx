
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getStatusColor } from "./utils";
import { CheckCircle, XCircle, AlertTriangle, HelpCircle } from "lucide-react";

interface FeatureData {
  name: string;
  value: string;
  status: string;
}

interface FeatureCategoryTableProps {
  title: string;
  icon: React.ReactNode;
  data: FeatureData[];
}

const FeatureCategoryTable: React.FC<FeatureCategoryTableProps> = ({ title, icon, data }) => {
  // Function to render appropriate status icon
  const renderStatusIcon = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('good') || statusLower.includes('verified')) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    } else if (statusLower.includes('medium')) {
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    } else if (statusLower.includes('high') || statusLower.includes('risk')) {
      return <XCircle className="h-5 w-5 text-red-500" />;
    } else {
      return <HelpCircle className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <Card className="mb-6 overflow-hidden border-l-4" style={{ borderLeftColor: 'var(--color-accent, #9b87f5)' }}>
      <CardHeader className="pb-2 bg-gray-50">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Feature</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <div className="font-semibold">{item.value}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {renderStatusIcon(item.status)}
                    <span className={getStatusColor(item.status)}>{item.status}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default FeatureCategoryTable;
