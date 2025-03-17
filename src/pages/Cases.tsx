
import DashboardTabs from "@/components/dashboard/DashboardTabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const Cases = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cases</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Case
        </Button>
      </div>
      
      <DashboardTabs className="mb-6" />
      <Separator className="my-6" />
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search cases..." className="pl-10" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Case #23987</CardTitle>
            <CardDescription>High-value transaction review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-amber-600">Pending Review</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Risk Score:</span>
              <span className="font-medium">74/100</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Assigned to:</span>
              <span className="font-medium">Sarah Johnson</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Case #23986</CardTitle>
            <CardDescription>Suspicious activity investigation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-red-600">High Risk</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Risk Score:</span>
              <span className="font-medium">92/100</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Assigned to:</span>
              <span className="font-medium">David Martinez</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Case #23981</CardTitle>
            <CardDescription>New account verification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-green-600">Resolved</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Risk Score:</span>
              <span className="font-medium">12/100</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Assigned to:</span>
              <span className="font-medium">Alex Williams</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Cases
