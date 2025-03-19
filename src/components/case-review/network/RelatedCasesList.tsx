
import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Workflow } from "lucide-react";
import RelatedCaseCard from "./RelatedCaseCard";

interface RelatedCase {
  id: string;
  customer: string;
  similarity: number;
  riskLevel: string;
  connections: string[];
}

interface RelatedCasesListProps {
  relatedCases: RelatedCase[];
  caseId: string;
}

const RelatedCasesList: React.FC<RelatedCasesListProps> = ({ relatedCases, caseId }) => {
  return (
    <div className="space-y-3">
      <div className="bg-amber-50 border border-amber-100 rounded-md p-3 text-sm mb-4">
        <div className="flex items-center mb-2">
          <Database className="h-4 w-4 text-amber-500 mr-2" />
          <span className="font-medium">AI Link Analysis Results</span>
        </div>
        <p className="text-muted-foreground">
          The AI has identified {relatedCases.length} potentially related cases based on pattern analysis. 
          These cases share common attributes, behaviors, or connections with the current case.
        </p>
      </div>
      
      <h3 className="font-medium text-sm">Related Cases by Similarity</h3>
      
      {relatedCases.map((relatedCase) => (
        <RelatedCaseCard key={relatedCase.id} relatedCase={relatedCase} />
      ))}
      
      <div className="bg-gray-50 border rounded-md p-4 text-center">
        <h4 className="text-sm font-medium mb-2">AI Analysis Summary</h4>
        <p className="text-xs text-muted-foreground">
          The cases above share significant similarities with case {caseId} and may be part of a coordinated pattern.
          Consider reviewing these cases together for a more comprehensive investigation.
        </p>
        <div className="mt-3">
          <Button size="sm" className="bg-[#9b87f5] hover:bg-[#8a70f2]">
            <Workflow className="h-4 w-4 mr-1" />
            Process Cases as Group
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RelatedCasesList;
