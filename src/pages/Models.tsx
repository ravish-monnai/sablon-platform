
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Brain, ChartLine, ChartBar } from "lucide-react";
import ModelConfigDialog from "@/components/models/ModelConfigDialog";

const Models = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState({
    name: "",
    type: ""
  });

  const handleModelClick = (name: string, type: string) => {
    setSelectedModel({
      name,
      type
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Models</h1>
        <Button onClick={() => {
          setSelectedModel({ name: "New Model", type: "binary" });
          setIsDialogOpen(true);
        }}>
          <Plus className="mr-2 h-4 w-4" /> Add Model
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Models</TabsTrigger>
          <TabsTrigger value="my-models">My Models</TabsTrigger>
          <TabsTrigger value="shared">Shared With Me</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <Separator className="my-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleModelClick("Fraud Risk Model", "binary")}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-monnai-pink" />
                    Fraud Risk Model
                  </CardTitle>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                </div>
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
                <div className="flex justify-between text-sm mb-2">
                  <span>Last trained:</span>
                  <span className="font-medium">1 week ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Owner:</span>
                  <span className="font-medium">Risk Team</span>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleModelClick("Underwriting Model", "regression")}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <ChartLine className="mr-2 h-5 w-5 text-monnai-blue" />
                    Underwriting Model
                  </CardTitle>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                </div>
                <CardDescription>Predicts credit default risk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-2">
                  <span>Type:</span>
                  <span className="font-medium">Regression</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>AUC:</span>
                  <span className="font-medium">0.92</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Last trained:</span>
                  <span className="font-medium">2 weeks ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Owner:</span>
                  <span className="font-medium">Credit Team</span>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleModelClick("Collections Optimization Model", "multiclass")}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <ChartBar className="mr-2 h-5 w-5 text-monnai-yellow" />
                    Collections Optimization Model
                  </CardTitle>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                </div>
                <CardDescription>Optimizes collections strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-2">
                  <span>Type:</span>
                  <span className="font-medium">Multi-class Classification</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>F1 Score:</span>
                  <span className="font-medium">0.88</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Last trained:</span>
                  <span className="font-medium">3 weeks ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Owner:</span>
                  <span className="font-medium">Collections Team</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="my-models">
          <div className="flex flex-col items-center justify-center h-40 border border-dashed rounded-md">
            <p className="text-gray-500 mb-4">You don't have any custom models yet</p>
            <Button variant="outline" onClick={() => {
              setSelectedModel({ name: "New Model", type: "binary" });
              setIsDialogOpen(true);
            }}>
              <Plus className="mr-2 h-4 w-4" /> Create Model
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="shared">
          <div className="flex flex-col items-center justify-center h-40 border border-dashed rounded-md">
            <p className="text-gray-500 mb-4">No models have been shared with you</p>
            <Button variant="outline">Request Access</Button>
          </div>
        </TabsContent>
      </Tabs>

      <ModelConfigDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
        modelName={selectedModel.name}
        modelType={selectedModel.type}
      />
    </div>
  );
};

export default Models;
