
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, ArrowUpRight, CheckCircle, AlertTriangle, Calendar, User, DollarSign, Download, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMarket } from "@/contexts/MarketContext";
import CaseListTable from "@/components/cases/CaseListTable";
import CaseFilters from "@/components/cases/CaseFilters";
import CasesLinkAnalysis from "@/components/cases/CasesLinkAnalysis";
import CaseActionDialog from "@/components/cases/CaseActionDialog";
import IndianBankStatementAnalyzer from "@/components/cases/IndianBankStatementAnalyzer";
import { CaseItem } from "@/types/cases";
import { useCaseFiltering } from "@/hooks/useCaseFiltering";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import BankStatementCaseDetail from "@/components/cases/BankStatementCaseDetail";

const Cases = () => {
  const navigate = useNavigate();
  const { selectedMarket } = useMarket();
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [isActionDialogOpen, setIsActionDialogOpen] = useState(false);
  const [isViewingCaseDetail, setIsViewingCaseDetail] = useState(false);
  
  const { 
    filterType, 
    setFilterType, 
    searchQuery, 
    setSearchQuery, 
    filteredCases 
  } = useCaseFiltering({ selectedMarket });

  const handleCaseAction = (caseData: CaseItem) => {
    setSelectedCase(caseData);
    setIsActionDialogOpen(true);
  };

  const handleCaseView = (caseId: string) => {
    // For cases overview, show the detail within the page
    const caseData = filteredCases.find(c => c.id === caseId);
    if (caseData) {
      setSelectedCase(caseData);
      setIsViewingCaseDetail(true);
    } else {
      // If case not found in filtered list, navigate to full detail page
      navigate(`/case-review/${caseId}`);
    }
  };

  const handleBackToList = () => {
    setIsViewingCaseDetail(false);
    setSelectedCase(null);
  };

  // Sample bank statement cases with more detailed information
  const bankStatementCases = filteredCases.filter(c => 
    c.journey?.toLowerCase().includes("bank") && 
    c.journey?.toLowerCase().includes("statement")
  );

  const showIndianAnalyzer = selectedMarket === 'India' || selectedMarket === 'Global';

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cases</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create New Case
        </Button>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">Case List</TabsTrigger>
          <TabsTrigger value="network">Network Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4">
          {isViewingCaseDetail && selectedCase ? (
            <div className="space-y-4">
              <Button variant="outline" onClick={handleBackToList} className="mb-4">
                ← Back to Case List
              </Button>
              <BankStatementCaseDetail 
                caseData={selectedCase} 
                onClose={handleBackToList} 
              />
            </div>
          ) : (
            <>
              <Card className="bg-white shadow-sm border-gray-100">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-xl">All Cases</CardTitle>
                      <CardDescription>
                        {selectedMarket === 'Global' 
                          ? 'Review and manage cases that require attention'
                          : `Review and manage ${selectedMarket} cases that require attention`}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <CaseFilters 
                        filterType={filterType} 
                        onFilterChange={setFilterType} 
                        onSearchChange={setSearchQuery}
                      />
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-1" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CaseListTable 
                    cases={filteredCases} 
                    onViewCase={handleCaseView} 
                    onActionCase={handleCaseAction} 
                  />
                </CardContent>
              </Card>
              
              {/* Bank Statement Cases - Styled like the analyzer view */}
              {bankStatementCases.length > 0 && (
                <Card className="mt-6">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Bank Statement Analysis Cases</CardTitle>
                    <CardDescription>
                      Recent cases from the Bank Statement Analysis journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Case ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Risk Level</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bankStatementCases.map((caseItem) => (
                          <TableRow key={caseItem.id}>
                            <TableCell className="font-medium">{caseItem.id}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                {caseItem.customer}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                {caseItem.date || caseItem.created}
                              </div>
                            </TableCell>
                            <TableCell>
                              {caseItem.riskLevel === "Low" && (
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
                                  <CheckCircle className="h-3 w-3" /> 
                                  Low Risk
                                </Badge>
                              )}
                              {caseItem.riskLevel === "Medium" && (
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 flex items-center gap-1">
                                  <AlertTriangle className="h-3 w-3" /> 
                                  Medium Risk
                                </Badge>
                              )}
                              {(caseItem.riskLevel === "High" || caseItem.riskLevel === "Critical") && (
                                <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
                                  <AlertTriangle className="h-3 w-3" /> 
                                  {caseItem.riskLevel} Risk
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              {caseItem.status.toLowerCase() === "pending review" && (
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                                  Pending
                                </Badge>
                              )}
                              {caseItem.status.toLowerCase() === "approved" && (
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                  Approved
                                </Badge>
                              )}
                              {caseItem.status.toLowerCase() === "rejected" && (
                                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                                  Rejected
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center gap-1"
                                onClick={() => handleCaseView(caseItem.id)}
                              >
                                <FileText className="h-4 w-4" />
                                View Details
                                <ArrowUpRight className="h-4 w-4 ml-1" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
              
              {/* Card view for bank statement cases */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {bankStatementCases.slice(0, 3).map((caseItem) => (
                  <Card key={caseItem.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        {caseItem.status.toLowerCase() === "approved" ? (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
                            <CheckCircle className="h-3 w-3" /> 
                            Approved
                          </Badge>
                        ) : caseItem.status.toLowerCase() === "rejected" ? (
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" /> 
                            {caseItem.riskLevel || "High"} Risk
                          </Badge>
                        ) : (
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 flex items-center gap-1">
                            Pending Review
                          </Badge>
                        )}
                        <Badge variant="outline">Bank Statement</Badge>
                      </div>
                      <CardTitle className="text-lg mt-2">Case #{caseItem.id}</CardTitle>
                      <CardDescription>
                        {caseItem.status.toLowerCase() === "rejected" 
                          ? "Suspicious transaction pattern detected" 
                          : "Income verification assessment"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 py-2">
                        <div>
                          <p className="text-sm text-muted-foreground">Customer</p>
                          <p className="font-medium">{caseItem.customer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Risk Level</p>
                          <p className="font-medium">{caseItem.riskLevel || "Medium"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Date</p>
                          <p className="font-medium">{caseItem.date || caseItem.created}</p>
                        </div>
                      </div>
                    </CardContent>
                    <div className="px-6 pb-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleCaseView(caseItem.id)}
                      >
                        View Analysis Details
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              
              {showIndianAnalyzer && selectedMarket === 'India' && <IndianBankStatementAnalyzer />}
            </>
          )}
        </TabsContent>
        
        <TabsContent value="network">
          <Card className="h-[80vh] bg-white shadow-sm border-gray-100">
            <CardContent className="p-0">
              <CasesLinkAnalysis />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <CaseActionDialog 
        isOpen={isActionDialogOpen} 
        onOpenChange={setIsActionDialogOpen} 
        caseData={selectedCase} 
      />
    </div>
  );
};

export default Cases;
