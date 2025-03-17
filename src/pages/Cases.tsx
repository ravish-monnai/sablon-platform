
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Cases = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Cases</h1>
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cases Management</CardTitle>
            <CardDescription>Manage and review cases in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <p>No active cases found.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Cases
