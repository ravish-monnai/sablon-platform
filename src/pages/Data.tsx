
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Data = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Data</h1>
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Data Sources</CardTitle>
            <CardDescription>Manage your data connections and sources</CardDescription>
          </CardHeader>
          <CardContent>
            <p>No data sources connected.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Data
