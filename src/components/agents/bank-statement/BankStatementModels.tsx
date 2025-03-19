
import React from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Check, PlusCircle } from "lucide-react";

interface BankStatementModelsProps {
  llmModel: string;
  setLLMModel: (value: string) => void;
  confidenceThreshold: number[];
  setConfidenceThreshold: (value: number[]) => void;
}

const BankStatementModels: React.FC<BankStatementModelsProps> = ({
  llmModel,
  setLLMModel,
  confidenceThreshold,
  setConfidenceThreshold,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="llm-model" className="mb-2 block">LLM Model</Label>
        <Select value={llmModel} onValueChange={setLLMModel}>
          <SelectTrigger id="llm-model" className="w-full">
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt-4o">OpenAI GPT-4o</SelectItem>
            <SelectItem value="claude-3-opus">Anthropic Claude 3 Opus</SelectItem>
            <SelectItem value="llama-3-70b">Meta Llama 3 (70B)</SelectItem>
            <SelectItem value="gpt-4o-mini">OpenAI GPT-4o Mini</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground mt-1">
          Select the large language model used for document analysis and text extraction.
        </p>
      </div>
      
      <div className="pt-4">
        <div className="flex justify-between items-center mb-2">
          <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
          <Badge variant="outline">{confidenceThreshold}%</Badge>
        </div>
        <Slider 
          id="confidence-threshold"
          min={50} 
          max={95} 
          step={5} 
          value={confidenceThreshold} 
          onValueChange={setConfidenceThreshold} 
        />
        <p className="text-sm text-muted-foreground mt-1">
          Minimum confidence level required for transaction categorization.
        </p>
      </div>
      
      <div className="pt-4">
        <Label className="mb-2 block">Connected Data Sources</Label>
        <div className="space-y-2">
          <div className="flex items-center p-2 border rounded-md bg-gray-50">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm">Bank Transaction Database</span>
          </div>
          <div className="flex items-center p-2 border rounded-md bg-gray-50">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm">Financial Category Taxonomy</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-600 cursor-pointer">
            <PlusCircle className="h-4 w-4" />
            <span>Connect new data source</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankStatementModels;
