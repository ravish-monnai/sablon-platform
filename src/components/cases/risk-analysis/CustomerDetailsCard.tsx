
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  // Get initials from customer name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(customerData.name);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Customer Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src="https://api.dicebear.com/7.x/personas/svg?seed=Ghibli" alt={customerData.name} />
            <AvatarFallback className="text-lg">{initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h3 className="font-semibold text-lg">{customerData.name}</h3>
            <p className="text-sm text-muted-foreground">{customerData.location}</p>
          </div>
        </div>
        
        <div className="space-y-3 mt-2">
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
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerDetailsCard;
