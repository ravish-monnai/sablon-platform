
import { useState, useMemo } from 'react';
import { CaseItem, allCases } from '@/types/cases';
import { bankStatementCases } from '@/types/mockData/bankStatementCases';
import { indianBankStatementCases } from '@/types/mockData/indianBankStatementCases';
import { usaBankStatementCases } from '@/types/mockData/usaBankStatementCases';
import { mexicoBankStatementCases } from '@/types/mockData/mexicoBankStatementCases';
import { indonesiaBankStatementCases } from '@/types/mockData/indonesiaBankStatementCases';
import { philippinesBankStatementCases } from '@/types/mockData/philippinesBankStatementCases';

interface UseCaseFilteringProps {
  selectedMarket: string;
}

interface UseCaseFilteringResult {
  filterType: string;
  setFilterType: (type: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCases: CaseItem[];
  allBankStatementCases: CaseItem[];
}

export const useCaseFiltering = ({ selectedMarket }: UseCaseFilteringProps): UseCaseFilteringResult => {
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine all bank statement cases
  const allBankStatementCases = useMemo(() => {
    return [
      ...bankStatementCases, 
      ...indianBankStatementCases,
      ...usaBankStatementCases,
      ...mexicoBankStatementCases,
      ...indonesiaBankStatementCases,
      ...philippinesBankStatementCases
    ];
  }, []);

  const filteredCases = useMemo(() => {
    // First filter by type
    let cases = filterType === "all" 
      ? allCases 
      : filterType === "bank-statement" 
        ? allBankStatementCases
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
  }, [filterType, selectedMarket, searchQuery, allBankStatementCases]);

  return {
    filterType,
    setFilterType,
    searchQuery,
    setSearchQuery,
    filteredCases,
    allBankStatementCases
  };
};
