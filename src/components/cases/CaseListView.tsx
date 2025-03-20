
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Filter } from "lucide-react";
import CaseListTable from "@/components/cases/CaseListTable";
import CaseFilters from "@/components/cases/CaseFilters";
import { CaseItem } from "@/types/cases";
import CaseDetailView from "@/components/cases/CaseDetailView";

interface CaseListViewProps {
  filteredCases: CaseItem[];
  filterType: string;
  setFilterType: (type: string) => void;
  setSearchQuery: (query: string) => void;
  onViewCase: (caseId: string) => void;
  onActionCase: (caseData: CaseItem) => void;
}

const CaseListView: React.FC<CaseListViewProps> = ({
  filteredCases,
  filterType,
  setFilterType,
  setSearchQuery,
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
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <CardTitle className="text-xl">All Cases</CardTitle>
            <CardDescription>
              Review and manage cases that require attention
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
          onViewCase={caseId => handleViewCase(caseId)} 
          onActionCase={onActionCase} 
        />
      </CardContent>
    </Card>
  );
};

export default CaseListView;
