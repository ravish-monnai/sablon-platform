
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { UserCheck } from "lucide-react";

interface UserInputSectionProps {
  userInput: Record<string, string>;
}

const UserInputSection: React.FC<UserInputSectionProps> = ({ userInput }) => {
  if (Object.keys(userInput).length === 0) {
    return null;
  }

  return (
    <Card className="border border-blue-100">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          <UserCheck className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-medium text-blue-800">Verification Input</h3>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Field</TableHead>
              <TableHead>Provided Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(userInput).map(([key, value]) => (
              value && (
                <TableRow key={key}>
                  <TableCell className="font-medium">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              )
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UserInputSection;
