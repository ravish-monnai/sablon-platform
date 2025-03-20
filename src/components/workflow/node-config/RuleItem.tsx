
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';
import { AnalysisRule } from '../types';
import { RuleItemProps } from './types';

const RuleItem: React.FC<RuleItemProps> = ({ rule, onUpdate, onRemove }) => {
  return (
    <div className="flex flex-wrap items-start gap-2 p-3 border border-gray-200 rounded-md bg-gray-50">
      <div className="flex-1 min-w-[110px]">
        <Label className="text-xs mb-1 block">If</Label>
        <Select 
          value={rule.condition} 
          onValueChange={(value) => onUpdate(rule.id, 'condition', value)}
        >
          <SelectTrigger className="h-8">
            <SelectValue placeholder="Field" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="amount">Amount</SelectItem>
            <SelectItem value="balance">Balance</SelectItem>
            <SelectItem value="transactions">Transaction Count</SelectItem>
            <SelectItem value="age">Account Age</SelectItem>
            <SelectItem value="score">Risk Score</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-20">
        <Label className="text-xs mb-1 block">Operator</Label>
        <Select 
          value={rule.operator} 
          onValueChange={(value) => onUpdate(rule.id, 'operator', value)}
        >
          <SelectTrigger className="h-8">
            <SelectValue placeholder="Op" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=">">{'>'}</SelectItem>
            <SelectItem value="<">{'<'}</SelectItem>
            <SelectItem value="=">{'='}</SelectItem>
            <SelectItem value="!=">{'!='}</SelectItem>
            <SelectItem value=">=">{'>='}</SelectItem>
            <SelectItem value="<=">{'<='}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-24">
        <Label className="text-xs mb-1 block">Value</Label>
        <Input
          className="h-8"
          value={rule.value}
          onChange={(e) => onUpdate(rule.id, 'value', e.target.value)}
          placeholder="Value"
        />
      </div>
      
      <div className="flex-1 min-w-[110px]">
        <Label className="text-xs mb-1 block">Then</Label>
        <Select 
          value={rule.action} 
          onValueChange={(value) => onUpdate(rule.id, 'action', value)}
        >
          <SelectTrigger className="h-8">
            <SelectValue placeholder="Action" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="flag">Flag for Review</SelectItem>
            <SelectItem value="reject">Auto Reject</SelectItem>
            <SelectItem value="approve">Auto Approve</SelectItem>
            <SelectItem value="escalate">Escalate</SelectItem>
            <SelectItem value="notify">Send Notification</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button 
        type="button" 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 mt-5"
        onClick={() => onRemove(rule.id)}
      >
        <X size={14} />
      </Button>
    </div>
  );
};

export default RuleItem;
