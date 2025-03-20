
import React from "react";
import { Filter } from "lucide-react";
import { 
  SearchFilter, 
  SelectFilter, 
  FilterGroup,
  FilterOption
} from "@/components/filters";

interface CaseFiltersProps {
  filterType: string;
  onFilterChange: (value: string) => void;
  onSearchChange?: (value: string) => void;
  searchValue?: string;
}

const CaseFilters: React.FC<CaseFiltersProps> = ({ 
  filterType, 
  onFilterChange, 
  onSearchChange,
  searchValue = ""
}) => {
  const filterOptions: FilterOption[] = [
    { value: "all", label: "All Cases" },
    { value: "bank-statement", label: "Bank Statement" },
    { value: "transaction", label: "Transaction" },
    { value: "kyc", label: "KYC" }
  ];

  return (
    <FilterGroup>
      <SearchFilter 
        placeholder="Search cases..." 
        onSearchChange={onSearchChange}
        value={searchValue}
      />
      <SelectFilter
        options={filterOptions}
        value={filterType}
        onValueChange={onFilterChange}
        icon={Filter}
        placeholder="Filter cases"
      />
    </FilterGroup>
  );
};

export default CaseFilters;
