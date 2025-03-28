
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, AlertCircle, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SearchFormProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  isAnalyzing: boolean;
  investigationType: string;
}

const SearchForm: React.FC<SearchFormProps> = ({
  query,
  setQuery,
  handleSearch,
  isAnalyzing,
  investigationType
}) => {
  // Generate placeholders based on investigation type
  const getPlaceholder = () => {
    switch (investigationType) {
      case "risk-analysis":
        return "E.g., Check risk score for phone +919512657393 and email ravishp@gmail.com";
      case "identity-verification":
        return "E.g., Verify identity of Sarah Johnson with National ID 876543210";
      case "reachability":
        return "E.g., Verify reachability of +447700900123 and find alternate contacts";
      default:
        return "Enter your investigation query...";
    }
  };

  // Get a badge color based on investigation type
  const getBadgeVariant = () => {
    switch (investigationType) {
      case "risk-analysis":
        return "destructive";
      case "identity-verification":
        return "default";
      case "reachability":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <form onSubmit={handleSearch} className="space-y-3">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="investigation-query" className="text-sm font-medium flex items-center gap-2">
            <span>Enter your investigation query</span>
            <Badge variant={getBadgeVariant()} className="ml-2 text-xs">
              {investigationType === "risk-analysis" 
                ? "Risk Analysis" 
                : investigationType === "identity-verification"
                ? "Identity Verification"
                : "Reachability Enrichment"}
            </Badge>
          </label>
        </div>
        <div className="relative">
          <Input
            id="investigation-query"
            placeholder={getPlaceholder()}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-24 pl-10 py-6 text-base"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="h-5 w-5" />
          </div>
          <Button 
            type="submit" 
            className="absolute right-1 top-1/2 -translate-y-1/2"
            disabled={isAnalyzing || !query.trim()}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>Investigate</>
            )}
          </Button>
        </div>
      </div>
      <div className="flex items-center text-xs text-muted-foreground">
        <AlertCircle className="h-3 w-3 mr-1" />
        <span>
          {investigationType === "risk-analysis" 
            ? "Provide phone numbers, emails, IP addresses, or device IDs for risk analysis" 
            : investigationType === "identity-verification"
            ? "Enter name, DOB, ID numbers, and address details for verification against trusted sources"
            : "Supply phone, email, or address to verify reachability and find alternative contacts"}
        </span>
      </div>
    </form>
  );
};

export default SearchForm;
