
// This file re-exports all case types and data from their respective files
import { CaseItem } from "./caseTypes";
import { bankStatementCases } from "./mockData/bankStatementCases";
import { indianBankStatementCases } from "./mockData/indianBankStatementCases";
import { otherCases } from "./mockData/otherCases";

// Combine all cases for convenience
export const allCases: CaseItem[] = [
  ...bankStatementCases,
  ...indianBankStatementCases,
  ...otherCases
];

// Re-export everything
export type { CaseItem };
export { bankStatementCases, indianBankStatementCases, otherCases };
