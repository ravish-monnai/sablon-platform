
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Plus } from 'lucide-react';
import { AnalysisRule } from '../types';
import { RulesEditorProps } from './types';
import RuleItem from './RuleItem';

const RulesEditor: React.FC<RulesEditorProps> = ({ rules, onChange }) => {
  const addRule = (ruleType: 'simple' | 'compound' | 'temporal' = 'simple') => {
    const newRule: AnalysisRule = {
      id: `rule-${Date.now()}`,
      condition: 'amount',
      operator: '>',
      value: '1000',
      action: 'flag',
      ruleType: ruleType,
      priority: 'medium'
    };
    onChange([...rules, newRule]);
  };

  const updateRule = (id: string, field: string, value: any) => {
    onChange(rules.map(rule => 
      rule.id === id ? { ...rule, [field]: value } : rule
    ));
  };

  const removeRule = (id: string) => {
    onChange(rules.filter(rule => rule.id !== id));
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div>
          <Label>If-Then Analysis Rules</Label>
          <p className="text-xs text-muted-foreground">
            Define rules to automate decision making in the workflow
          </p>
        </div>
        
        <div className="flex gap-2">
          <Select
            defaultValue="simple"
            onValueChange={(value: 'simple' | 'compound' | 'temporal') => addRule(value)}
          >
            <SelectTrigger className="h-8 w-[130px] bg-primary text-primary-foreground hover:bg-primary/90">
              <SelectValue placeholder="Add Rule" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple Rule</SelectItem>
              <SelectItem value="compound">Compound Rule</SelectItem>
              <SelectItem value="temporal">Time-Based Rule</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={() => addRule()}
            className="flex items-center gap-1"
          >
            <Plus size={14} />
            Quick Add
          </Button>
        </div>
      </div>
      
      <div className="space-y-3 mt-3">
        {rules.length === 0 ? (
          <p className="text-sm text-muted-foreground">No rules configured. Add rules to define node behavior.</p>
        ) : (
          rules.map((rule) => (
            <RuleItem 
              key={rule.id} 
              rule={rule} 
              onEdit={updateRule} 
              onDelete={removeRule} 
            />
          ))
        )}
      </div>
      
      {rules.length > 0 && (
        <div className="text-xs text-muted-foreground mt-2">
          {rules.length} rule{rules.length !== 1 ? 's' : ''} configured
        </div>
      )}
    </div>
  );
};

export default RulesEditor;
