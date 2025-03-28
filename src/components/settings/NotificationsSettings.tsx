
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Mail, MessageSquare, AlertTriangle, Slack } from "lucide-react";

export const NotificationsSettings = () => {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Manage how you receive notifications from the platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Delivery Methods</h3>
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Slack className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Slack Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive notifications in Slack</p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Notification Types</h3>
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Case Alerts</p>
                    <p className="text-sm text-muted-foreground">Get notified about important case updates</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Comments & Mentions</p>
                    <p className="text-sm text-muted-foreground">Get notified when someone mentions you</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Notification Frequency</h3>
            <Select defaultValue="realtime">
              <SelectTrigger className="max-w-md">
                <SelectValue placeholder="Select delivery frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Realtime</SelectItem>
                <SelectItem value="hourly">Hourly Digest</SelectItem>
                <SelectItem value="daily">Daily Digest</SelectItem>
                <SelectItem value="weekly">Weekly Digest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-monnai-blue hover:bg-monnai-blue/90">Save Preferences</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
