
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type UserData = {
  name: string;
  email: string;
  role: string;
  status: string;
  avatar: string;
}

type AddUserDialogProps = {
  open: boolean;
  onClose: () => void;
  onAddUser: (userData: UserData) => void;
}

export const AddUserDialog = ({ open, onClose, onAddUser }: AddUserDialogProps) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    role: "",
    status: "Active",
    avatar: `https://i.pravatar.cc/150?u=${Math.random().toString(36).substring(2, 11)}`
  });
  
  const handleInputChange = (field: keyof UserData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser(formData);
    setFormData({
      name: "",
      email: "",
      role: "",
      status: "Active",
      avatar: `https://i.pravatar.cc/150?u=${Math.random().toString(36).substring(2, 11)}`
    });
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Create a new user account with appropriate permissions.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              placeholder="Enter full name"
            />
          </div>
          
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              placeholder="Enter email address"
            />
          </div>
          
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="role">Role</Label>
            <Select 
              value={formData.role}
              onValueChange={(value) => handleInputChange("role", value)}
            >
              <SelectTrigger id="role">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Manager">Manager</SelectItem>
                <SelectItem value="Developer">Developer</SelectItem>
                <SelectItem value="Data Analyst">Data Analyst</SelectItem>
                <SelectItem value="User">User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="status">Status</Label>
            <Select 
              value={formData.status}
              onValueChange={(value) => handleInputChange("status", value)}
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <DialogFooter className="mt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-monnai-blue hover:bg-monnai-blue/90"
            >
              Add User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
