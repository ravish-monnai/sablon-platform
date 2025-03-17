
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Transactions = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>View and manage transaction records</CardDescription>
          </CardHeader>
          <CardContent>
            <p>No transactions found.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Transactions
