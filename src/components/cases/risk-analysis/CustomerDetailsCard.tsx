
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, MapPin } from "lucide-react";

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  location: string;
}

interface CustomerDetailsCardProps {
  customerData: CustomerData;
}

const CustomerDetailsCard: React.FC<CustomerDetailsCardProps> = ({ customerData }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Customer Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center">
          <User className="h-4 w-4 text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-muted-foreground">Name</p>
            <p className="text-sm font-medium">{customerData.name}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Mail className="h-4 w-4 text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-sm font-medium">{customerData.email}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Phone className="h-4 w-4 text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-muted-foreground">Phone</p>
            <p className="text-sm font-medium">{customerData.phone}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <MapPin className="h-4 w-4 text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="text-sm font-medium">{customerData.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerDetailsCard;
