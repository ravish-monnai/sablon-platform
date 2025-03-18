
import { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useMobile } from "@/hooks/use-mobile";
import { 
  UserRound, Mail, Phone, MapPin, Calendar, AlertTriangle, ShieldAlert, 
  CreditCard, Building, FileText, CheckCircle, XCircle, Clock, Briefcase,
  Globe, BarChart4, DollarSign, Flag, CircleUser
} from "lucide-react";

// Define the customer type
interface CustomerData {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  registeredOn: string;
  customerType: string;
  status: string;
  riskLevel: string;
  riskScore: number;
  kycStatus: string;
  alertsCount: number;
  lastActivity: string;
  address?: string;
  occupation?: string;
  transactionsCount?: number;
  totalSpent?: number;
  governmentId?: string;
  verificationDate?: string;
  fraudChecks?: {
    name: string;
    status: "passed" | "failed" | "pending";
  }[];
  transactionHistory?: {
    id: string;
    date: string;
    amount: number;
    type: string;
    status: string;
  }[];
  documentsSubmitted?: {
    name: string;
    type: string;
    date: string;
    status: string;
  }[];
}

interface CustomerProfileProps {
  customerId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomerProfile({ customerId, isOpen, onClose }: CustomerProfileProps) {
  const [customer, setCustomer] = useState<CustomerData | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const isMobile = useMobile();

  // Simulate fetching customer data
  useEffect(() => {
    if (customerId) {
      // In a real app, fetch data from API
      const mockCustomer: CustomerData = {
        id: customerId,
        name: `Customer ${customerId.split('-')[1]}`,
        email: `customer${customerId.split('-')[1]}@example.com`,
        phone: "+1 (555) 123-4567",
        country: "United States",
        registeredOn: "2023-06-15",
        customerType: "Individual",
        status: "Active",
        riskLevel: "Medium",
        riskScore: 45,
        kycStatus: "Verified",
        alertsCount: 2,
        lastActivity: "2024-05-01",
        address: "123 Main St, San Francisco, CA 94105",
        occupation: "Software Developer",
        transactionsCount: 24,
        totalSpent: 4560.75,
        governmentId: "ID-1234567",
        verificationDate: "2023-06-20",
        fraudChecks: [
          { name: "Identity Match", status: "passed" },
          { name: "Address Verification", status: "passed" },
          { name: "Phone Verification", status: "passed" },
          { name: "Document Authenticity", status: "passed" },
          { name: "Sanctions Screening", status: "passed" },
          { name: "PEP Screening", status: "passed" },
        ],
        transactionHistory: [
          { id: "TRX-001", date: "2024-05-01", amount: 250.00, type: "Purchase", status: "Completed" },
          { id: "TRX-002", date: "2024-04-25", amount: 1200.50, type: "Transfer", status: "Completed" },
          { id: "TRX-003", date: "2024-04-15", amount: 85.20, type: "Purchase", status: "Completed" },
          { id: "TRX-004", date: "2024-04-05", amount: 25.00, type: "Subscription", status: "Pending" },
          { id: "TRX-005", date: "2024-03-28", amount: 3000.00, type: "Deposit", status: "Completed" },
        ],
        documentsSubmitted: [
          { name: "Passport", type: "ID", date: "2023-06-15", status: "Verified" },
          { name: "Utility Bill", type: "Proof of Address", date: "2023-06-15", status: "Verified" },
          { name: "Bank Statement", type: "Financial", date: "2023-06-17", status: "Verified" },
        ]
      };
      
      setCustomer(mockCustomer);
    }
  }, [customerId]);

  if (!isOpen || !customer) {
    return null;
  }

  // Determine the risk color based on risk level
  const getRiskColor = (level: string) => {
    switch (level) {
      case "Low": return "bg-green-100 text-green-800";
      case "Medium": return "bg-amber-100 text-amber-800";
      case "High": return "bg-red-100 text-red-800";
      case "Critical": return "bg-purple-100 text-purple-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  // Determine the status badge variant
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Active": return "success";
      case "Suspended": return "destructive";
      case "Under Review": return "warning";
      default: return "outline";
    }
  };

  // Determine the KYC status badge variant
  const getKycVariant = (status: string) => {
    switch (status) {
      case "Verified": return "success";
      case "Failed": return "destructive";
      case "Pending": return "warning";
      default: return "outline";
    }
  };

  // Render check status icon
  const renderCheckStatus = (status: "passed" | "failed" | "pending") => {
    switch (status) {
      case "passed": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "failed": return <XCircle className="h-4 w-4 text-red-500" />;
      case "pending": return <Clock className="h-4 w-4 text-amber-500" />;
    }
  };

  // Content of the profile
  const profileContent = (
    <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="risk">Risk Profile</TabsTrigger>
        <TabsTrigger value="transactions">Transactions</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4 mt-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg">Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <CircleUser className="h-14 w-14 text-muted-foreground mr-2" />
                <div>
                  <h3 className="text-lg font-semibold">{customer.name}</h3>
                  <p className="text-sm text-muted-foreground">{customer.id}</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{customer.address}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  <span>{customer.country}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{customer.occupation}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Registered on {customer.registeredOn}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg">Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Customer Type</p>
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    <span>{customer.customerType}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge variant={getStatusVariant(customer.status)}>
                    {customer.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">KYC Status</p>
                  <Badge variant={getKycVariant(customer.kycStatus)}>
                    {customer.kycStatus}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Risk Level</p>
                  <Badge className={getRiskColor(customer.riskLevel)}>
                    {customer.riskLevel}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Last Activity</p>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{customer.lastActivity}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Alerts</p>
                  {customer.alertsCount > 0 ? (
                    <Badge variant="destructive" className="flex items-center">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {customer.alertsCount}
                    </Badge>
                  ) : (
                    <Badge variant="outline">None</Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Transaction Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground mb-1">Total Transactions</p>
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  <span className="text-lg font-semibold">{customer.transactionsCount}</span>
                </div>
              </div>
              
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="text-lg font-semibold">${customer.totalSpent?.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground mb-1">Recent Transaction</p>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-lg font-semibold">{customer.transactionHistory?.[0].date}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" onClick={() => setActiveTab("transactions")}>
              View All Transactions
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="risk" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Risk Assessment</CardTitle>
            <CardDescription>Overall risk score and key risk indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Risk Score</span>
                <span className="text-sm font-semibold">{customer.riskScore}/100</span>
              </div>
              <Progress value={customer.riskScore} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low Risk</span>
                <span>Medium Risk</span>
                <span>High Risk</span>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-3">Verification Checks</h4>
              <div className="space-y-3">
                {customer.fraudChecks?.map((check, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{check.name}</span>
                    {renderCheckStatus(check.status)}
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-3">KYC Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Government ID</span>
                  <span className="text-sm">{customer.governmentId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Verification Date</span>
                  <span className="text-sm">{customer.verificationDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">KYC Status</span>
                  <Badge variant={getKycVariant(customer.kycStatus)}>
                    {customer.kycStatus}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="mr-2">Review Risk</Button>
            <Button variant="outline" size="sm">Generate Report</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="transactions" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Transaction History</CardTitle>
            <CardDescription>Recent transactions by this customer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 text-sm font-medium">ID</th>
                    <th className="text-left p-3 text-sm font-medium">Date</th>
                    <th className="text-left p-3 text-sm font-medium">Amount</th>
                    <th className="text-left p-3 text-sm font-medium">Type</th>
                    <th className="text-left p-3 text-sm font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customer.transactionHistory?.map((transaction, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3 text-sm">{transaction.id}</td>
                      <td className="p-3 text-sm">{transaction.date}</td>
                      <td className="p-3 text-sm">${transaction.amount.toFixed(2)}</td>
                      <td className="p-3 text-sm">{transaction.type}</td>
                      <td className="p-3 text-sm">
                        <Badge variant={transaction.status === "Completed" ? "success" : "warning"}>
                          {transaction.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">View All Transactions</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="documents" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Submitted Documents</CardTitle>
            <CardDescription>Documents provided by the customer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 text-sm font-medium">Document</th>
                    <th className="text-left p-3 text-sm font-medium">Type</th>
                    <th className="text-left p-3 text-sm font-medium">Date</th>
                    <th className="text-left p-3 text-sm font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customer.documentsSubmitted?.map((doc, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3 text-sm">{doc.name}</td>
                      <td className="p-3 text-sm">{doc.type}</td>
                      <td className="p-3 text-sm">{doc.date}</td>
                      <td className="p-3 text-sm">
                        <Badge variant={doc.status === "Verified" ? "success" : "warning"}>
                          {doc.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Request Additional Documents</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );

  // Render different UI components based on screen size
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader>
            <DrawerTitle>Customer Profile</DrawerTitle>
            <DrawerDescription>{customer.id}</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-4 overflow-y-auto">
            {profileContent}
          </div>
          <DrawerFooter>
            <Button variant="outline" onClick={onClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  } else {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Customer Profile</DialogTitle>
            <DialogDescription>{customer.id}</DialogDescription>
          </DialogHeader>
          {profileContent}
        </DialogContent>
      </Dialog>
    );
  }
}
