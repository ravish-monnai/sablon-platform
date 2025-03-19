
import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Network } from "lucide-react";

interface RelatedCase {
  id: string;
  customer: string;
  similarity: number;
  riskLevel: string;
  connections: string[];
}

interface RelatedCaseCardProps {
  relatedCase: RelatedCase;
}

const RelatedCaseCard: React.FC<RelatedCaseCardProps> = ({ relatedCase }) => {
  return (
    <Card className="mb-3">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-2">
              <User className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <div className="font-medium">{relatedCase.customer}</div>
              <div className="text-xs text-muted-foreground">{relatedCase.id}</div>
            </div>
          </div>
          <Badge className={`
            ${relatedCase.riskLevel === "High" ? "bg-red-100 text-red-800" : 
              relatedCase.riskLevel === "Medium" ? "bg-amber-100 text-amber-800" : 
              "bg-green-100 text-green-800"}
          `}>
            {relatedCase.riskLevel} Risk
          </Badge>
        </div>
        
        <div className="mt-2">
          <div className="flex justify-between mb-1">
            <span className="text-xs text-muted-foreground">Similarity Score</span>
            <span className="text-xs font-medium">{relatedCase.similarity}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className={`h-1.5 rounded-full ${
                relatedCase.similarity > 80 ? "bg-red-500" : 
                relatedCase.similarity > 70 ? "bg-amber-500" : 
                "bg-blue-500"
              }`} 
              style={{ width: `${relatedCase.similarity}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mt-3">
          <div className="text-xs font-medium mb-1">Connection Points:</div>
          <div className="flex flex-wrap gap-1">
            {relatedCase.connections.map((connection, idx) => (
              <Badge key={idx} variant="outline" className="text-xs font-normal">
                {connection}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-3 flex justify-end gap-2">
          <Button variant="outline" size="sm" className="text-xs h-8">
            View Case
          </Button>
          <Button variant="outline" size="sm" className="text-xs h-8 border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
            <Network className="h-3.5 w-3.5 mr-1" />
            Compare Networks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedCaseCard;
