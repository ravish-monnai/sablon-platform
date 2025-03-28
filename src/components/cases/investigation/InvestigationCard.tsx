
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InvestigationCardProps { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  onStart: () => void;
}

const InvestigationCard: React.FC<InvestigationCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  onStart
}) => (
  <Card className="border border-gray-200 hover:border-primary/50 transition-all">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-lg font-medium">{title}</CardTitle>
      <Icon className="h-5 w-5 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Button onClick={onStart} className="w-full">Start Investigation</Button>
    </CardContent>
  </Card>
);

export default InvestigationCard;
