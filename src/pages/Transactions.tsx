
import DashboardTabs from "@/components/dashboard/DashboardTabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, Download } from "lucide-react"
import { Input } from "@/components/ui/input"

const Transactions = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <div className="space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>
      
      <DashboardTabs className="mb-6" />
      <Separator className="my-6" />
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search transactions..." className="pl-10" />
      </div>
      
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Transaction ID</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Risk Score</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">TX-78923</td>
                <td className="py-3 px-4">2023-10-15 14:32</td>
                <td className="py-3 px-4">$12,500.00</td>
                <td className="py-3 px-4">Wire Transfer</td>
                <td className="py-3 px-4">32</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Approved</span></td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">TX-78922</td>
                <td className="py-3 px-4">2023-10-15 13:47</td>
                <td className="py-3 px-4">$4,320.00</td>
                <td className="py-3 px-4">ACH Transfer</td>
                <td className="py-3 px-4">18</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Approved</span></td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">TX-78921</td>
                <td className="py-3 px-4">2023-10-15 11:23</td>
                <td className="py-3 px-4">$35,750.00</td>
                <td className="py-3 px-4">Wire Transfer</td>
                <td className="py-3 px-4">76</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">Manual Review</span></td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">TX-78920</td>
                <td className="py-3 px-4">2023-10-15 10:05</td>
                <td className="py-3 px-4">$950.00</td>
                <td className="py-3 px-4">Credit Card</td>
                <td className="py-3 px-4">12</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Approved</span></td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">TX-78919</td>
                <td className="py-3 px-4">2023-10-15 09:17</td>
                <td className="py-3 px-4">$27,890.00</td>
                <td className="py-3 px-4">Wire Transfer</td>
                <td className="py-3 px-4">89</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Declined</span></td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions
