
// This file re-exports all case types and data from their respective files
import { CaseItem } from "./caseTypes";
import { bankStatementCases } from "./mockData/bankStatementCases";
import { indianBankStatementCases } from "./mockData/indianBankStatementCases";
import { usaBankStatementCases } from "./mockData/usaBankStatementCases";
import { mexicoBankStatementCases } from "./mockData/mexicoBankStatementCases";
import { indonesiaBankStatementCases } from "./mockData/indonesiaBankStatementCases";
import { philippinesBankStatementCases } from "./mockData/philippinesBankStatementCases";
import { otherCases } from "./mockData/otherCases";

// Create a new file specifically for US cases
export const unitedStatesBankStatementCases: CaseItem[] = [
  ...bankStatementCases.filter(c => c.market === "United States"),
  ...usaBankStatementCases
];

// Combine all cases for convenience
export const allCases: CaseItem[] = [
  ...bankStatementCases,
  ...indianBankStatementCases,
  ...usaBankStatementCases,
  ...mexicoBankStatementCases,
  ...indonesiaBankStatementCases,
  ...philippinesBankStatementCases,
  ...otherCases
];

// Re-export everything
export type { CaseItem };
export { 
  bankStatementCases, 
  indianBankStatementCases,
  usaBankStatementCases,
  mexicoBankStatementCases,
  indonesiaBankStatementCases,
  philippinesBankStatementCases,
  otherCases 
};
