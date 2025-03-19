
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface PlaceholderTabProps {
  value: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const PlaceholderTab: React.FC<PlaceholderTabProps> = ({
  value,
  icon,
  title,
  description,
  buttonText
}) => {
  return (
    <TabsContent value={value} className="space-y-4 pt-4">
      <Card className="border-dashed">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-4 text-center">
            <div className="h-10 w-10 text-muted-foreground mb-2">
              {icon}
            </div>
            <h3 className="text-lg font-medium mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <Button variant="outline" className="w-full max-w-xs">{buttonText}</Button>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default PlaceholderTab;
