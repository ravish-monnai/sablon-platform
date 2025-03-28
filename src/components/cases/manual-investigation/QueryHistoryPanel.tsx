
import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Clock } from "lucide-react";
import { useInvestigation } from "./InvestigationProvider";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";

interface QueryHistoryPanelProps {
  type: string;
}

const QueryHistoryPanel: React.FC<QueryHistoryPanelProps> = ({ type }) => {
  const { queryHistory, setQuery } = useInvestigation();
  
  const filteredHistory = queryHistory.filter(item => item.type === type);
  
  const handleUseQuery = (query: string) => {
    setQuery(query);
  };
  
  if (filteredHistory.length === 0) {
    return null; // Return null instead of a card when no history
  }
  
  return (
    <Card className="mt-4">
      <CardContent className="p-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-3/4">Recent Queries</TableHead>
              <TableHead className="w-1/4 text-right">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredHistory.slice(0, 5).map((item, index) => (
              <TableRow 
                key={index} 
                className="cursor-pointer hover:bg-muted"
                onClick={() => handleUseQuery(item.query)}
              >
                <TableCell className="font-medium truncate">{item.query}</TableCell>
                <TableCell className="text-muted-foreground text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">{format(item.timestamp, 'h:mm a')}</span>
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

export default QueryHistoryPanel;
