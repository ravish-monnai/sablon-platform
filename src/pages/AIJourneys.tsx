
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"

const AIJourneys = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Journeys</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Journey
        </Button>
      </div>
      
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer Onboarding</CardTitle>
            <CardDescription>Risk assessment for new customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-green-600">Active</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last modified:</span>
              <span className="font-medium">2 days ago</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Fraud Detection</CardTitle>
            <CardDescription>Real-time transaction monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-green-600">Active</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last modified:</span>
              <span className="font-medium">5 days ago</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Credit Risk Scoring</CardTitle>
            <CardDescription>Automated credit risk assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-amber-600">Draft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last modified:</span>
              <span className="font-medium">1 week ago</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AIJourneys
