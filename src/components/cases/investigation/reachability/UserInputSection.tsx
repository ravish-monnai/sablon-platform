
import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Phone, Mail, MapPin } from "lucide-react";

interface UserInputProps {
  userInput: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

const UserInputSection: React.FC<UserInputProps> = ({ userInput }) => {
  if (Object.keys(userInput).length === 0) {
    return null;
  }

  return (
    <Card className="border border-blue-100">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="h-5 w-5 text-blue-600" />
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
            {userInput.phone && (
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  Phone Number
                </TableCell>
                <TableCell>{userInput.phone}</TableCell>
              </TableRow>
            )}
            {userInput.email && (
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  Email Address
                </TableCell>
                <TableCell>{userInput.email}</TableCell>
              </TableRow>
            )}
            {userInput.address && (
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  Physical Address
                </TableCell>
                <TableCell>{userInput.address}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UserInputSection;
