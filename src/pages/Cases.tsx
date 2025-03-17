import { useState } from "react";
import { Link } from "react-router-dom";
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
  ChevronRight, 
  FileText, 
  Network 
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CasesLinkAnalysis from "@/components/cases/CasesLinkAnalysis";

// Generate 10 sample cases for demonstration
const generateSampleCases = () => {
  const journeys = [
    "Account Opening", 
    "Transaction Monitoring", 
    "Identity Verification", 
    "Risk Assessment",
    "Fraud Detection"
  ];

  const cases = [];
  const riskLevels = ["Low", "Medium", "High", "Critical"];
  const statuses = ["Pending Review", "Approved", "Rejected"];
  const statusColors = {
    "Pending Review": "bg-amber-100 text-amber-800",
    "Approved": "bg-green-100 text-green-800",
    "Rejected": "bg-red-100 text-red-800"
  };
  
  for (let i = 1; i <= 10; i++) {
    const journeyIndex = Math.floor(i / 2) % journeys.length;
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
    cases.push({
      id: `FR-2023-${1000 + i}`,
      customer: `Customer ${i}`,
      journey,
      riskLevel,
      riskScore,
      status,
      statusColor: statusColors[status],
      date: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0]
    });
  }
  
  return cases;
};

const sampleCases = generateSampleCases();

export default function Cases() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<string | null>(null);
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState("cases");

  // Filter cases based on search query and filters
  const filteredCases = sampleCases.filter((c) => {
    const searchRegex = new RegExp(searchQuery, "i");
    const matchesSearch =
      searchRegex.test(c.id) ||
      searchRegex.test(c.customer) ||
      searchRegex.test(c.journey);

    const matchesRiskLevel =
      selectedRiskLevel === null || c.riskLevel === selectedRiskLevel;

    const matchesJourney =
      selectedJourney === null || c.journey === selectedJourney;

    return matchesSearch && matchesRiskLevel && matchesJourney;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cases</h1>
          <p className="text-muted-foreground">
            View and manage all fraud and risk cases across your platform
          </p>
        </div>
        <Button>Create New Case</Button>
      </div>

      <Tabs defaultValue="cases" value={currentTab} onValueChange={setCurrentTab}>
        <TabsList>
          <TabsTrigger value="cases" className="flex items-center">
            <FileText className="h-4 w-4 mr-2" /> Cases List
          </TabsTrigger>
          <TabsTrigger value="link-analysis" className="flex items-center">
            <Network className="h-4 w-4 mr-2" /> Link Analysis
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="cases">
          <div className="flex space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search cases..."
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
                <DropdownMenuLabel>Journey</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setSelectedJourney(null)}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedJourney("Account Opening")}>
                  Account Opening
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedJourney("Transaction Monitoring")}>
                  Transaction Monitoring
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedJourney("Identity Verification")}>
                  Identity Verification
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Journey</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCases.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.id}</TableCell>
                    <TableCell>{c.customer}</TableCell>
                    <TableCell>{c.journey}</TableCell>
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
                        {c.riskLevel} Risk
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={c.statusColor}>{c.status}</Badge>
                    </TableCell>
                    <TableCell>{c.date}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              Review Case
                            </DropdownMenuItem>
                            <DropdownMenuItem>Mark as Approved</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Rejected</DropdownMenuItem>
                            <DropdownMenuItem>Escalate</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          asChild
                        >
                          <Link to={`/case-review/${c.id}`}>
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">View case</span>
                          </Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="link-analysis">
          <CasesLinkAnalysis cases={sampleCases} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
