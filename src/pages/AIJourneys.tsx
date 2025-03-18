import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, Pencil, Settings, UserCheck, LayoutTemplate, PlayCircle, CheckCircle, XCircle, Eye, Lock, Globe } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import WorkflowEditor from "@/components/workflow/WorkflowEditor"
import FraudAgentEditor from "@/components/agents/FraudAgentEditor"
import { useLocation } from "react-router-dom"
import ViewToggle from "@/components/agents/ViewToggle"

const AIJourneys = () => {
  const [showFraudWorkflow, setShowFraudWorkflow] = useState(false)
  const [showOnboardingWorkflow, setShowOnboardingWorkflow] = useState(false)
  const [createJourneyOpen, setCreateJourneyOpen] = useState(false)
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const viewMode = searchParams.get("viewMode") === "internal" ? "internal" : "customer";
  
  const [monnaiActiveTab, setMonnaiActiveTab] = useState("templates")
  
  const [showTestDialog, setShowTestDialog] = useState(false)
  const [selectedTemplateForTest, setSelectedTemplateForTest] = useState("")
  
  const templateJourneys = [
    {
      id: "loan-application",
      title: "Loan Application",
      description: "Risk assessment for loan applications",
      lastModified: "1 day ago",
      status: "draft",
      testStatus: null
    },
    {
      id: "suspicious-activity",
      title: "Suspicious Activity Detection",
      description: "Monitor and detect suspicious account activity",
      lastModified: "3 days ago",
      status: "draft",
      testStatus: "success"
    },
    {
      id: "merchant-onboarding",
      title: "Merchant Onboarding",
      description: "Risk assessment for new merchant accounts",
      lastModified: "5 days ago",
      status: "draft",
      testStatus: "failed"
    }
  ]
  
  const productionJourneys = [
    {
      id: "customer-onboarding",
      title: "Customer Onboarding",
      description: "Risk assessment for new customers",
      lastModified: "2 days ago",
      status: "active",
      customerVisible: true
    },
    {
      id: "fraud-detection",
      title: "Fraud Detection",
      description: "Real-time transaction monitoring",
      lastModified: "5 days ago",
      status: "active",
      customerVisible: true
    },
    {
      id: "credit-risk",
      title: "Credit Risk Scoring",
      description: "Automated credit risk assessment",
      lastModified: "1 week ago",
      status: "draft",
      customerVisible: false
    }
  ]
  
  const handleTestJourney = (templateId) => {
    setSelectedTemplateForTest(templateId)
    setShowTestDialog(true)
  }
  
  const handlePromoteToProduction = (templateId) => {
    console.log("Promoting template to production:", templateId)
  }
  
  if (viewMode === "internal") {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">AI Journeys</h1>
          <Button onClick={() => setCreateJourneyOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Create Journey
          </Button>
        </div>
        
        <Tabs value={monnaiActiveTab} onValueChange={setMonnaiActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="templates">
              <LayoutTemplate className="mr-2 h-4 w-4" /> Journey Templates
            </TabsTrigger>
            <TabsTrigger value="production">
              <Globe className="mr-2 h-4 w-4" /> Production Journeys
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templateJourneys.map(journey => (
                <Card key={journey.id} className="border-2 border-slate-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{journey.title}</CardTitle>
                      {journey.testStatus === "success" && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <CheckCircle className="mr-1 h-3 w-3" /> Test Passed
                        </Badge>
                      )}
                      {journey.testStatus === "failed" && (
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          <XCircle className="mr-1 h-3 w-3" /> Test Failed
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{journey.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Status:</span>
                      <span className="font-medium text-amber-600">Template</span>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <span>Last modified:</span>
                      <span className="font-medium">{journey.lastModified}</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline" onClick={() => handleTestJourney(journey.id)} className="flex justify-center">
                        <PlayCircle className="mr-2 h-4 w-4" /> Test Journey
                      </Button>
                      <Button size="sm" onClick={() => handlePromoteToProduction(journey.id)} className="flex justify-center" disabled={journey.testStatus !== "success"}>
                        <Globe className="mr-2 h-4 w-4" /> Promote to Production
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="production">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productionJourneys.map(journey => (
                <Card key={journey.id} className={journey.customerVisible ? "border-2 border-blue-200" : ""}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{journey.title}</CardTitle>
                      {journey.customerVisible ? (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          <Globe className="mr-1 h-3 w-3" /> Customer Visible
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200">
                          <Lock className="mr-1 h-3 w-3" /> Internal Only
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{journey.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Status:</span>
                      <span className={`font-medium ${journey.status === "active" ? "text-green-600" : "text-amber-600"}`}>
                        {journey.status === "active" ? "Active" : "Draft"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <span>Last modified:</span>
                      <span className="font-medium">{journey.lastModified}</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button 
                        size="sm" 
                        variant={journey.id === "customer-onboarding" ? "default" : "outline"} 
                        onClick={() => journey.id === "customer-onboarding" ? setShowOnboardingWorkflow(true) : journey.id === "fraud-detection" ? setShowFraudWorkflow(true) : null}
                      >
                        <Pencil className="mr-2 h-4 w-4" /> Edit Journey
                      </Button>
                      {!journey.customerVisible && (
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 h-4 w-4" /> Make Customer Visible
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  }
  
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
        <Card className="border-2 border-blue-200">
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
            <Button size="sm" className="w-full" onClick={() => setShowOnboardingWorkflow(true)}>
              <Pencil className="mr-2 h-4 w-4" /> Edit Journey
            </Button>
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
            <div className="flex justify-between text-sm mb-4">
              <span>Last modified:</span>
              <span className="font-medium">5 days ago</span>
            </div>
            <Button variant="outline" size="sm" className="w-full" onClick={() => setShowFraudWorkflow(true)}>
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
      <OnboardingWorkflow open={showOnboardingWorkflow} onOpenChange={setShowOnboardingWorkflow} />
      
      <Dialog open={showTestDialog} onOpenChange={setShowTestDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Test Journey Template</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="text-sm">
              <p className="mb-2">Testing journey: <span className="font-medium">{
                templateJourneys.find(j => j.id === selectedTemplateForTest)?.title || ""
              }</span></p>
              <p>This will simulate the journey with test data to verify its functionality before promoting to production.</p>
            </div>
            
            <div className="border rounded-md p-4 bg-slate-50">
              <h3 className="font-medium mb-2">Test Configuration</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Test Data Source</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>Synthetic Test Data</option>
                    <option>Historical Anonymized Data</option>
                    <option>Mock API Responses</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Test Scope</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="test-validation" className="mr-2" defaultChecked />
                      <label htmlFor="test-validation" className="text-sm">Input Validation</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="test-logic" className="mr-2" defaultChecked />
                      <label htmlFor="test-logic" className="text-sm">Decision Logic</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="test-api" className="mr-2" defaultChecked />
                      <label htmlFor="test-api" className="text-sm">API Integration</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="test-performance" className="mr-2" defaultChecked />
                      <label htmlFor="test-performance" className="text-sm">Performance Metrics</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowTestDialog(false)}>Cancel</Button>
            <Button onClick={() => setShowTestDialog(false)}>Run Test</Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Dialog open={createJourneyOpen} onOpenChange={setCreateJourneyOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Journey</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Journey Name</label>
              <Input placeholder="Enter journey name" />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Description</label>
              <Textarea placeholder="Describe the purpose of this journey" />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Journey Type</label>
              <select className="w-full px-3 py-2 border rounded-md">
                <option>Customer Onboarding</option>
                <option>Fraud Detection</option>
                <option>Credit Risk Assessment</option>
                <option>Transaction Monitoring</option>
                <option>Custom Journey</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Initial Status</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input type="radio" id="status-template" name="status" className="mr-2" defaultChecked />
                  <label htmlFor="status-template" className="text-sm">Template</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="status-draft" name="status" className="mr-2" />
                  <label htmlFor="status-draft" className="text-sm">Draft</label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setCreateJourneyOpen(false)}>Cancel</Button>
            <Button onClick={() => setCreateJourneyOpen(false)}>Create</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const OnboardingWorkflow = ({ 
  open, 
  onOpenChange 
}: { 
  open: boolean, 
  onOpenChange: (open: boolean) => void 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>Customer Onboarding Workflow</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="step1">Step 1: Collection</TabsTrigger>
            <TabsTrigger value="step2">Step 2: KYC</TabsTrigger>
            <TabsTrigger value="step3">Step 3: Risk Score</TabsTrigger>
            <TabsTrigger value="step4">Step 4: Decision</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="p-4 border rounded-md">
            <WorkflowEditor />
          </TabsContent>
          
          <TabsContent value="step1" className="space-y-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 1: Customer Data Collection</h3>
            <p className="mb-4">Configure the initial customer data collection forms and processes.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Onboarding Form Title</label>
                <Input defaultValue="Customer Registration" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Form Description</label>
                <Input defaultValue="Please provide your information to create an account" />
              </div>
            </div>
            
            <div className="border p-4 rounded-md bg-gray-50 mt-4">
              <h4 className="font-medium mb-3">Required Information</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Full Name</span>
                  <span className="text-green-600">✓ Required</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Email Address</span>
                  <span className="text-green-600">✓ Required</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Phone Number</span>
                  <span className="text-green-600">✓ Required</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Date of Birth</span>
                  <span className="text-green-600">✓ Required</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Address</span>
                  <span className="text-green-600">✓ Required</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="step2" className="space-y-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 2: KYC Verification</h3>
            <p className="mb-4">Know Your Customer verification process using the KYC Compliance Agent.</p>
            
            <div className="border p-4 rounded-md bg-gray-50">
              <div className="flex items-center mb-4">
                <UserCheck className="mr-2 h-5 w-5 text-[#D946EF]" />
                <h4 className="font-medium">KYC Compliance Agent</h4>
              </div>
              
              <p className="text-sm mb-4">
                The KYC Compliance Agent automates identity verification and document processing to 
                ensure regulatory compliance during customer onboarding.
              </p>
              
              <div className="p-3 bg-white border rounded-md mb-4">
                <div className="font-medium">Agent Status</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm">Current status:</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm">Model:</span>
                  <span className="text-sm">Claude 3 Opus</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm">Average processing time:</span>
                  <span className="text-sm">2.5 minutes</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="text-sm font-medium mb-3">Verification Methods</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="document-verification" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="document-verification" className="text-sm">Document Verification</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="facial-verification" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="facial-verification" className="text-sm">Facial Verification</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="liveness-detection" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="liveness-detection" className="text-sm">Liveness Detection</label>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-3">Compliance Checks</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="aml-screening" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="aml-screening" className="text-sm">AML Screening</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="pep-screening" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="pep-screening" className="text-sm">PEP Screening</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="sanctions-screening" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="sanctions-screening" className="text-sm">Sanctions Screening</label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="step3" className="space-y-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 3: Risk Scoring</h3>
            <p className="mb-4">Risk assessment based on KYC verification results and other factors.</p>
            
            <div className="border p-4 rounded-md bg-gray-50">
              <h4 className="font-medium mb-3">Risk Model Configuration</h4>
              <div className="p-3 bg-white border rounded flex items-center justify-between mb-4">
                <div>
                  <div className="font-medium">Onboarding Risk Model v1.5</div>
                  <div className="text-sm text-gray-500">Comprehensive customer risk assessment</div>
                </div>
                <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">Low Risk Threshold</label>
                <Input type="number" defaultValue="25" />
                <p className="text-xs text-gray-500 mt-1">Scores below this are considered low risk</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">High Risk Threshold</label>
                <Input type="number" defaultValue="75" />
                <p className="text-xs text-gray-500 mt-1">Scores above this are considered high risk</p>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Risk Factors</label>
              <div className="border rounded-md p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span>KYC verification results</span>
                  <span className="font-medium">35% weight</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Geographic risk</span>
                  <span className="font-medium">20% weight</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Customer profile</span>
                  <span className="font-medium">25% weight</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Behavioral patterns</span>
                  <span className="font-medium">20% weight</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="step4" className="space-y-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 4: Decision</h3>
            <p className="mb-4">Configure decision logic based on risk assessment.</p>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="border p-4 rounded-md bg-green-50">
                <h4 className="font-medium mb-2 text-green-800">Auto-Approval Criteria</h4>
                <p className="text-sm mb-3">Customers meeting these criteria will be automatically approved</p>
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="font-medium">Risk Score &lt; 25</div>
                  <div className="text-sm text-gray-600 mt-1">Customers with risk scores below 25 will be automatically approved</div>
                </div>
              </div>
              
              <div className="border p-4 rounded-md bg-amber-50">
                <h4 className="font-medium mb-2 text-amber-800">Enhanced Due Diligence</h4>
                <p className="text-sm mb-3">Customers meeting these criteria will require additional verification</p>
                <div className="bg-white p-3 rounded border border-amber-200">
                  <div className="font-medium">25 ≤ Risk Score ≤ 75</div>
                  <div className="text-sm text-gray-600 mt-1">Customers with risk scores between 25 and 75 will need additional verification</div>
                </div>
              </div>
              
              <div className="border p-4 rounded-md bg-red-50">
                <h4 className="font-medium mb-2 text-red-800">Auto-Rejection Criteria</h4>
                <p className="text-sm mb-3">Customers meeting these criteria will be automatically rejected</p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <div className="font-medium">Risk Score &gt; 75</div>
                  <div className="text-sm text-gray-600 mt-1">Customers with risk scores above 75 will be automatically rejected</div>
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

const FraudDetectionWorkflow = ({ 
  open, 
  onOpenChange 
}: { 
  open: boolean, 
  onOpenChange: (open: boolean) => void 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
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
            <WorkflowEditor />
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
