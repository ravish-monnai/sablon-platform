
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Check, X, Eye, Shield, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Cases = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Fraud Review Cases</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cases</SelectItem>
              <SelectItem value="pending">Pending Review</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between">
              <div>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  Case #FR-2023-0548
                </CardTitle>
                <CardDescription>Account opening - High value transaction</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">Pending Review</span>
                <span className="text-sm font-medium">Risk Score: 62</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Customer Info</h3>
                <p className="text-sm">John Smith</p>
                <p className="text-sm text-muted-foreground">john.smith@example.com</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Flags</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-red-600">• Multiple access locations</span>
                  <span className="text-xs text-red-600">• New device</span>
                  <span className="text-xs text-amber-600">• Unusual transaction amount</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Identity Verification</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-green-600">• Passport verified</span>
                  <span className="text-xs text-green-600">• Email verified</span>
                  <span className="text-xs text-amber-600">• Phone pending</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Data Sources</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-green-600">• Email reputation: Good</span>
                  <span className="text-xs text-amber-600">• Phone data: Limited history</span>
                  <span className="text-xs text-red-600">• Network graph: Suspicious connections</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" /> Review Details
              </Button>
              <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
                <Check className="mr-2 h-4 w-4" /> Approve
              </Button>
              <Button variant="outline" size="sm" className="border-red-500 text-red-600 hover:bg-red-50">
                <X className="mr-2 h-4 w-4" /> Reject
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between">
              <div>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  Case #FR-2023-0547
                </CardTitle>
                <CardDescription>Account modification - Password reset</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">Pending Review</span>
                <span className="text-sm font-medium">Risk Score: 45</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Customer Info</h3>
                <p className="text-sm">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">sarah.j@example.com</p>
                <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Flags</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-amber-600">• Login from new location</span>
                  <span className="text-xs text-amber-600">• Multiple failed attempts</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Identity Verification</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-green-600">• Driver's license verified</span>
                  <span className="text-xs text-green-600">• Email verified</span>
                  <span className="text-xs text-green-600">• Phone verified</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Data Sources</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-green-600">• Email reputation: Excellent</span>
                  <span className="text-xs text-green-600">• Phone data: Consistent history</span>
                  <span className="text-xs text-amber-600">• Network graph: Minor anomalies</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" /> Review Details
              </Button>
              <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
                <Check className="mr-2 h-4 w-4" /> Approve
              </Button>
              <Button variant="outline" size="sm" className="border-red-500 text-red-600 hover:bg-red-50">
                <X className="mr-2 h-4 w-4" /> Reject
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between">
              <div>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  Case #FR-2023-0546
                </CardTitle>
                <CardDescription>New transaction - International transfer</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Rejected</span>
                <span className="text-sm font-medium">Risk Score: 87</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Customer Info</h3>
                <p className="text-sm">Michael Lee</p>
                <p className="text-sm text-muted-foreground">mike.lee@example.com</p>
                <p className="text-sm text-muted-foreground">+1 (555) 456-7890</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Flags</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-red-600">• High-risk country</span>
                  <span className="text-xs text-red-600">• Multiple accounts</span>
                  <span className="text-xs text-red-600">• Unusual transaction pattern</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Identity Verification</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-amber-600">• ID document anomalies</span>
                  <span className="text-xs text-green-600">• Email verified</span>
                  <span className="text-xs text-red-600">• Phone verification failed</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Data Sources</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-amber-600">• Email reputation: Recent creation</span>
                  <span className="text-xs text-red-600">• Phone data: Mismatched location</span>
                  <span className="text-xs text-red-600">• Network graph: Known fraud connections</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" /> Review Details
              </Button>
              <Button variant="outline" size="sm" disabled>
                <AlertTriangle className="mr-2 h-4 w-4" /> Rejected by Fraud Agent
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Cases
