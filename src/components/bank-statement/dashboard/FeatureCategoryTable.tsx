
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { getStatusColor } from "./utils";

interface FeatureItemProps {
  name: string;
  value: string | number;
  status: string;
}

interface FeatureCategoryTableProps {
  title: string;
  icon: React.ReactNode;
  data: FeatureItemProps[];
  description?: string; // New prop for tooltip description
}

const FeatureCategoryTable: React.FC<FeatureCategoryTableProps> = ({ 
  title, 
  icon, 
  data,
  description
}) => {
  return (
    <div className="border rounded-lg">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="font-medium">{title}</h3>
          
          {description && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help ml-1" />
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p>{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Indicator</TableHead>
            <TableHead className="text-right">Value</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell className="text-right">{item.value}</TableCell>
              <TableCell className="text-right">
                <Badge className={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FeatureCategoryTable;
