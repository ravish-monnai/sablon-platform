
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { CaseItem } from "@/types/cases";
import { useCaseFiltering } from "@/hooks/useCaseFiltering";
import CaseActionDialog from "@/components/cases/CaseActionDialog";
import CaseListView from "@/components/cases/CaseListView";
import NetworkAnalysisView from "@/components/cases/NetworkAnalysisView";
import CasesHeader from "@/components/cases/CasesHeader";
import BankStatementAnalyzer from "@/components/cases/BankStatementAnalyzer";
import ManualInvestigationView from "@/components/cases/ManualInvestigationView";

const Cases = () => {
  const navigate = useNavigate();
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [isActionDialogOpen, setIsActionDialogOpen] = useState(false);
  
  const { 
    filterType, 
    setFilterType, 
    searchQuery, 
    setSearchQuery, 
    filteredCases 
  } = useCaseFiltering({ selectedMarket: 'Global' });

  const handleCaseAction = (caseData: CaseItem) => {
    setSelectedCase(caseData);
    setIsActionDialogOpen(true);
  };

  const handleCaseView = (caseId: string) => {
    navigate(`/case-review/${caseId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <CasesHeader />

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="list">Case List</TabsTrigger>
          <TabsTrigger value="network">Network Analysis</TabsTrigger>
          <TabsTrigger value="manual-investigation">Manual Investigation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4">
          <CaseListView 
            filteredCases={filteredCases}
            filterType={filterType}
            setFilterType={setFilterType}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            onViewCase={handleViewCase}
            onActionCase={handleCaseAction}
          />
          
          <BankStatementAnalyzer />
        </TabsContent>
        
        <TabsContent value="network">
          <NetworkAnalysisView />
        </TabsContent>
        
        <TabsContent value="manual-investigation">
          <ManualInvestigationView />
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
