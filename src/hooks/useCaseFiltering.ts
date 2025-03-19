
import { useState, useMemo } from 'react';
import { CaseItem, allCases, bankStatementCases, indianBankStatementCases } from '@/types/cases';

interface UseCaseFilteringProps {
  selectedMarket: string;
}

interface UseCaseFilteringResult {
  filterType: string;
  setFilterType: (type: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCases: CaseItem[];
}

export const useCaseFiltering = ({ selectedMarket }: UseCaseFilteringProps): UseCaseFilteringResult => {
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCases = useMemo(() => {
    // First filter by type
    let cases = filterType === "all" 
      ? allCases 
      : filterType === "bank-statement" 
        ? [...bankStatementCases, ...indianBankStatementCases]
        : allCases.filter(c => c.type.toLowerCase() === filterType);
    
    // Then filter by market
    if (selectedMarket !== 'Global') {
      cases = cases.filter(c => c.market === selectedMarket);
    }
    
    // Then filter by search query if it exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      cases = cases.filter(
        c => c.customer.toLowerCase().includes(query) || 
             c.id.toLowerCase().includes(query) || 
             c.status.toLowerCase().includes(query) ||
             c.alert.toLowerCase().includes(query) ||
             (c.bank && c.bank.toLowerCase().includes(query))
      );
    }
    
    return cases;
  }, [filterType, selectedMarket, searchQuery]);

  return {
    filterType,
    setFilterType,
    searchQuery,
    setSearchQuery,
    filteredCases
  };
};
