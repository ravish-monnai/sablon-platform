
import React from "react";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CaseFiltersProps {
  filterType: string;
  onFilterChange: (value: string) => void;
  onSearchChange?: (value: string) => void;
}

const CaseFilters: React.FC<CaseFiltersProps> = ({ 
  filterType, 
  onFilterChange, 
  onSearchChange 
}) => {
  return (
    <div className="flex gap-2">
      <div className="relative w-60">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search cases..." 
          className="pl-8" 
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
        />
      </div>
      <Select value={filterType} onValueChange={onFilterChange}>
        <SelectTrigger className="w-40">
          <div className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter cases" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Cases</SelectItem>
          <SelectItem value="bank-statement">Bank Statement</SelectItem>
          <SelectItem value="transaction">Transaction</SelectItem>
          <SelectItem value="kyc">KYC</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CaseFilters;
