
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Network } from "lucide-react";
import UserNetworkGraph from "@/components/cases/UserNetworkGraph";

interface CaseNetworkTabProps {
  caseData: any;
}

const CaseNetworkTab = ({ caseData }: CaseNetworkTabProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <Network className="h-5 w-5 mr-2 text-[#9b87f5]" />
          <CardTitle className="text-lg">User Network Analysis</CardTitle>
        </div>
        <CardDescription>
          Connections between this user and other entities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium">Connection Graph</h3>
              <p className="text-sm text-muted-foreground">Visualizing how this user is connected to other entities</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                <span>Good Users</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                <span>Bad Users</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                <span>Current User</span>
              </div>
            </div>
          </div>
          <div className="border rounded-md p-1 mt-3 bg-gray-50">
            <UserNetworkGraph caseData={caseData} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseNetworkTab;
