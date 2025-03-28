
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
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
    <Card className="overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] h-16"></div>
      <CardContent className="pt-0 -mt-8">
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20 border-4 border-white shadow-md">
            <AvatarImage src="https://ui-avatars.com/api/?name=Ravish+Patel&background=9b87f5&color=fff&size=512" alt={customerData.name} />
            <AvatarFallback className="text-xl bg-[#9b87f5] text-white">{initials}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg mt-2">{customerData.name}</h3>
          <p className="text-sm text-muted-foreground">{customerData.location}</p>
        </div>
        
        <div className="space-y-3 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <Mail className="h-4 w-4 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">{customerData.email}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <Phone className="h-4 w-4 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium">{customerData.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <MapPin className="h-4 w-4 text-[#9b87f5]" />
            </div>
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
