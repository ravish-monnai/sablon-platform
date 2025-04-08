
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
        <div className="mt-4 space-y-3">
          <Button variant="outline" size="sm" className="w-full flex items-center justify-start gap-2">
            <Bot className="h-4 w-4" />
            Deploy a new agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GetStartedCard;
