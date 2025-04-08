
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Database, Plus, Network } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GetStartedCardProps {
  className?: string;
}

const GetStartedCard: React.FC<GetStartedCardProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleCreateJourney = () => {
    navigate("/ai-journeys?tab=workflow");
  };

  const handleAddDataSource = () => {
    navigate("/data");
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Getting Started</CardTitle>
        <CardDescription>Resources to help you get started</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-4 space-y-3">
          <Button variant="outline" size="sm" className="w-full flex items-center justify-start gap-2">
            <Bot className="h-4 w-4" />
            Deploy a new agent
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center justify-start gap-2"
            onClick={handleCreateJourney}
          >
            <Plus className="h-4 w-4" />
            Create a new journey
          </Button>

          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center justify-start gap-2"
            onClick={handleAddDataSource}
          >
            <Database className="h-4 w-4" />
            Integrate a new data source
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GetStartedCard;
