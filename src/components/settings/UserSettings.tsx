
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Pencil, Trash2, Check, X } from "lucide-react";
import { AddUserDialog } from "./AddUserDialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for users
const mockUsers = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    email: "alex@monnai.com", 
    role: "Admin", 
    status: "Active",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  { 
    id: 2, 
    name: "Samantha Lee", 
    email: "samantha@monnai.com", 
    role: "User", 
    status: "Active",
    avatar: "https://i.pravatar.cc/150?u=samantha" 
  },
  { 
    id: 3, 
    name: "Michael Chen", 
    email: "michael@monnai.com", 
    role: "Data Analyst", 
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?u=michael" 
  },
  { 
    id: 4, 
    name: "Priya Patel", 
    email: "priya@monnai.com", 
    role: "Manager", 
    status: "Active",
    avatar: "https://i.pravatar.cc/150?u=priya" 
  },
  { 
    id: 5, 
    name: "David Wilson", 
    email: "david@monnai.com", 
    role: "Developer", 
    status: "Active",
    avatar: "https://i.pravatar.cc/150?u=david" 
  }
];

export const UserSettings = () => {
  const [users, setUsers] = useState(mockUsers);
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);
  
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "manager":
        return "bg-purple-100 text-purple-800";
      case "developer":
        return "bg-blue-100 text-blue-800";
      case "data analyst":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>User Management</CardTitle>
            <CardDescription>
              Manage users and their permissions
            </CardDescription>
          </div>
          <Button 
            variant="default"
            className="bg-monnai-blue hover:bg-monnai-blue/90"
            onClick={() => setShowAddUserDialog(true)}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {users.map((user) => (
                <div 
                  key={user.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                    <Badge variant={user.status === "Active" ? "default" : "outline"}>
                      {user.status === "Active" ? 
                        <Check className="h-3.5 w-3.5 mr-1.5" /> : 
                        <X className="h-3.5 w-3.5 mr-1.5" />
                      }
                      {user.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <div className="text-xs text-muted-foreground">
            Showing {users.length} users
          </div>
        </CardFooter>
      </Card>
      
      <AddUserDialog 
        open={showAddUserDialog} 
        onClose={() => setShowAddUserDialog(false)}
        onAddUser={(user) => {
          setUsers([...users, { ...user, id: users.length + 1 }]);
          setShowAddUserDialog(false);
        }}
      />
    </div>
  );
};
