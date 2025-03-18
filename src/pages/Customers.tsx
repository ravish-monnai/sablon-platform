import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  UserRound, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  AlertTriangle,
  ShieldAlert 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import CustomerProfile from "@/components/customers/CustomerProfile";

const generateSampleCustomers = () => {
  const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Japan", "Brazil"];
  const statuses = ["Active", "Suspended", "Under Review"];
  const riskLevels = ["Low", "Medium", "High", "Critical"];
  const kycStatuses = ["Verified", "Pending", "Failed"];
  const customerTypes = ["Individual", "Business", "Government"];
  
  const customers = [];
  
  for (let i = 1; i <= 20; i++) {
    const countryIndex = Math.floor(Math.random() * countries.length);
    const country = countries[countryIndex];
    
    const riskIndex = Math.floor(Math.random() * riskLevels.length);
    const riskLevel = riskLevels[riskIndex];
    
    const kycIndex = Math.floor(Math.random() * kycStatuses.length);
    const kycStatus = kycStatuses[kycIndex];
    
    const statusIndex = Math.floor(Math.random() * statuses.length);
    const status = statuses[statusIndex];
    
    const customerTypeIndex = Math.floor(Math.random() * customerTypes.length);
    const customerType = customerTypes[customerTypeIndex];
    
    let riskScore;
    if (riskLevel === "Low") riskScore = Math.floor(Math.random() * 20) + 10;
    else if (riskLevel === "Medium") riskScore = Math.floor(Math.random() * 20) + 30;
    else if (riskLevel === "High") riskScore = Math.floor(Math.random() * 15) + 65;
    else riskScore = Math.floor(Math.random() * 15) + 85;
    
    const phoneArea = Math.floor(Math.random() * 900) + 100;
    const phonePrefix = Math.floor(Math.random() * 900) + 100;
    const phoneLine = Math.floor(Math.random() * 9000) + 1000;
    const phoneNumber = `+1 (${phoneArea}) ${phonePrefix}-${phoneLine}`;
    
    const now = new Date();
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(now.getFullYear() - 2);
    const registrationDate = new Date(
      twoYearsAgo.getTime() + Math.random() * (now.getTime() - twoYearsAgo.getTime())
    ).toISOString().split('T')[0];

    let alertsCount;
    if (riskLevel === "Low") alertsCount = Math.floor(Math.random() * 2);
    else if (riskLevel === "Medium") alertsCount = Math.floor(Math.random() * 3) + 1;
    else if (riskLevel === "High") alertsCount = Math.floor(Math.random() * 5) + 3;
    else alertsCount = Math.floor(Math.random() * 8) + 5;
    
    customers.push({
      id: `CUST-${10000 + i}`,
      name: `Customer ${i}`,
      email: `customer${i}@example.com`,
      phone: phoneNumber,
      country,
      registeredOn: registrationDate,
      customerType,
      status,
      riskLevel,
      riskScore,
      kycStatus,
      alertsCount,
      lastActivity: new Date(
        now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000
      ).toISOString().split('T')[0]
    });
  }
  
  return customers;
};

const sampleCustomers = generateSampleCustomers();

export default function Customers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedKycStatus, setSelectedKycStatus] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState("all");
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const filteredCustomers = sampleCustomers.filter((c) => {
    const searchRegex = new RegExp(searchQuery, "i");
    const matchesSearch =
      searchRegex.test(c.id) ||
      searchRegex.test(c.name) ||
      searchRegex.test(c.email) ||
      searchRegex.test(c.phone) ||
      searchRegex.test(c.country);

    const matchesRiskLevel =
      selectedRiskLevel === null || c.riskLevel === selectedRiskLevel;

    const matchesStatus =
      selectedStatus === null || c.status === selectedStatus;
      
    const matchesKycStatus =
      selectedKycStatus === null || c.kycStatus === selectedKycStatus;

    return matchesSearch && matchesRiskLevel && matchesStatus && matchesKycStatus;
  });
  
  const tabFilteredCustomers = filteredCustomers.filter(c => {
    if (currentTab === "all") return true;
    if (currentTab === "high-risk") return c.riskLevel === "High" || c.riskLevel === "Critical";
    if (currentTab === "kyc-pending") return c.kycStatus === "Pending";
    if (currentTab === "alerts") return c.alertsCount > 0;
    return true;
  });

  const handleViewProfile = (customerId: string) => {
    setSelectedCustomerId(customerId);
    setIsProfileOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">
            View and manage all customers processed by the risk platform
          </p>
        </div>
        <Button>Add Customer</Button>
      </div>

      <Tabs defaultValue="all" value={currentTab} onValueChange={setCurrentTab}>
        <TabsList>
          <TabsTrigger value="all" className="flex items-center">
            <UserRound className="h-4 w-4 mr-2" /> All Customers
          </TabsTrigger>
          <TabsTrigger value="high-risk" className="flex items-center">
            <ShieldAlert className="h-4 w-4 mr-2" /> High Risk
          </TabsTrigger>
          <TabsTrigger value="kyc-pending" className="flex items-center">
            <UserRound className="h-4 w-4 mr-2" /> KYC Pending
          </TabsTrigger>
          <TabsTrigger value="alerts" className="flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2" /> With Alerts
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search customers..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Risk Level</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setSelectedRiskLevel(null)}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRiskLevel("Low")}>
                  Low
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRiskLevel("Medium")}>
                  Medium
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRiskLevel("High")}>
                  High
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRiskLevel("Critical")}>
                  Critical
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Status</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setSelectedStatus(null)}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("Active")}>
                  Active
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("Suspended")}>
                  Suspended
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("Under Review")}>
                  Under Review
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuLabel>KYC Status</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setSelectedKycStatus(null)}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedKycStatus("Verified")}>
                  Verified
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedKycStatus("Pending")}>
                  Pending
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedKycStatus("Failed")}>
                  Failed
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>KYC Status</TableHead>
                  <TableHead>Alerts</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tabFilteredCustomers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.id}</TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell className="space-y-1">
                      <div className="flex items-center text-xs">
                        <Mail className="h-3 w-3 mr-1" />
                        {c.email}
                      </div>
                      <div className="flex items-center text-xs">
                        <Phone className="h-3 w-3 mr-1" />
                        {c.phone}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {c.country}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          c.status === "Active"
                            ? "success"
                            : c.status === "Suspended"
                            ? "destructive"
                            : "warning"
                        }
                      >
                        {c.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          c.riskLevel === "Low"
                            ? "bg-green-100 text-green-800"
                            : c.riskLevel === "Medium"
                            ? "bg-amber-100 text-amber-800"
                            : c.riskLevel === "High"
                            ? "bg-red-100 text-red-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {c.riskLevel} ({c.riskScore})
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          c.kycStatus === "Verified"
                            ? "success"
                            : c.kycStatus === "Failed"
                            ? "destructive"
                            : "warning"
                        }
                      >
                        {c.kycStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {c.alertsCount > 0 ? (
                        <Badge variant="destructive" className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {c.alertsCount}
                        </Badge>
                      ) : (
                        <Badge variant="outline">None</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {c.registeredOn}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleViewProfile(c.id)}>
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            <DropdownMenuItem>Risk Assessment</DropdownMenuItem>
                            <DropdownMenuItem>View Cases</DropdownMenuItem>
                            <DropdownMenuItem>View Transactions</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="high-risk" className="space-y-4">
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search high risk customers..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>KYC Status</TableHead>
                  <TableHead>Alerts</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tabFilteredCustomers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.id}</TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell className="space-y-1">
                      <div className="flex items-center text-xs">
                        <Mail className="h-3 w-3 mr-1" />
                        {c.email}
                      </div>
                      <div className="flex items-center text-xs">
                        <Phone className="h-3 w-3 mr-1" />
                        {c.phone}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {c.country}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          c.status === "Active"
                            ? "success"
                            : c.status === "Suspended"
                            ? "destructive"
                            : "warning"
                        }
                      >
                        {c.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          c.riskLevel === "Low"
                            ? "bg-green-100 text-green-800"
                            : c.riskLevel === "Medium"
                            ? "bg-amber-100 text-amber-800"
                            : c.riskLevel === "High"
                            ? "bg-red-100 text-red-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {c.riskLevel} ({c.riskScore})
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          c.kycStatus === "Verified"
                            ? "success"
                            : c.kycStatus === "Failed"
                            ? "destructive"
                            : "warning"
                        }
                      >
                        {c.kycStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {c.alertsCount > 0 ? (
                        <Badge variant="destructive" className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {c.alertsCount}
                        </Badge>
                      ) : (
                        <Badge variant="outline">None</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {c.registeredOn}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleViewProfile(c.id)}>
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            <DropdownMenuItem>Risk Assessment</DropdownMenuItem>
                            <DropdownMenuItem>View Cases</DropdownMenuItem>
                            <DropdownMenuItem>View Transactions</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="kyc-pending">
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>KYC Status</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tabFilteredCustomers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.id}</TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell className="space-y-1">
                      <div className="flex items-center text-xs">
                        <Mail className="h-3 w-3 mr-1" />
                        {c.email}
                      </div>
                      <div className="flex items-center text-xs">
                        <Phone className="h-3 w-3 mr-1" />
                        {c.phone}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {c.country}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          c.status === "Active"
                            ? "success"
                            : c.status === "Suspended"
                            ? "destructive"
                            : "warning"
                        }
                      >
                        {c.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          c.riskLevel === "Low"
                            ? "bg-green-100 text-green-800"
                            : c.riskLevel === "Medium"
                            ? "bg-amber-100 text-amber-800"
                            : c.riskLevel === "High"
                            ? "bg-red-100 text-red-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {c.riskLevel} ({c.riskScore})
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="warning">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {c.registeredOn}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <Button size="sm" className="mr-2">Verify</Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleViewProfile(c.id)}>
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>Request Documents</DropdownMenuItem>
                            <DropdownMenuItem>Reject KYC</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="alerts">
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Alerts</TableHead>
                  <TableHead>Last Activity</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tabFilteredCustomers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.id}</TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {c.country}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          c.riskLevel === "Low"
                            ? "bg-green-100 text-green-800"
                            : c.riskLevel === "Medium"
                            ? "bg-amber-100 text-amber-800"
                            : c.riskLevel === "High"
                            ? "bg-red-100 text-red-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {c.riskLevel} ({c.riskScore})
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="destructive" className="flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {c.alertsCount}
                      </Badge>
                    </TableCell>
                    <TableCell>{c.lastActivity}</TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline" className="mr-2">Review Alerts</Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleViewProfile(c.id)}>
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>View Transactions</DropdownMenuItem>
                            <DropdownMenuItem>Create Case</DropdownMenuItem>
                            <DropdownMenuItem>Dismiss Alerts</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
      
      <CustomerProfile 
        customerId={selectedCustomerId}
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
}
