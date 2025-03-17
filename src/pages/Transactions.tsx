
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LinkStatus } from "@/components/ui/link-status"
import { Button } from "@/components/ui/button"
import { Plus, Download, Filter, RefreshCw, Bot, Search, TrendingUp, AlertTriangle, WandSparkles } from "lucide-react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TransactionAIChat from "@/components/transactions/TransactionAIChat"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

const Transactions = () => {
  const [activeJourney, setActiveJourney] = useState("all")
  const [showAIChat, setShowAIChat] = useState(false)
  const [currentAnalysis, setCurrentAnalysis] = useState<string | null>(null)
  const { toast } = useToast()
  
  // Sample transactions data
  const transactions = [
    { id: "TRX-001", date: "2023-10-15", amount: "$120.50", status: "Completed", risk: "Low", journey: "Account Opening" },
    { id: "TRX-002", date: "2023-10-14", amount: "$75.20", status: "Completed", risk: "Medium", journey: "Transaction Monitoring" },
    { id: "TRX-003", date: "2023-10-13", amount: "$200.00", status: "Pending", risk: "High", journey: "Identity Verification" },
    { id: "TRX-004", date: "2023-10-12", amount: "$50.00", status: "Failed", risk: "Very High", journey: "Risk Assessment" },
    { id: "TRX-005", date: "2023-10-11", amount: "$300.75", status: "Completed", risk: "Low", journey: "Fraud Detection" },
  ]
  
  // Filter transactions by journey
  const filteredTransactions = activeJourney === "all" 
    ? transactions 
    : transactions.filter(tx => tx.journey === activeJourney)
  
  // List of available journeys for filtering
  const journeys = ["Account Opening", "Transaction Monitoring", "Identity Verification", "Risk Assessment", "Fraud Detection"]
  
  // Handle running AI analysis
  const runAIAnalysis = (analysisType: string) => {
    setCurrentAnalysis(analysisType)
    
    // Show loading toast
    toast({
      title: "Running AI Analysis",
      description: `Performing ${analysisType} on transactions...`,
      duration: 2000,
    })
    
    // Simulate analysis completion
    setTimeout(() => {
      setCurrentAnalysis(null)
      
      // Show completion toast
      toast({
        title: "Analysis Complete",
        description: `${analysisType} completed successfully.`,
        duration: 3000,
      })
      
      // Automatically open AI chat with result
      setShowAIChat(true)
    }, 2500)
  }
  
  return (
    <div className="w-full flex">
      <div className={`transition-all duration-300 ${showAIChat ? 'w-2/3 pr-4' : 'w-full'}`}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Transactions</h1>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowAIChat(!showAIChat)}
          >
            <Bot className="h-4 w-4 mr-1" /> {showAIChat ? "Hide Assistant" : "AI Assistant"}
          </Button>
        </div>
        <Separator className="my-4" />
        
        <Tabs defaultValue="list" className="w-full mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="list">Transaction List</TabsTrigger>
            <TabsTrigger value="ai-analysis">AI Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="list">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" /> Filter
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-1" /> Refresh
                </Button>
              </div>
              <div className="flex gap-2">
                <LinkStatus 
                  href="/transactions/export" 
                  variant="outline" 
                  size="sm"
                  isActive={false}
                  tooltip="Export transactions feature is coming soon"
                >
                  <Download className="h-4 w-4 mr-1" /> Export
                </LinkStatus>
                <LinkStatus 
                  href="/transactions/new" 
                  variant="default" 
                  size="sm"
                  isActive={true}
                  tooltip="Create a new transaction"
                >
                  <Plus className="h-4 w-4 mr-1" /> New Transaction
                </LinkStatus>
              </div>
            </div>
            
            <div className="bg-background/50 p-2 rounded-md mb-4 overflow-x-auto">
              <div className="flex gap-2">
                <Badge 
                  variant={activeJourney === "all" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveJourney("all")}
                >
                  All Journeys
                </Badge>
                {journeys.map(journey => (
                  <Badge 
                    key={journey}
                    variant={activeJourney === journey ? "default" : "outline"}
                    className="cursor-pointer whitespace-nowrap"
                    onClick={() => setActiveJourney(journey)}
                  >
                    {journey}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>
                  {activeJourney === "all" 
                    ? "View and manage all transaction records" 
                    : `View ${activeJourney} transactions`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Journey</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTransactions.map((tx) => (
                      <TableRow key={tx.id}>
                        <TableCell className="font-medium">
                          <LinkStatus 
                            href={`/transactions/${tx.id}`} 
                            variant="link"
                            isActive={tx.id === "TRX-001"}
                            tooltip={tx.id === "TRX-001" ? "View transaction details" : "Transaction details coming soon"}
                            showStatus={false}
                          >
                            {tx.id}
                          </LinkStatus>
                        </TableCell>
                        <TableCell>{tx.date}</TableCell>
                        <TableCell>{tx.amount}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{tx.journey}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            tx.status === "Completed" ? "bg-green-100 text-green-800" :
                            tx.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {tx.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            tx.risk === "Low" ? "bg-green-100 text-green-800" :
                            tx.risk === "Medium" ? "bg-blue-100 text-blue-800" :
                            tx.risk === "High" ? "bg-yellow-100 text-yellow-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {tx.risk}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <LinkStatus 
                              href={`/transactions/${tx.id}/edit`} 
                              variant="ghost" 
                              size="sm"
                              isActive={false}
                              tooltip="Edit transaction feature coming soon"
                            >
                              Edit
                            </LinkStatus>
                            <LinkStatus 
                              href={`/transactions/${tx.id}/review`} 
                              variant="ghost" 
                              size="sm"
                              isActive={tx.id === "TRX-001"}
                              tooltip={tx.id === "TRX-001" ? "Review this transaction" : "Review feature coming soon"}
                            >
                              Review
                            </LinkStatus>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="mt-4">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ai-analysis">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Search className="mr-2 h-5 w-5 text-blue-500" />
                    Pattern Recognition
                  </CardTitle>
                  <CardDescription>Identify new transaction patterns and correlations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detect recurring patterns, relationships between transactions, and potential clusters of activity.
                  </p>
                  <Button 
                    onClick={() => runAIAnalysis("Pattern Recognition")}
                    disabled={currentAnalysis !== null}
                    className="w-full"
                  >
                    {currentAnalysis === "Pattern Recognition" ? "Processing..." : "Run Analysis"}
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                    Anomaly Detection
                  </CardTitle>
                  <CardDescription>Identify unusual transaction behavior</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detect outliers, unusual activity, and transactions that deviate from established norms.
                  </p>
                  <Button 
                    onClick={() => runAIAnalysis("Anomaly Detection")}
                    disabled={currentAnalysis !== null}
                    className="w-full"
                  >
                    {currentAnalysis === "Anomaly Detection" ? "Processing..." : "Run Analysis"}
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                    Trend Analysis
                  </CardTitle>
                  <CardDescription>Analyze transaction trends over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Identify emerging trends, seasonal patterns, and long-term changes in transaction behavior.
                  </p>
                  <Button 
                    onClick={() => runAIAnalysis("Trend Analysis")}
                    disabled={currentAnalysis !== null}
                    className="w-full"
                  >
                    {currentAnalysis === "Trend Analysis" ? "Processing..." : "Run Analysis"}
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <WandSparkles className="mr-2 h-5 w-5 text-purple-500" />
                    Forensic Analysis
                  </CardTitle>
                  <CardDescription>Deep investigation of transaction details</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Perform in-depth forensic analysis to uncover hidden connections and potential fraud indicators.
                  </p>
                  <Button 
                    onClick={() => runAIAnalysis("Forensic Analysis")}
                    disabled={currentAnalysis !== null}
                    className="w-full"
                  >
                    {currentAnalysis === "Forensic Analysis" ? "Processing..." : "Run Analysis"}
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Analysis History</CardTitle>
                <CardDescription>Recent AI-powered transaction analyses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-8">
                  <p>No recent analyses found.</p>
                  <p className="text-sm">Run an analysis to see results here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {showAIChat && (
        <div className="w-1/3 border-l border-border pl-4 h-[calc(100vh-10rem)] overflow-hidden">
          <TransactionAIChat onClose={() => setShowAIChat(false)} />
        </div>
      )}
    </div>
  )
}

export default Transactions
