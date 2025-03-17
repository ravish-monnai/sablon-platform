import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle, 
  ArrowLeft, 
  Check, 
  Clock, 
  Download, 
  File, 
  Mail, 
  MessageSquare, 
  Phone, 
  Shield, 
  User, 
  X, 
  BrainCircuit,
  Lightbulb,
  ArrowUp
} from "lucide-react";
import CaseChat from "@/components/cases/CaseChat";
import CaseActionDialog from "@/components/cases/CaseActionDialog";

const journeys = [
  "Account Opening", 
  "Transaction Monitoring", 
  "Identity Verification", 
  "Risk Assessment",
  "Fraud Detection"
];

const generateCases = () => {
  const cases = [];
  const riskLevels = ["Low", "Medium", "High", "Critical"];
  const statuses = ["Pending Review", "Approved", "Rejected"];
  const statusColors = {
    "Pending Review": "bg-amber-100 text-amber-800",
    "Approved": "bg-green-100 text-green-800",
    "Rejected": "bg-red-100 text-red-800"
  };
  
  for (let i = 1; i <= 100; i++) {
    const journeyIndex = Math.floor(i / 20) % journeys.length;
    const journey = journeys[journeyIndex];
    
    const riskIndex = Math.floor(Math.random() * 4);
    const riskLevel = riskLevels[riskIndex];
    
    let riskScore;
    if (riskLevel === "Low") riskScore = Math.floor(Math.random() * 30) + 10;
    else if (riskLevel === "Medium") riskScore = Math.floor(Math.random() * 20) + 40;
    else if (riskLevel === "High") riskScore = Math.floor(Math.random() * 20) + 65;
    else riskScore = Math.floor(Math.random() * 15) + 85;
    
    let statusProbability;
    if (riskLevel === "Low") statusProbability = [0.2, 0.7, 0.1];
    else if (riskLevel === "Medium") statusProbability = [0.4, 0.4, 0.2];
    else if (riskLevel === "High") statusProbability = [0.6, 0.2, 0.2];
    else statusProbability = [0.7, 0.05, 0.25];
    
    const rand = Math.random();
    let statusIndex = 0;
    let sum = statusProbability[0];
    
    while (rand > sum && statusIndex < statusProbability.length - 1) {
      statusIndex++;
      sum += statusProbability[statusIndex];
    }
    
    const status = statuses[statusIndex];

    const email = `customer${i}@example.com`;
    const phone = `+1${Math.floor(Math.random() * 900) + 100}${Math.floor(Math.random() * 900) + 100}${Math.floor(Math.random() * 9000) + 1000}`;
    const ipAddress = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    const deviceId = `DEV-${Math.floor(Math.random() * 1000000)}`;
    const location = ["United States", "Canada", "United Kingdom", "Germany", "France", "Australia", "Japan", "Brazil"][Math.floor(Math.random() * 8)];
    
    const anomalyFlags = [];
    if (riskScore > 60) {
      if (Math.random() > 0.5) anomalyFlags.push("Multiple failed login attempts");
      if (Math.random() > 0.6) anomalyFlags.push("IP address mismatch");
      if (Math.random() > 0.7) anomalyFlags.push("Unusual transaction pattern");
      if (Math.random() > 0.8) anomalyFlags.push("Device not recognized");
      if (Math.random() > 0.9) anomalyFlags.push("Location inconsistency");
    }
    
    let reasoning = "";
    if (riskLevel === "Low") {
      reasoning = "The customer has a consistent usage pattern and all identity verification steps were completed successfully. The behavioral patterns match historical data, and there are no significant anomalies detected in the recent activities.";
    } else if (riskLevel === "Medium") {
      reasoning = "While most verification checks passed, there are some inconsistencies in the provided information. The customer's activity shows some deviation from typical patterns, and additional verification might be necessary to confirm legitimacy.";
    } else if (riskLevel === "High") {
      reasoning = "Multiple verification checks have failed, and the behavior pattern shows significant anomalies. The customer information has inconsistencies with our records, and the activity pattern suggests potential unauthorized access or fraudulent intent.";
    } else {
      reasoning = "Critical risk indicators have been identified, including failed verification on multiple factors, suspicious network connections, and behavior patterns consistent with known fraud schemes. Immediate attention and manual review are required.";
    }

    cases.push({
      id: `FR-2023-${1000 + i}`,
      customer: `Customer ${i}`,
      journey,
      riskLevel,
      riskScore,
      status,
      statusColor: statusColors[status],
      date: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      email,
      phone,
      ipAddress,
      deviceId,
      location,
      anomalyFlags,
      reasoning,
      emailVerified: Math.random() > 0.3,
      phoneVerified: Math.random() > 0.4,
      documents: [
        {
          type: Math.random() > 0.5 ? "Passport" : "Driver's License",
          verified: Math.random() > (riskLevel === "High" || riskLevel === "Critical" ? 0.7 : 0.3),
          score: Math.floor(Math.random() * 30) + (riskLevel === "High" || riskLevel === "Critical" ? 40 : 70)
        }
      ],
      decisionFactors: [
        {
          factor: "Identity Verification",
          score: Math.floor(Math.random() * 30) + (riskLevel === "High" || riskLevel === "Critical" ? 30 : 70),
          weight: 0.4
        },
        {
          factor: "Behavioral Analysis",
          score: Math.floor(Math.random() * 30) + (riskLevel === "High" || riskLevel === "Critical" ? 20 : 60),
          weight: 0.3
        },
        {
          factor: "Device Trust",
          score: Math.floor(Math.random() * 40) + (riskLevel === "High" || riskLevel === "Critical" ? 10 : 50),
          weight: 0.2
        },
        {
          factor: "Historical Pattern",
          score: Math.floor(Math.random() * 40) + (riskLevel === "High" || riskLevel === "Critical" ? 20 : 40),
          weight: 0.1
        }
      ]
    });
  }
  
  return cases;
};

const allCases = generateCases();

const CaseReview = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const [caseData, setCaseData] = useState<any>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("summary");
  const [actionDialog, setActionDialog] = useState<{
    isOpen: boolean;
    actionType: "approve" | "reject" | "escalate";
  }>({
    isOpen: false,
    actionType: "approve"
  });

  useEffect(() => {
    const foundCase = allCases.find(c => c.id === caseId);
    if (foundCase) {
      setCaseData(foundCase);
    }
  }, [caseId]);

  const openActionDialog = (actionType: "approve" | "reject" | "escalate") => {
    setActionDialog({
      isOpen: true,
      actionType
    });
  };

  const closeActionDialog = () => {
    setActionDialog({
      ...actionDialog,
      isOpen: false
    });
  };

  if (!caseData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Case not found</h2>
          <p className="text-muted-foreground mt-2">The requested case could not be found.</p>
          <Button asChild className="mt-4">
            <Link to="/cases">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cases
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const weightedScore = caseData.decisionFactors.reduce(
    (acc: number, factor: { score: number; weight: number }) => 
      acc + factor.score * factor.weight, 
    0
  );

  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/cases">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{caseData.id}</h1>
          <Badge variant={caseData.status === "Pending Review" ? "outline" : 
                          caseData.status === "Approved" ? "secondary" : "destructive"}>
            {caseData.status}
          </Badge>
        </div>
        
        <div className="flex gap-2">
          {caseData.status === "Pending Review" && (
            <>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-green-500 text-green-600 hover:bg-green-50"
                onClick={() => openActionDialog("approve")}
              >
                <Check className="h-4 w-4 mr-1" /> Approve
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-red-500 text-red-600 hover:bg-red-50"
                onClick={() => openActionDialog("reject")}
              >
                <X className="h-4 w-4 mr-1" /> Reject
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-amber-500 text-amber-600 hover:bg-amber-50"
                onClick={() => openActionDialog("escalate")}
              >
                <ArrowUp className="h-4 w-4 mr-1" /> Escalate
              </Button>
            </>
          )}
          <Button 
            size="sm" 
            variant="default" 
            className="bg-[#9b87f5] hover:bg-[#9b87f5]/90" 
            onClick={() => setIsChatOpen(true)}
          >
            <MessageSquare className="h-4 w-4 mr-1" /> Chat with AI
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="summary" className="flex-1">Summary</TabsTrigger>
              <TabsTrigger value="identity" className="flex-1">Identity</TabsTrigger>
              <TabsTrigger value="activity" className="flex-1">Activity</TabsTrigger>
              <TabsTrigger value="reasoning" className="flex-1">AI Reasoning</TabsTrigger>
            </TabsList>
            
            <TabsContent value="summary" className="space-y-6 mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Case Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Journey</p>
                      <p className="font-medium">{caseData.journey}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{caseData.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Risk Level</p>
                      <div className="flex items-center">
                        <Badge className={`mr-2 ${
                          caseData.riskLevel === "Critical" ? "bg-red-500" :
                          caseData.riskLevel === "High" ? "bg-red-400" :
                          caseData.riskLevel === "Medium" ? "bg-amber-400" :
                          "bg-green-500"
                        }`}>
                          {caseData.riskLevel}
                        </Badge>
                        <span className="font-medium">{caseData.riskScore}/100</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium">{caseData.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Risk Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Overall Risk Score</p>
                        <p className="text-sm text-muted-foreground">Based on weighted factors</p>
                      </div>
                      <Badge className={`${
                        weightedScore >= 80 ? "bg-red-500" :
                        weightedScore >= 60 ? "bg-red-400" :
                        weightedScore >= 40 ? "bg-amber-400" :
                        "bg-green-500"
                      }`}>
                        {Math.round(weightedScore)}/100
                      </Badge>
                    </div>

                    <Separator />

                    {caseData.decisionFactors.map((factor: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{factor.factor}</p>
                          <p className="text-sm text-muted-foreground">Weight: {factor.weight * 100}%</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                factor.score >= 80 ? "bg-red-500" :
                                factor.score >= 60 ? "bg-red-400" :
                                factor.score >= 40 ? "bg-amber-400" :
                                "bg-green-500"
                              }`} 
                              style={{ width: `${factor.score}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{factor.score}</span>
                        </div>
                      </div>
                    ))}

                    {caseData.anomalyFlags.length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <p className="font-medium mb-2">Anomaly Flags</p>
                          <div className="space-y-2">
                            {caseData.anomalyFlags.map((flag: string, idx: number) => (
                              <div key={idx} className="flex items-center text-sm">
                                <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                                <span>{flag}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="identity" className="space-y-6 mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Customer Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-muted-foreground" />
                        <p className="font-medium">{caseData.customer}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <p className="font-medium">{caseData.email}</p>
                        {caseData.emailVerified ? 
                          <Badge variant="outline" className="ml-2 text-green-600 border-green-600">Verified</Badge> : 
                          <Badge variant="outline" className="ml-2 text-amber-600 border-amber-600">Unverified</Badge>
                        }
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <p className="font-medium">{caseData.phone}</p>
                        {caseData.phoneVerified ? 
                          <Badge variant="outline" className="ml-2 text-green-600 border-green-600">Verified</Badge> : 
                          <Badge variant="outline" className="ml-2 text-amber-600 border-amber-600">Unverified</Badge>
                        }
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{caseData.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Identity Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {caseData.documents.map((doc: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between border rounded-md p-3">
                        <div className="flex items-center">
                          <File className="h-10 w-10 p-2 mr-3 bg-gray-100 rounded-md text-gray-600" />
                          <div>
                            <p className="font-medium">{doc.type}</p>
                            <p className="text-sm text-muted-foreground">
                              Verification score: {doc.score}/100
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {doc.verified ? 
                            <Badge variant="outline" className="text-green-600 border-green-600">Verified</Badge> : 
                            <Badge variant="outline" className="text-amber-600 border-amber-600">Verification Issues</Badge>
                          }
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6 mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Device Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Device ID</p>
                      <p className="font-medium">{caseData.deviceId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">IP Address</p>
                      <p className="font-medium">{caseData.ipAddress}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...Array(5)].map((_, idx) => (
                      <div key={idx} className="flex items-start pb-4 border-b last:border-0 last:pb-0">
                        <div className="mr-3 mt-0.5">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {["Login attempt", "Updated profile", "Initiated transaction", "Uploaded document", "Password change"][idx]}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(2023, 
                              Math.floor(Math.random() * 12), 
                              Math.floor(Math.random() * 28) + 1, 
                              Math.floor(Math.random() * 24),
                              Math.floor(Math.random() * 60)
                            ).toLocaleString()}
                          </p>
                        </div>
                        <Badge variant={idx === 0 && caseData.riskScore > 70 ? "destructive" : "outline"}>
                          {idx === 0 && caseData.riskScore > 70 ? "Suspicious" : "Normal"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reasoning" className="space-y-6 mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <BrainCircuit className="h-5 w-5 mr-2 text-[#9b87f5]" />
                    <CardTitle className="text-lg">AI Analysis</CardTitle>
                  </div>
                  <CardDescription>
                    Generated by our fraud detection AI agent
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-[#9b87f5]/10 rounded-md p-4 border border-[#9b87f5]/20">
                      <div className="flex items-start mb-3">
                        <Lightbulb className="h-5 w-5 mr-2 text-[#9b87f5] mt-0.5" />
                        <div>
                          <h3 className="font-medium text-[#9b87f5]">AI Reasoning</h3>
                          <p className="text-sm mt-1">{caseData.reasoning}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Key Risk Indicators</h3>
                      <div className="space-y-2">
                        {[
                          {
                            name: "Identity Consistency",
                            status: caseData.riskScore < 60 ? "pass" : "flag",
                            details: caseData.riskScore < 60 
                              ? "All identity information is consistent with our records." 
                              : "There are inconsistencies in the provided identity information."
                          },
                          {
                            name: "Document Authenticity",
                            status: caseData.documents[0].verified ? "pass" : "flag",
                            details: caseData.documents[0].verified
                              ? "Document verification passed all security checks."
                              : "Document verification found potential issues with authenticity."
                          },
                          {
                            name: "Behavioral Patterns",
                            status: caseData.riskScore < 70 ? "pass" : "flag",
                            details: caseData.riskScore < 70
                              ? "User behavior is consistent with historical patterns."
                              : "Unusual behavior detected in recent activities."
                          }
                        ].map((indicator, idx) => (
                          <div key={idx} className="flex items-start">
                            {indicator.status === "pass" ? (
                              <Check className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                            ) : (
                              <AlertTriangle className="h-5 w-5 mr-2 text-amber-500 mt-0.5" />
                            )}
                            <div>
                              <p className="font-medium">{indicator.name}</p>
                              <p className="text-sm text-muted-foreground">{indicator.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Recommendation</h3>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <p className="text-sm">
                          {caseData.riskLevel === "Low" && "This case has a low risk profile with no significant anomalies. Automated approval is recommended."}
                          {caseData.riskLevel === "Medium" && "This case has a medium risk profile with some anomalies. Additional verification may be required before approval."}
                          {caseData.riskLevel === "High" && "This case has a high risk profile with multiple anomalies. Manual review is recommended before making a decision."}
                          {caseData.riskLevel === "Critical" && "This case has a critical risk profile with significant anomalies. Rejection is recommended pending a thorough investigation."}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <CardTitle className="text-lg">Case Summary</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Risk Score</p>
                  <div className="flex items-center mt-1">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          caseData.riskScore >= 80 ? "bg-red-500" :
                          caseData.riskScore >= 60 ? "bg-red-400" :
                          caseData.riskScore >= 40 ? "bg-amber-400" :
                          "bg-green-500"
                        }`} 
                        style={{ width: `${caseData.riskScore}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 font-medium">{caseData.riskScore}</span>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground">Customer</p>
                  <p className="font-medium">{caseData.customer}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Journey</p>
                  <p className="font-medium">{caseData.journey}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge variant={
                    caseData.status === "Pending Review" ? "outline" : 
                    caseData.status === "Approved" ? "secondary" : 
                    "destructive"
                  } className="mt-1">
                    {caseData.status}
                  </Badge>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground">Created On</p>
                  <p className="font-medium">{caseData.date}</p>
                </div>

                {caseData.status !== "Pending Review" && (
                  <div>
                    <p className="text-sm text-muted-foreground">Decision Date</p>
                    <p className="font-medium">
                      {new Date(
                        new Date(caseData.date).getTime() + 
                        Math.floor(Math.random() * 3 * 24 * 60 * 60 * 1000)
                      ).toISOString().split('T')[0]}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <CardTitle className="text-lg">AI Assistant</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Ask our AI assistant to help with this case review
              </p>
              <Button 
                className="w-full bg-[#9b87f5] hover:bg-[#9b87f5]/90"
                onClick={() => setIsChatOpen(true)}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
        <SheetContent className="sm:max-w-md md:max-w-lg">
          <SheetHeader>
            <SheetTitle>AI Assistant</SheetTitle>
            <SheetDescription>
              Chat with our AI to get help with this case
            </SheetDescription>
          </SheetHeader>
          <div className="h-[calc(100vh-120px)]">
            <CaseChat caseData={caseData} />
          </div>
        </SheetContent>
      </Sheet>

      <CaseActionDialog
        caseId={caseData.id}
        actionType={actionDialog.actionType}
        isOpen={actionDialog.isOpen}
        onClose={closeActionDialog}
      />
    </div>
  );
};

export default CaseReview;

