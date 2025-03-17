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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
  ArrowUp,
  FileText,
  Activity,
  FileBox,
  Network,
  UserCheck,
  UserX,
  Globe,
  Smartphone,
  AlertCircle,
  HardDrive,
  Cpu,
  Info
} from "lucide-react";
import CaseChat from "@/components/cases/CaseChat";
import CaseActionDialog from "@/components/cases/CaseActionDialog";
import UserNetworkGraph from "@/components/cases/UserNetworkGraph";

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
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/cases">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Link>
          </Button>
          <h1 className="text-xl font-bold">{caseData.id}</h1>
          <Badge variant={caseData.status === "Pending Review" ? "outline" : 
                          caseData.status === "Approved" ? "secondary" : "destructive"}>
            {caseData.status === "Pending Review" && <Clock className="h-3 w-3 mr-1" />}
            {caseData.status === "Approved" && <Check className="h-3 w-3 mr-1" />}
            {caseData.status === "Rejected" && <X className="h-3 w-3 mr-1" />}
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

      <Tabs defaultValue="summary" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="summary" className="flex items-center">
            <BrainCircuit className="h-4 w-4 mr-2" /> Summary & Analysis
          </TabsTrigger>
          <TabsTrigger value="identity" className="flex items-center">
            <User className="h-4 w-4 mr-2" /> Identity
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center">
            <Activity className="h-4 w-4 mr-2" /> Activity
          </TabsTrigger>
          <TabsTrigger value="network" className="flex items-center">
            <Network className="h-4 w-4 mr-2" /> Network
          </TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Case Overview card */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-[#9b87f5]" />
                    <CardTitle className="text-lg">Case Overview</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Journey</p>
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-muted-foreground" />
                        <p className="font-medium">{caseData.journey}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <p className="font-medium">{caseData.date}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <AlertCircle className={`h-6 w-6 mr-3 ${
                        caseData.riskLevel === "Critical" ? "text-red-500" :
                        caseData.riskLevel === "High" ? "text-red-400" :
                        caseData.riskLevel === "Medium" ? "text-amber-400" :
                        "text-green-500"
                      }`} />
                      <div>
                        <p className="font-medium">Risk Level: {caseData.riskLevel}</p>
                        <p className="text-sm text-muted-foreground">Score: {caseData.riskScore}/100</p>
                      </div>
                    </div>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
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
                  </div>

                  {caseData.anomalyFlags.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-medium">Anomaly Flags</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {caseData.anomalyFlags.map((flag: string, idx: number) => (
                          <div key={idx} className="flex items-center text-sm bg-amber-50 text-amber-800 p-2 rounded-md">
                            <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                            <span>{flag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* AI Reasoning section - Moved from the separate tab */}
                  <div className="mt-6">
                    <Separator className="my-4" />
                    <div className="flex items-center mb-3">
                      <BrainCircuit className="h-5 w-5 mr-2 text-[#9b87f5]" />
                      <h3 className="font-medium text-[#9b87f5]">AI Analysis</h3>
                    </div>
                    <div className="bg-[#9b87f5]/10 rounded-md p-4 border border-[#9b87f5]/20">
                      <div className="flex items-start mb-3">
                        <Cpu className="h-5 w-5 mr-2 text-[#9b87f5] mt-0.5" />
                        <div>
                          <h3 className="font-medium text-[#9b87f5]">AI Reasoning</h3>
                          <p className="text-sm mt-1">{caseData.reasoning}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {caseData.decisionFactors.map((factor: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-medium">{factor.factor}</p>
                            <p className="text-xs text-muted-foreground">Weight: {factor.weight * 100}%</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
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
                            <span className="text-xs font-medium">{factor.score}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Case Info card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-lg">Case Info</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Customer</p>
                    <p className="font-medium">{caseData.customer}</p>
                  </div>

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

                  <div>
                    <p className="text-sm text-muted-foreground">Recommendation</p>
                    <p className="text-sm mt-1 p-2 bg-gray-100 rounded-md">
                      {caseData.riskLevel === "Low" && "Automated approval is recommended."}
                      {caseData.riskLevel === "Medium" && "Additional verification may be required."}
                      {caseData.riskLevel === "High" && "Manual review is recommended."}
                      {caseData.riskLevel === "Critical" && "Rejection is recommended."}
                    </p>
                  </div>

                  {/* Key Risk Indicators section - Moved from the AI tab */}
                  <Separator className="my-3" />
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
                      <div key={idx} className="flex items-start p-2 border rounded-md">
                        {indicator.status === "pass" ? (
                          <UserCheck className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                        ) : (
                          <UserX className="h-5 w-5 mr-2 text-amber-500 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium">{indicator.name}</p>
                          <p className="text-sm text-muted-foreground">{indicator.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="identity" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <CardTitle className="text-lg">Identity Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
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
                      <Badge variant="outline" className="ml-2 text-green-600 border-green-600">
                        <Check className="h-3 w-3 mr-1" /> Verified
                      </Badge> : 
                      <Badge variant="outline" className="ml-2 text-amber-600 border-amber-600">
                        <AlertTriangle className="h-3 w-3 mr-1" /> Unverified
                      </Badge>
                    }
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p className="font-medium">{caseData.phone}</p>
                    {caseData.phoneVerified ? 
                      <Badge variant="outline" className="ml-2 text-green-600 border-green-600">
                        <Check className="h-3 w-3 mr-1" /> Verified
                      </Badge> : 
                      <Badge variant="outline" className="ml-2 text-amber-600 border-amber-600">
                        <AlertTriangle className="h-3 w-3 mr-1" /> Unverified
                      </Badge>
                    }
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p className="font-medium">{caseData.location}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Identity Documents</h3>
                <div className="space-y-3">
                  {caseData.documents.map((doc: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between border rounded-md p-3">
                      <div className="flex items-center">
                        <File className="h-10 w-10 p-2 mr-3 bg-gray-100 rounded-md text-gray-600" />
                        <div>
                          <p className="font-medium">{doc.type}</p>
                          <div className="flex items-center">
                            <p className="text-sm text-muted-foreground mr-2">
                              Score: {doc.score}/100
                            </p>
                            <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${
                                  doc.score >= 80 ? "bg-green-500" :
                                  doc.score >= 60 ? "bg-amber-400" :
                                  "bg-red-500"
                                }`} 
                                style={{ width: `${doc.score}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {doc.verified ? 
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <Check className="h-3 w-3 mr-1" /> Verified
                          </Badge> : 
                          <Badge variant="outline" className="text-amber-600 border-amber-600">
                            <AlertTriangle className="h-3 w-3 mr-1" /> Issues
                          </Badge>
                        }
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <CardTitle className="text-lg">Device & Activity</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Device ID</p>
                  <div className="flex items-center">
                    <Smartphone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p className="font-medium">{caseData.deviceId}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">IP Address</p>
                  <div className="flex items-center">
                    <HardDrive className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p className="font-medium">{caseData.ipAddress}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="font-medium">Recent Activity</h3>
                {[...Array(5)].map((_, idx) => (
                  <div key={idx} className="flex items-start p-3 rounded-md bg-gray-50">
                    <div className="mr-3 mt-0.5 bg-white p-1.5 rounded-full">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="font-medium">
                          {["Login attempt", "Updated profile", "Initiated transaction", "Uploaded document", "Password change"][idx]}
                        </p>
                        <Badge variant={idx === 0 && caseData.riskScore > 70 ? "destructive" : "outline"} className="text-xs">
                          {idx === 0 && caseData.riskScore > 70 ? (
                            <><AlertTriangle className="h-3 w-3 mr-1" /> Suspicious</>
                          ) : (
                            <><Check className="h-3 w-3 mr-1" /> Normal</>
                          )}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(2023, 
                          Math.floor(Math.random() * 12), 
                          Math.floor(Math.random() * 28) + 1, 
                          Math.floor(Math.random() * 24),
                          Math.floor(Math.random() * 60)
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Network className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <CardTitle className="text-lg">User Network Analysis</CardTitle>
              </div>
              <CardDescription>
                Connections between this user and other entities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium">Connection Graph</h3>
                    <p className="text-sm text-muted-foreground">Visualizing how this user is connected to other entities</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                      <span>Good Users</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                      <span>Bad Users</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                      <span>Current User</span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-md p-1 mt-3 bg-gray-50">
                  <UserNetworkGraph caseData={caseData} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {actionDialog.isOpen && (
        <CaseActionDialog
          caseId
