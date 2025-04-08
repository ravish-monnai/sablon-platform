
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Database } from "lucide-react";

interface GetStartedCardProps {
  className?: string;
}

const GetStartedCard: React.FC<GetStartedCardProps> = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Getting Started</CardTitle>
        <CardDescription>Resources to help you get started</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-3">
          <li>Create a new AI Journey</li>
          <li>Deploy a new agent</li>
          <li>Integrate new data sources</li>
          <li>Review risk models</li>
        </ul>
        <div className="mt-4 space-y-3">
          <Button variant="outline" size="sm" className="w-full flex items-center justify-start gap-2">
            <Bot className="h-4 w-4" />
            Create a new AI Journey
          </Button>
          <Button variant="outline" size="sm" className="w-full flex items-center justify-start gap-2">
            <Bot className="h-4 w-4" />
            Deploy a new agent
          </Button>
          <Button variant="outline" size="sm" className="w-full flex items-center justify-start gap-2">
            <Database className="h-4 w-4" />
            Integrate new data sources
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GetStartedCard;
