
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, ShieldCheck, KeyRound, Smartphone } from "lucide-react";

export const SecuritySettings = () => {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>
            Manage your account security and authentication preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium leading-none flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-monnai-blue" />
              Account Security
            </h3>
            
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" className="max-w-md" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" className="max-w-md" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" className="max-w-md" />
              </div>
              
              <Button className="w-fit mt-2">Update Password</Button>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium leading-none flex items-center gap-2">
              <KeyRound className="h-4 w-4 text-monnai-blue" />
              Two-Factor Authentication
            </h3>
            
            <div className="flex items-center justify-between border p-4 rounded-lg max-w-md">
              <div className="space-y-0.5">
                <p className="font-medium">Enable 2FA</p>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch id="2fa" />
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium leading-none flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-monnai-blue" />
              Session Management
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="session-timeout">Session Timeout</Label>
              <Select defaultValue="60">
                <SelectTrigger id="session-timeout" className="max-w-md">
                  <SelectValue placeholder="Select timeout duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="120">2 hours</SelectItem>
                  <SelectItem value="240">4 hours</SelectItem>
                  <SelectItem value="480">8 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-2">
              <Button variant="outline" className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:bg-red-50 border-red-200">
                <AlertTriangle className="h-4 w-4" />
                Revoke All Sessions
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-monnai-blue hover:bg-monnai-blue/90">Save Security Settings</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
