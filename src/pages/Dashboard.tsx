
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Dashboard = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">AI Risk Decisioning Platform</h1>
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Overview of your recent activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="font-semibold text-base">Payjoy Fraud Risk Assessment - March 2025</h3>
              <div className="space-y-3 text-sm">
                <p>Risk Assessment Summary for Payjoy (March 2025):</p>
                <p>Payjoy processes an average of 7,409 transactions daily with a peak volume of 9,933 transactions.</p>
                
                <h4 className="font-medium mt-2">Credit Risk Scoring Summary</h4>
                <p>The average risk score across all customers is 33.09 out of 100. The distribution of customers across risk categories is as follows:</p>
                
                <div className="border rounded-md overflow-hidden mt-2">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Category</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage of Customers</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">Very Low</td>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">10.79%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">Low</td>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">83.55%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">Medium</td>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">2.30%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">High</td>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">1.89%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">Very High</td>
                        <td className="px-3 py-2 whitespace-nowrap text-xs">0.92%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="mt-2">Based on the credit risk model analysis, we recommend the following actions:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Implement tiered verification requirements based on risk categories:
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>High and Very High risk customers should require additional verification steps</li>
                      <li>Medium risk customers should be monitored more closely</li>
                      <li>Low and Very Low risk customers can proceed with standard verification</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Analytics</CardTitle>
            <CardDescription>Key metrics overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Active Models</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex justify-between">
                <span>AI Journeys</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span>Transactions</span>
                <span className="font-bold">1,243</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Resources to help you get started</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create your first AI Journey</li>
              <li>Deploy an AI Agent</li>
              <li>Connect your data sources</li>
              <li>Review risk models</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
