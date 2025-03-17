
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, Pencil } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const AIJourneys = () => {
  const [showFraudWorkflow, setShowFraudWorkflow] = useState(false)
  
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
            <div className="flex justify-between text-sm mb-4">
              <span>Last modified:</span>
              <span className="font-medium">2 days ago</span>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              <Pencil className="mr-2 h-4 w-4" /> Edit Journey
            </Button>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle>Fraud Detection</CardTitle>
            <CardDescription>Real-time transaction monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-green-600">Active</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span>Last modified:</span>
              <span className="font-medium">5 days ago</span>
            </div>
            <Button size="sm" className="w-full" onClick={() => setShowFraudWorkflow(true)}>
              <Pencil className="mr-2 h-4 w-4" /> Edit Journey
            </Button>
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
            <div className="flex justify-between text-sm mb-4">
              <span>Last modified:</span>
              <span className="font-medium">1 week ago</span>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              <Pencil className="mr-2 h-4 w-4" /> Edit Journey
            </Button>
          </CardContent>
        </Card>
      </div>

      <FraudDetectionWorkflow open={showFraudWorkflow} onOpenChange={setShowFraudWorkflow} />
    </div>
  )
}

const FraudDetectionWorkflow = ({ 
  open, 
  onOpenChange 
}: { 
  open: boolean, 
  onOpenChange: (open: boolean) => void 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Fraud Detection Workflow</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="step1">Step 1: Input</TabsTrigger>
            <TabsTrigger value="step2">Step 2: Risk Score</TabsTrigger>
            <TabsTrigger value="step3">Step 3: Decision</TabsTrigger>
            <TabsTrigger value="step4">Step 4: Review</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Workflow Overview</h3>
            <p className="mb-4">This workflow processes new customer data through a fraud risk assessment model and determines appropriate actions based on the risk score.</p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">1</div>
                <div className="ml-4">
                  <h4 className="font-medium">Collect Customer Data</h4>
                  <p className="text-sm text-gray-500">Capture phone number, email and IP address from customer</p>
                </div>
              </div>
              
              <div className="border-l-2 border-dashed border-gray-300 h-6 ml-5"></div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">2</div>
                <div className="ml-4">
                  <h4 className="font-medium">Calculate Fraud Risk Score</h4>
                  <p className="text-sm text-gray-500">Process data through fraud detection model</p>
                </div>
              </div>
              
              <div className="border-l-2 border-dashed border-gray-300 h-6 ml-5"></div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">3</div>
                <div className="ml-4">
                  <h4 className="font-medium">Automated Decision</h4>
                  <p className="text-sm text-gray-500">Auto-approve or reject based on score thresholds</p>
                </div>
              </div>
              
              <div className="border-l-2 border-dashed border-gray-300 h-6 ml-5"></div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">4</div>
                <div className="ml-4">
                  <h4 className="font-medium">Manual Review</h4>
                  <p className="text-sm text-gray-500">AI-assisted review by fraud agents for medium-risk cases</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="step1" className="space-y-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 1: Customer Data Input</h3>
            <p className="mb-4">Configure the customer data collection form for fraud assessment.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Customer Form Title</label>
                <Input defaultValue="Customer Verification" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Form Description</label>
                <Input defaultValue="Please provide your information for verification" />
              </div>
            </div>
            
            <div className="border p-4 rounded-md bg-gray-50 mt-4">
              <h4 className="font-medium mb-3">Required Fields</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Email Address</span>
                  <span className="text-green-600">✓ Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Phone Number</span>
                  <span className="text-green-600">✓ Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>IP Address</span>
                  <span className="text-green-600">✓ Auto-Captured</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Additional Instructions</label>
              <Textarea placeholder="Enter any additional instructions for customers" />
            </div>
          </TabsContent>
          
          <TabsContent value="step2" className="space-y-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 2: Fraud Risk Scoring</h3>
            <p className="mb-4">Configure the risk scoring model and parameters.</p>
            
            <div className="border p-4 rounded-md bg-gray-50">
              <h4 className="font-medium mb-3">Selected Risk Model</h4>
              <div className="p-3 bg-white border rounded flex items-center justify-between">
                <div>
                  <div className="font-medium">Fraud Detection Model v2.4</div>
                  <div className="text-sm text-gray-500">Real-time transaction monitoring</div>
                </div>
                <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">Low Risk Threshold</label>
                <Input type="number" defaultValue="30" />
                <p className="text-xs text-gray-500 mt-1">Scores below this are considered low risk</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">High Risk Threshold</label>
                <Input type="number" defaultValue="70" />
                <p className="text-xs text-gray-500 mt-1">Scores above this are considered high risk</p>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Risk Factors</label>
              <div className="border rounded-md p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span>Email domain reputation</span>
                  <span className="font-medium">25% weight</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Phone number verification</span>
                  <span className="font-medium">30% weight</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>IP geolocation</span>
                  <span className="font-medium">20% weight</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Historical patterns</span>
                  <span className="font-medium">25% weight</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="step3" className="space-y-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 3: Automated Decision</h3>
            <p className="mb-4">Configure automated approval and rejection rules based on risk scores.</p>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="border p-4 rounded-md bg-green-50">
                <h4 className="font-medium mb-2 text-green-800">Auto-Approval Rules</h4>
                <p className="text-sm mb-3">Transactions meeting these criteria will be automatically approved</p>
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="font-medium">Risk Score &lt; 30</div>
                  <div className="text-sm text-gray-600 mt-1">Transactions with risk scores below 30 will be automatically approved</div>
                </div>
              </div>
              
              <div className="border p-4 rounded-md bg-red-50">
                <h4 className="font-medium mb-2 text-red-800">Auto-Rejection Rules</h4>
                <p className="text-sm mb-3">Transactions meeting these criteria will be automatically rejected</p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <div className="font-medium">Risk Score &gt; 70</div>
                  <div className="text-sm text-gray-600 mt-1">Transactions with risk scores above 70 will be automatically rejected</div>
                </div>
              </div>
              
              <div className="border p-4 rounded-md bg-amber-50">
                <h4 className="font-medium mb-2 text-amber-800">Manual Review Rules</h4>
                <p className="text-sm mb-3">Transactions meeting these criteria will be sent for manual review</p>
                <div className="bg-white p-3 rounded border border-amber-200">
                  <div className="font-medium">30 ≤ Risk Score ≤ 70</div>
                  <div className="text-sm text-gray-600 mt-1">Transactions with risk scores between 30 and 70 will be sent for manual review</div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="step4" className="space-y-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 4: Manual Review</h3>
            <p className="mb-4">Configure the AI-assisted review process for cases requiring manual intervention.</p>
            
            <div className="border p-4 rounded-md bg-gray-50">
              <h4 className="font-medium mb-3">Review Assignment</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white p-2 rounded border">
                  <span>Fraud Risk Agent Team</span>
                  <span className="text-green-600">Assigned</span>
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border">
                  <span>Review SLA</span>
                  <span>4 hours</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">AI Assistance Features</label>
              <div className="border rounded-md p-3 space-y-2">
                <div className="flex items-center justify-between p-2 bg-white border rounded">
                  <div>
                    <div className="font-medium">Risk Factor Explanation</div>
                    <div className="text-sm text-gray-500">AI explains each risk factor contribution</div>
                  </div>
                  <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Enabled</div>
                </div>
                <div className="flex items-center justify-between p-2 bg-white border rounded">
                  <div>
                    <div className="font-medium">Similar Case Identification</div>
                    <div className="text-sm text-gray-500">AI identifies similar historical cases</div>
                  </div>
                  <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Enabled</div>
                </div>
                <div className="flex items-center justify-between p-2 bg-white border rounded">
                  <div>
                    <div className="font-medium">Decision Recommendation</div>
                    <div className="text-sm text-gray-500">AI recommends approval or rejection</div>
                  </div>
                  <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Enabled</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Case Closure</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-3 rounded bg-white">
                  <div className="font-medium">Required Documentation</div>
                  <div className="text-sm text-gray-500">Decision rationale must be documented</div>
                </div>
                <div className="border p-3 rounded bg-white">
                  <div className="font-medium">Final Decisioning</div>
                  <div className="text-sm text-gray-500">Approve, Reject, or Request More Information</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AIJourneys
