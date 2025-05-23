import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LinkStatus } from "@/components/ui/link-status"
import { Button } from "@/components/ui/button"
import { Plus, Download, Filter, RefreshCw, Bot, Search, TrendingUp, AlertTriangle, WandSparkles, MousePointerClick, Target, Wallet } from "lucide-react"
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
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts"

const Transactions = () => {
  const [activeJourney, setActiveJourney] = useState("all")
  const [showAIChat, setShowAIChat] = useState(false)
  const [currentAnalysis, setCurrentAnalysis] = useState<string | null>(null)
  const [showAnalysisResult, setShowAnalysisResult] = useState(false)
  const [analysisType, setAnalysisType] = useState<string | null>(null)
  const { toast } = useToast()
  
  // Sample transactions data
  const transactions = [
    { id: "TRX-001", date: "2023-10-15", amount: "$120.50", status: "Completed", risk: "Low", journey: "Account Opening" },
    { id: "TRX-002", date: "2023-10-14", amount: "$75.20", status: "Completed", risk: "Medium", journey: "Transaction Monitoring" },
    { id: "TRX-003", date: "2023-10-13", amount: "$200.00", status: "Pending", risk: "High", journey: "Identity Verification" },
    { id: "TRX-004", date: "2023-10-12", amount: "$50.00", status: "Failed", risk: "Very High", journey: "Risk Assessment" },
    { id: "TRX-005", date: "2023-10-11", amount: "$300.75", status: "Completed", risk: "Low", journey: "Fraud Detection" },
  ]
  
  // Pattern recognition data (example)
  const patternData = [
    { name: 'Mon', transactions: 32, pattern: 'Low' },
    { name: 'Tue', transactions: 38, pattern: 'Low' },
    { name: 'Wed', transactions: 42, pattern: 'Low' },
    { name: 'Thu', transactions: 45, pattern: 'Low' },
    { name: 'Fri', transactions: 65, pattern: 'High' },
    { name: 'Sat', transactions: 30, pattern: 'Low' },
    { name: 'Sun', transactions: 22, pattern: 'Low' },
  ];
  
  // Time pattern data
  const hourlyPatternData = [
    { hour: '6-8 AM', count: 15, pattern: 'Low' },
    { hour: '8-10 AM', count: 28, pattern: 'Medium' },
    { hour: '10-12 PM', count: 42, pattern: 'Medium' },
    { hour: '12-2 PM', count: 76, pattern: 'High' },
    { hour: '2-4 PM', count: 35, pattern: 'Medium' },
    { hour: '4-6 PM', count: 48, pattern: 'Medium' },
    { hour: '6-8 PM', count: 65, pattern: 'High' },
    { hour: '8-10 PM', count: 32, pattern: 'Medium' },
    { hour: '10-12 AM', count: 12, pattern: 'Low' },
  ];
  
  // Value pattern data by journey
  const journeyValuePatternData = [
    { journey: 'Account Opening', avg: 105, pattern: 'Medium' },
    { journey: 'Identity Verification', avg: 182, pattern: 'High' },
    { journey: 'Risk Assessment', avg: 130, pattern: 'Medium' },
    { journey: 'Transaction Monitoring', avg: 68, pattern: 'Low' },
    { journey: 'Fraud Detection', avg: 135, pattern: 'Medium' },
  ];
  
  // Filter transactions by journey
  const filteredTransactions = activeJourney === "all" 
    ? transactions 
    : transactions.filter(tx => tx.journey === activeJourney)
  
  // List of available journeys for filtering
  const journeys = ["Account Opening", "Transaction Monitoring", "Identity Verification", "Risk Assessment", "Fraud Detection"]
  
  // Handle running AI analysis
  const runAIAnalysis = (analysisType: string) => {
    setCurrentAnalysis(analysisType)
    setAnalysisType(analysisType)
    
    // Show loading toast
    toast({
      title: "Running AI Analysis",
      description: `Performing ${analysisType} on transactions...`,
      duration: 2000,
    })
    
    // Simulate analysis completion
    setTimeout(() => {
      setCurrentAnalysis(null)
      setShowAnalysisResult(true)
      
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
  
  const getPatternColor = (pattern: string) => {
    switch(pattern) {
      case 'High': return '#9b87f5';
      case 'Medium': return '#94a3b8';
      case 'Low': return '#cbd5e1';
      default: return '#cbd5e1';
    }
  };
  
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
            {showAnalysisResult && analysisType === "Pattern Recognition" && (
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-[#9b87f5]" />
                    <CardTitle>Pattern Recognition Results</CardTitle>
                  </div>
                  <CardDescription>
                    AI detected patterns in transaction data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <MousePointerClick className="h-4 w-4 mr-1 text-[#9b87f5]" />
                        Day of Week Pattern
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Transactions show a 38% increase on Fridays compared to other weekdays.
                      </p>
                      <div className="h-64 mt-4">
                        <ChartContainer 
                          config={{ 
                            high: { theme: { light: '#9b87f5', dark: '#9b87f5' } },
                            medium: { theme: { light: '#94a3b8', dark: '#94a3b8' } },
                            low: { theme: { light: '#cbd5e1', dark: '#cbd5e1' } }
                          }}
                        >
                          <BarChart data={patternData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="transactions" radius={[4, 4, 0, 0]}>
                              {patternData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getPatternColor(entry.pattern)} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ChartContainer>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <MousePointerClick className="h-4 w-4 mr-1 text-[#9b87f5]" />
                        Time of Day Pattern
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Peak transaction hours occur between 12-2pm and 6-8pm daily.
                      </p>
                      <div className="h-64 mt-4">
                        <ChartContainer 
                          config={{ 
                            high: { theme: { light: '#9b87f5', dark: '#9b87f5' } },
                            medium: { theme: { light: '#94a3b8', dark: '#94a3b8' } },
                            low: { theme: { light: '#cbd5e1', dark: '#cbd5e1' } }
                          }}
                        >
                          <BarChart data={hourlyPatternData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                            <XAxis dataKey="hour" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                              {hourlyPatternData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getPatternColor(entry.pattern)} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ChartContainer>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <MousePointerClick className="h-4 w-4 mr-1 text-[#9b87f5]" />
                        Transaction Value by Journey
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Identity Verification journeys have 73% higher average values than Account Opening journeys.
                      </p>
                      <div className="h-64 mt-4">
                        <ChartContainer 
                          config={{ 
                            high: { theme: { light: '#9b87f5', dark: '#9b87f5' } },
                            medium: { theme: { light: '#94a3b8', dark: '#94a3b8' } },
                            low: { theme: { light: '#cbd5e1', dark: '#cbd5e1' } }
                          }}
                        >
                          <BarChart data={journeyValuePatternData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                            <XAxis dataKey="journey" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="avg" radius={[4, 4, 0, 0]}>
                              {journeyValuePatternData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getPatternColor(entry.pattern)} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ChartContainer>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-md">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="font-medium">AI Assistant Analysis</h3>
                      </div>
                      <p className="text-sm">
                        The pattern analysis shows distinct transaction behaviors across days, times, and journeys. 
                        For detailed insights, consult the AI assistant which can analyze these patterns further.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
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
                {showAnalysisResult ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-[#9b87f5]" />
                        <div>
                          <p className="font-medium">Pattern Recognition</p>
                          <p className="text-xs text-muted-foreground">Completed at {new Date().toLocaleTimeString()}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <p>No recent analyses found.</p>
                    <p className="text-sm">Run an analysis to see results here.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {showAIChat && (
        <div className="w-1/3 border-l border-border pl-4 h-[calc(100vh-10rem)] overflow-hidden">
          <TransactionAIChat 
            onClose={() => setShowAIChat(false)} 
            initialAnalysis={analysisType}
          />
        </div>
      )}
    </div>
  )
}

export default Transactions
