
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useMarket } from "@/contexts/MarketContext";
import CaseListTable from "@/components/cases/CaseListTable";
import CaseFilters from "@/components/cases/CaseFilters";
import BankStatementInsights from "@/components/cases/BankStatementInsights";
import CasesLinkAnalysis from "@/components/cases/CasesLinkAnalysis";
import CaseActionDialog from "@/components/cases/CaseActionDialog";
import IndianBankStatementAnalyzer from "@/components/cases/IndianBankStatementAnalyzer";
import { CaseItem } from "@/types/cases";
import { useCaseFiltering } from "@/hooks/useCaseFiltering";

const Cases = () => {
  const navigate = useNavigate();
  const { selectedMarket } = useMarket();
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [isActionDialogOpen, setIsActionDialogOpen] = useState(false);
  
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
    navigate(`/case-review/${caseId}`);
  };

  const showIndianAnalyzer = selectedMarket === 'India' || selectedMarket === 'Global';

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cases</h1>
        <Button>
          <FileText className="mr-2 h-4 w-4" /> Create Manual Case
        </Button>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">Case List</TabsTrigger>
          <TabsTrigger value="network">Network Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                  <CardTitle>All Cases</CardTitle>
                  <CardDescription>
                    {selectedMarket === 'Global' 
                      ? 'Review and manage cases that require attention'
                      : `Review and manage ${selectedMarket} cases that require attention`}
                  </CardDescription>
                </div>
                <CaseFilters 
                  filterType={filterType} 
                  onFilterChange={setFilterType} 
                  onSearchChange={setSearchQuery}
                />
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
          
          {showIndianAnalyzer && selectedMarket === 'India' && <IndianBankStatementAnalyzer />}
          
          {(filterType === "bank-statement" || filterType === "all") && (
            <BankStatementInsights />
          )}
        </TabsContent>
        <TabsContent value="network">
          <Card className="h-[80vh]">
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
