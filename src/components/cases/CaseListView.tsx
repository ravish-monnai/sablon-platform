
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Filter } from "lucide-react";
import CaseListTable from "@/components/cases/CaseListTable";
import CaseFilters from "@/components/cases/CaseFilters";
import { CaseItem } from "@/types/cases";
import CaseDetailView from "@/components/cases/CaseDetailView";
import { FilterBar, FilterButton } from "@/components/filters";

interface CaseListViewProps {
  filteredCases: CaseItem[];
  filterType: string;
  setFilterType: (type: string) => void;
  setSearchQuery: (query: string) => void;
  searchQuery?: string;
  onViewCase: (caseId: string) => void;
  onActionCase: (caseData: CaseItem) => void;
}

const CaseListView: React.FC<CaseListViewProps> = ({
  filteredCases,
  filterType,
  setFilterType,
  setSearchQuery,
  searchQuery = "",
  onViewCase,
  onActionCase
}) => {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [isViewingCaseDetail, setIsViewingCaseDetail] = useState(false);

  const handleViewCase = (caseId: string) => {
    const caseData = filteredCases.find(c => c.id === caseId);
    if (caseData) {
      setSelectedCase(caseData);
      setIsViewingCaseDetail(true);
    }
  };

  const handleBackToList = () => {
    setIsViewingCaseDetail(false);
    setSelectedCase(null);
  };

  if (isViewingCaseDetail && selectedCase) {
    return <CaseDetailView selectedCase={selectedCase} onBackToList={handleBackToList} />;
  }

  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader className="pb-3 bg-gray-50 rounded-t-lg">
        <FilterBar>
          <div>
            <CardTitle className="text-xl text-gray-800">All Cases</CardTitle>
            <CardDescription className="text-gray-500">
              Review and manage cases that require attention
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <CaseFilters 
              filterType={filterType} 
              onFilterChange={setFilterType} 
              onSearchChange={setSearchQuery}
              searchValue={searchQuery}
            />
            <FilterButton 
              icon={Filter} 
              variant="outline" 
              size="sm" 
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
            >
              Filter
            </FilterButton>
            <FilterButton 
              icon={Download} 
              variant="outline" 
              size="sm" 
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
            >
              Export
            </FilterButton>
          </div>
        </FilterBar>
      </CardHeader>
      <CardContent>
        <CaseListTable 
          cases={filteredCases} 
          onViewCase={caseId => handleViewCase(caseId)} 
          onActionCase={onActionCase} 
        />
      </CardContent>
    </Card>
  );
};

export default CaseListView;
