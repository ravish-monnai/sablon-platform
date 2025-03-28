
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, AlertCircle } from "lucide-react";

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
  return (
    <form onSubmit={handleSearch} className="space-y-3">
      <div className="flex flex-col space-y-2">
        <label htmlFor="risk-query" className="text-sm font-medium">
          Enter your investigation query
        </label>
        <div className="relative">
          <Input
            id="risk-query"
            placeholder={
              investigationType === "risk-analysis" 
                ? "Check the risk score of phone number +919512657393 and email ravishp@gmail.com" 
                : investigationType === "identity-verification"
                ? "Verify identity of Sarah Johnson with National ID 876543210 against government sources"
                : "Verify reachability of user at phone +447700900123 and find alternative contact methods"
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-10"
          />
          <Button 
            type="submit" 
            size="icon" 
            variant="ghost" 
            className="absolute right-0 top-0 h-full"
            disabled={isAnalyzing || !query.trim()}
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-xs text-muted-foreground">
        <div className="flex items-center">
          <AlertCircle className="h-3 w-3 mr-1" />
          <span>
            {investigationType === "risk-analysis" 
              ? "Example: \"Check risk score of phone +1234567890 and email user@example.com\"" 
              : investigationType === "identity-verification"
              ? "Example: \"Verify identity of John Smith with government, mobile operator and credit sources\""
              : "Example: \"Find alternate contact information for user with email user@example.com\""}
          </span>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
