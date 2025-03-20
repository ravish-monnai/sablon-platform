
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { AnalysisRule } from '../types';
import { RuleEditorProps } from './types';
import RuleItem from './RuleItem';

const RulesEditor: React.FC<RuleEditorProps> = ({ rules, setRules }) => {
  const addRule = () => {
    const newRule: AnalysisRule = {
      id: `rule-${Date.now()}`,
      condition: 'amount',
      operator: '>',
      value: '1000',
      action: 'flag'
    };
    setRules([...rules, newRule]);
  };

  const updateRule = (id: string, field: keyof AnalysisRule, value: string) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, [field]: value } : rule
    ));
  };

  const removeRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label>If-Then Analysis Rules</Label>
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          onClick={addRule}
          className="flex items-center gap-1"
        >
          <Plus size={14} />
          Add Rule
        </Button>
      </div>
      
      <div className="space-y-3 mt-3">
        {rules.length === 0 ? (
          <p className="text-sm text-muted-foreground">No rules configured. Add rules to define node behavior.</p>
        ) : (
          rules.map((rule) => (
            <RuleItem 
              key={rule.id} 
              rule={rule} 
              onUpdate={updateRule} 
              onRemove={removeRule} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RulesEditor;
