
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"

const Models = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Models</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Model
        </Button>
      </div>
      
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Credit Risk Model</CardTitle>
            <CardDescription>Predicts credit default risk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Type:</span>
              <span className="font-medium">Classification</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Accuracy:</span>
              <span className="font-medium">92.4%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last trained:</span>
              <span className="font-medium">3 days ago</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Fraud Detection Model</CardTitle>
            <CardDescription>Identifies fraudulent transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Type:</span>
              <span className="font-medium">Binary Classification</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Accuracy:</span>
              <span className="font-medium">96.7%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last trained:</span>
              <span className="font-medium">1 week ago</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Customer Segmentation</CardTitle>
            <CardDescription>Segments customers based on behavior</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Type:</span>
              <span className="font-medium">Clustering</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Silhouette Score:</span>
              <span className="font-medium">0.78</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last trained:</span>
              <span className="font-medium">2 weeks ago</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Models
