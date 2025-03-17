
import DashboardTabs from "@/components/dashboard/DashboardTabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Database, Upload } from "lucide-react"

const Data = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Data</h1>
        <div className="space-x-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" /> Import Data
          </Button>
          <Button>
            <Database className="mr-2 h-4 w-4" /> Connect Source
          </Button>
        </div>
      </div>
      
      <DashboardTabs className="mb-6" />
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer Data</CardTitle>
            <CardDescription>Primary customer database</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Records:</span>
              <span className="font-medium">245,678</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Source:</span>
              <span className="font-medium">PostgreSQL</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last updated:</span>
              <span className="font-medium">Today</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>Historical transaction data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Records:</span>
              <span className="font-medium">3.2M</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Source:</span>
              <span className="font-medium">MySQL</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last updated:</span>
              <span className="font-medium">Yesterday</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>External Credit Data</CardTitle>
            <CardDescription>Third-party credit bureau data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Records:</span>
              <span className="font-medium">198,452</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Source:</span>
              <span className="font-medium">API</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last updated:</span>
              <span className="font-medium">3 days ago</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Data
