
export interface CaseItem {
  id: string;
  customer: string;
  bank: string;
  date: string;
  amount: string;
  status: "success" | "failure";
  details: string;
  risk: string;
  decision?: "Approved" | "Rejected" | "Pending Review";
  decisionReason?: string;
}
