
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LinkStatus } from "@/components/ui/link-status"
import { Button } from "@/components/ui/button"
import { Plus, Download, Filter, RefreshCw } from "lucide-react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const Transactions = () => {
  // Sample transactions data
  const transactions = [
    { id: "TRX-001", date: "2023-10-15", amount: "$120.50", status: "Completed", risk: "Low" },
    { id: "TRX-002", date: "2023-10-14", amount: "$75.20", status: "Completed", risk: "Medium" },
    { id: "TRX-003", date: "2023-10-13", amount: "$200.00", status: "Pending", risk: "High" },
    { id: "TRX-004", date: "2023-10-12", amount: "$50.00", status: "Failed", risk: "Very High" },
    { id: "TRX-005", date: "2023-10-11", amount: "$300.75", status: "Completed", risk: "Low" },
  ]
  
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>
      <Separator className="my-6" />
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" /> Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-1" /> Refresh
          </Button>
        </div>
        <div className="flex gap-2">
          <LinkStatus 
            href="/transactions/export" 
            variant="outline" 
            size="sm"
            isActive={false}
            tooltip="Export transactions feature is coming soon"
          >
            <Download className="h-4 w-4 mr-1" /> Export
          </LinkStatus>
          <LinkStatus 
            href="/transactions/new" 
            variant="default" 
            size="sm"
            isActive={true}
            tooltip="Create a new transaction"
          >
            <Plus className="h-4 w-4 mr-1" /> New Transaction
          </LinkStatus>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>View and manage transaction records</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">
                    <LinkStatus 
                      href={`/transactions/${tx.id}`} 
                      variant="link"
                      isActive={tx.id === "TRX-001"}
                      tooltip={tx.id === "TRX-001" ? "View transaction details" : "Transaction details coming soon"}
                      showStatus={false}
                    >
                      {tx.id}
                    </LinkStatus>
                  </TableCell>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.status === "Completed" ? "bg-green-100 text-green-800" :
                      tx.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {tx.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.risk === "Low" ? "bg-green-100 text-green-800" :
                      tx.risk === "Medium" ? "bg-blue-100 text-blue-800" :
                      tx.risk === "High" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {tx.risk}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <LinkStatus 
                        href={`/transactions/${tx.id}/edit`} 
                        variant="ghost" 
                        size="sm"
                        isActive={false}
                        tooltip="Edit transaction feature coming soon"
                      >
                        Edit
                      </LinkStatus>
                      <LinkStatus 
                        href={`/transactions/${tx.id}/review`} 
                        variant="ghost" 
                        size="sm"
                        isActive={tx.id === "TRX-001"}
                        tooltip={tx.id === "TRX-001" ? "Review this transaction" : "Review feature coming soon"}
                      >
                        Review
                      </LinkStatus>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions
