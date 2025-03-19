
import { Execution } from "./ExecutionTableRow";

export const getSampleExecutions = (): Execution[] => [
  {
    id: "BSA-2023-10-01",
    customer: "Rahul Sharma",
    bank: "HDFC Bank",
    date: "October 1, 2023",
    status: "success"
  },
  {
    id: "BSA-2023-09-15",
    customer: "Priya Patel",
    bank: "SBI Bank",
    date: "September 15, 2023",
    status: "success"
  },
  {
    id: "BSA-2023-09-12",
    customer: "Vivek Singh",
    bank: "ICICI Bank",
    date: "September 12, 2023",
    status: "failure"
  },
  {
    id: "BSA-2023-09-08",
    customer: "Ananya Desai",
    bank: "Axis Bank",
    date: "September 8, 2023",
    status: "failure"
  },
  {
    id: "BSA-2023-09-05",
    customer: "Ravi Kumar",
    bank: "Yes Bank",
    date: "September 5, 2023",
    status: "success"
  }
];
