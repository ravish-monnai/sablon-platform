
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const GeneralSettings = () => {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
          <CardDescription>
            Configure general application settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3">
            <Label htmlFor="app-name">Application Name</Label>
            <Input
              id="app-name"
              defaultValue="Monnai Admin Dashboard"
              className="max-w-md"
            />
          </div>
          
          <div className="grid gap-3">
            <Label htmlFor="timezone">Default Timezone</Label>
            <Select defaultValue="utc">
              <SelectTrigger id="timezone" className="max-w-md">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-3">
            <Label htmlFor="date-format">Date Format</Label>
            <Select defaultValue="mm-dd-yyyy">
              <SelectTrigger id="date-format" className="max-w-md">
                <SelectValue placeholder="Select date format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between border p-4 rounded-lg max-w-md">
            <div className="space-y-0.5">
              <Label htmlFor="telemetry">Usage Data</Label>
              <p className="text-sm text-muted-foreground">
                Share anonymous usage data to help improve the platform
              </p>
            </div>
            <Switch id="telemetry" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between border p-4 rounded-lg max-w-md">
            <div className="space-y-0.5">
              <Label htmlFor="auto-update">Auto Updates</Label>
              <p className="text-sm text-muted-foreground">
                Automatically update the application when new versions are available
              </p>
            </div>
            <Switch id="auto-update" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-monnai-blue hover:bg-monnai-blue/90">Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
