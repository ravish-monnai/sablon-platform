
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { History, Clock } from "lucide-react";
import { useInvestigation } from "./InvestigationProvider";
import { format } from "date-fns";

interface QueryHistoryPanelProps {
  type: string;
}

const QueryHistoryPanel: React.FC<QueryHistoryPanelProps> = ({ type }) => {
  const { queryHistory, setQuery } = useInvestigation();
  
  // Filter history by the current investigation type
  const filteredHistory = queryHistory.filter(item => item.type === type);
  
  const handleUseQuery = (query: string) => {
    setQuery(query);
  };
  
  if (filteredHistory.length === 0) {
    return (
      <Card className="mt-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-md flex items-center gap-2">
            <History className="h-4 w-4" />
            Query History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No previous queries for this investigation type.</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="mt-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-md flex items-center gap-2">
          <History className="h-4 w-4" />
          Query History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Query</TableHead>
              <TableHead className="w-[180px]">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredHistory.map((item, index) => (
              <TableRow 
                key={index} 
                className="cursor-pointer hover:bg-muted transition-colors"
                onClick={() => handleUseQuery(item.query)}
              >
                <TableCell className="font-medium">{item.query}</TableCell>
                <TableCell className="text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{format(item.timestamp, 'MMM d, yyyy h:mm a')}</span>
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
