
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AlertTriangle, Check, ChevronDown, ChevronUp, Flag, X } from 'lucide-react';
import { AnalysisRule } from '../types';
import { RuleItemProps } from './types';

const RuleItem: React.FC<RuleItemProps> = ({ rule, onUpdate, onRemove }) => {
  const [expanded, setExpanded] = useState(false);

  // Get icon for action
  const getActionIcon = (action: string) => {
    switch (action) {
      case 'flag':
        return <Flag size={14} className="text-yellow-500" />;
      case 'reject':
        return <X size={14} className="text-red-500" />;
      case 'approve':
        return <Check size={14} className="text-green-500" />;
      case 'escalate':
        return <AlertTriangle size={14} className="text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="border border-gray-200 rounded-md bg-gray-50 overflow-hidden">
      <div className="flex flex-wrap items-start gap-2 p-3">
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
              <SelectItem value="velocity">Velocity</SelectItem>
              <SelectItem value="frequency">Frequency</SelectItem>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="device">Device</SelectItem>
              <SelectItem value="network">Network</SelectItem>
              <SelectItem value="behavior">Behavior Pattern</SelectItem>
              <SelectItem value="mcc">Merchant Category</SelectItem>
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
              <SelectItem value="contains">Contains</SelectItem>
              <SelectItem value="startsWith">Starts With</SelectItem>
              <SelectItem value="endsWith">Ends With</SelectItem>
              <SelectItem value="matches">Matches</SelectItem>
              <SelectItem value="in">In List</SelectItem>
              <SelectItem value="notIn">Not In List</SelectItem>
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
              <SelectItem value="route">Route to Team</SelectItem>
              <SelectItem value="assign">Assign Agent</SelectItem>
              <SelectItem value="tag">Apply Tag</SelectItem>
              <SelectItem value="score">Adjust Score</SelectItem>
              <SelectItem value="log">Log Event</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-1">
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 mt-5"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </Button>
          
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
      </div>
      
      {expanded && (
        <div className="p-3 pt-0 border-t border-gray-200 space-y-3">
          <div>
            <Label className="text-xs mb-1 block">Rule Type</Label>
            <Select 
              value={rule.ruleType || 'simple'} 
              onValueChange={(value) => onUpdate(rule.id, 'ruleType', value)}
            >
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Rule Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="simple">Simple Condition</SelectItem>
                <SelectItem value="compound">Compound Condition</SelectItem>
                <SelectItem value="temporal">Time-Based Condition</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="text-xs mb-1 block">Priority</Label>
            <Select 
              value={rule.priority || 'medium'} 
              onValueChange={(value) => onUpdate(rule.id, 'priority', value)}
            >
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="text-xs mb-1 block">Notes</Label>
            <Textarea
              className="min-h-[60px]"
              value={rule.notes || ''}
              onChange={(e) => onUpdate(rule.id, 'notes', e.target.value)}
              placeholder="Add notes about this rule..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RuleItem;
