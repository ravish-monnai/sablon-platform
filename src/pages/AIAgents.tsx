
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"

const AIAgents = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Agents</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Deploy Agent
        </Button>
      </div>
      
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Risk Analyzer</CardTitle>
            <CardDescription>Analyzes potential risks in transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-green-600">Running</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Requests/day:</span>
              <span className="font-medium">1,240</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Document Processor</CardTitle>
            <CardDescription>Extracts and analyzes documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-green-600">Running</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Requests/day:</span>
              <span className="font-medium">356</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Compliance Monitor</CardTitle>
            <CardDescription>Real-time compliance checking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-amber-600">Idle</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Requests/day:</span>
              <span className="font-medium">0</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AIAgents
