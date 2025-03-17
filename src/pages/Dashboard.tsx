
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Dashboard = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">AI Risk Decisioning Platform</h1>
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Overview of your recent activities</CardDescription>
          </CardHeader>
          <CardContent>
            <p>No recent activities found.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Analytics</CardTitle>
            <CardDescription>Key metrics overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Active Models</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex justify-between">
                <span>AI Journeys</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span>Transactions</span>
                <span className="font-bold">1,243</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Resources to help you get started</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create your first AI Journey</li>
              <li>Deploy an AI Agent</li>
              <li>Connect your data sources</li>
              <li>Review risk models</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
