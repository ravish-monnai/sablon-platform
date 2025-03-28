
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { CaseItem } from "@/types/cases";
import { useCaseFiltering } from "@/hooks/useCaseFiltering";
import CaseActionDialog from "@/components/cases/CaseActionDialog";
import CaseListView from "@/components/cases/CaseListView";
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
    <div className="container mx-auto p-6 bg-gray-50">
      <CasesHeader />

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white shadow-sm border border-gray-100 rounded-lg">
          <TabsTrigger 
            value="list" 
            className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
          >
            Case List
          </TabsTrigger>
          <TabsTrigger 
            value="manual-investigation" 
            className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
          >
            Manual Investigation
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4 mt-4">
          <CaseListView 
            filteredCases={filteredCases}
            filterType={filterType}
            setFilterType={setFilterType}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            onViewCase={handleCaseView}
            onActionCase={handleCaseAction}
          />
          
          <BankStatementAnalyzer />
        </TabsContent>
        
        <TabsContent value="manual-investigation" className="mt-4">
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
