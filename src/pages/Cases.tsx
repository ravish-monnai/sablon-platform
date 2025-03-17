
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Check, X, Eye, Shield, Filter, ArrowUpDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table"
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Generate AI journey names
const journeys = [
  "Account Opening", 
  "Transaction Monitoring", 
  "Identity Verification", 
  "Risk Assessment",
  "Fraud Detection"
]

// Generate 100 cases with random data but fixed pattern distribution
const generateCases = () => {
  const cases = []
  const riskLevels = ["Low", "Medium", "High", "Critical"]
  const statuses = ["Pending Review", "Approved", "Rejected"]
  const statusColors = {
    "Pending Review": "bg-amber-100 text-amber-800",
    "Approved": "bg-green-100 text-green-800",
    "Rejected": "bg-red-100 text-red-800"
  }
  
  for (let i = 1; i <= 100; i++) {
    const journeyIndex = Math.floor(i / 20) % journeys.length // Distribute evenly across journeys
    const journey = journeys[journeyIndex]
    
    const riskIndex = Math.floor(Math.random() * 4)
    const riskLevel = riskLevels[riskIndex]
    
    // Calculate risk score based on risk level
    let riskScore
    if (riskLevel === "Low") riskScore = Math.floor(Math.random() * 30) + 10
    else if (riskLevel === "Medium") riskScore = Math.floor(Math.random() * 20) + 40
    else if (riskLevel === "High") riskScore = Math.floor(Math.random() * 20) + 65
    else riskScore = Math.floor(Math.random() * 15) + 85
    
    // Status is more likely to be pending for high risk, approved for low risk
    let statusProbability
    if (riskLevel === "Low") statusProbability = [0.2, 0.7, 0.1]
    else if (riskLevel === "Medium") statusProbability = [0.4, 0.4, 0.2]
    else if (riskLevel === "High") statusProbability = [0.6, 0.2, 0.2]
    else statusProbability = [0.7, 0.05, 0.25]
    
    const rand = Math.random()
    let statusIndex = 0
    let sum = statusProbability[0]
    
    while (rand > sum && statusIndex < statusProbability.length - 1) {
      statusIndex++
      sum += statusProbability[statusIndex]
    }
    
    const status = statuses[statusIndex]
    
    cases.push({
      id: `FR-2023-${1000 + i}`,
      customer: `Customer ${i}`,
      journey,
      riskLevel,
      riskScore,
      status,
      statusColor: statusColors[status],
      date: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0]
    })
  }
  
  return cases
}

const allCases = generateCases()

const Cases = () => {
  const [activeJourney, setActiveJourney] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })
  const casesPerPage = 10
  
  // Filter cases by journey and status
  const filteredCases = allCases.filter(c => {
    const journeyMatch = activeJourney === "all" || c.journey === activeJourney
    const statusMatch = statusFilter === "all" || c.status === statusFilter
    return journeyMatch && statusMatch
  })
  
  // Sort cases
  const sortedCases = [...filteredCases].sort((a, b) => {
    if (!sortConfig.key) return 0
    
    if (sortConfig.key === "riskScore") {
      return sortConfig.direction === "ascending" 
        ? a.riskScore - b.riskScore
        : b.riskScore - a.riskScore
    }
    
    if (sortConfig.key === "date") {
      return sortConfig.direction === "ascending" 
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    }
    
    // Default string comparison
    return sortConfig.direction === "ascending" 
      ? a[sortConfig.key].localeCompare(b[sortConfig.key])
      : b[sortConfig.key].localeCompare(a[sortConfig.key])
  })
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedCases.length / casesPerPage)
  const indexOfLastCase = currentPage * casesPerPage
  const indexOfFirstCase = indexOfLastCase - casesPerPage
  const currentCases = sortedCases.slice(indexOfFirstCase, indexOfLastCase)
  
  // Handle sorting
  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }
  
  // Count cases per journey
  const journeyCounts = journeys.reduce((acc, journey) => {
    acc[journey] = allCases.filter(c => c.journey === journey).length
    return acc
  }, {})
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Fraud Review Cases</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cases</SelectItem>
              <SelectItem value="Pending Review">Pending Review</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <Tabs defaultValue="all" onValueChange={setActiveJourney}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">
            All Cases ({allCases.length})
          </TabsTrigger>
          {journeys.map(journey => (
            <TabsTrigger key={journey} value={journey}>
              {journey} ({journeyCounts[journey]})
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>
                  <div className="flex items-center cursor-pointer" onClick={() => requestSort('journey')}>
                    Journey
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center cursor-pointer" onClick={() => requestSort('riskScore')}>
                    Risk Score
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center cursor-pointer" onClick={() => requestSort('status')}>
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center cursor-pointer" onClick={() => requestSort('date')}>
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentCases.map((caseItem) => (
                <TableRow key={caseItem.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-[#9b87f5]" />
                      {caseItem.id}
                    </div>
                  </TableCell>
                  <TableCell>{caseItem.customer}</TableCell>
                  <TableCell>{caseItem.journey}</TableCell>
                  <TableCell>
                    <span className={`rounded-full px-2 py-1 text-xs ${
                      caseItem.riskScore >= 80 ? "bg-red-100 text-red-800" :
                      caseItem.riskScore >= 60 ? "bg-amber-100 text-amber-800" :
                      caseItem.riskScore >= 40 ? "bg-yellow-100 text-yellow-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {caseItem.riskScore}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`rounded-full px-2 py-1 text-xs ${caseItem.statusColor}`}>
                      {caseItem.status}
                    </span>
                  </TableCell>
                  <TableCell>{caseItem.date}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {caseItem.status === "Pending Review" && (
                        <>
                          <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="border-red-500 text-red-600 hover:bg-red-50">
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = i + 1
                if (totalPages > 5 && currentPage > 3) {
                  pageNum = currentPage - 3 + i
                  if (pageNum > totalPages) pageNum = totalPages - (4 - i)
                }
                
                return (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      isActive={currentPage === pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TabsContent>
        
        {journeys.map(journey => (
          <TabsContent key={journey} value={journey}>
            <Card>
              <CardHeader>
                <CardTitle>{journey} Cases</CardTitle>
                <CardDescription>
                  Review all {journey.toLowerCase()} fraud cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Case ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>
                        <div className="flex items-center cursor-pointer" onClick={() => requestSort('riskScore')}>
                          Risk Score
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center cursor-pointer" onClick={() => requestSort('status')}>
                          Status
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center cursor-pointer" onClick={() => requestSort('date')}>
                          Date
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentCases.map((caseItem) => (
                      <TableRow key={caseItem.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Shield className="h-4 w-4 mr-2 text-[#9b87f5]" />
                            {caseItem.id}
                          </div>
                        </TableCell>
                        <TableCell>{caseItem.customer}</TableCell>
                        <TableCell>
                          <span className={`rounded-full px-2 py-1 text-xs ${
                            caseItem.riskScore >= 80 ? "bg-red-100 text-red-800" :
                            caseItem.riskScore >= 60 ? "bg-amber-100 text-amber-800" :
                            caseItem.riskScore >= 40 ? "bg-yellow-100 text-yellow-800" :
                            "bg-green-100 text-green-800"
                          }`}>
                            {caseItem.riskScore}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`rounded-full px-2 py-1 text-xs ${caseItem.statusColor}`}>
                            {caseItem.status}
                          </span>
                        </TableCell>
                        <TableCell>{caseItem.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            {caseItem.status === "Pending Review" && (
                              <>
                                <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
                                  <Check className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm" className="border-red-500 text-red-600 hover:bg-red-50">
                                  <X className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default Cases
