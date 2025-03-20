
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NodeFormFieldsProps } from './types';

const NodeFormFields: React.FC<NodeFormFieldsProps> = ({ 
  label, 
  setLabel, 
  description, 
  setDescription, 
  type, 
  setType, 
  status, 
  setStatus 
}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="node-label">Label</Label>
        <Input
          id="node-label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Enter node label"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="node-description">Description</Label>
        <Textarea
          id="node-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter node description"
          rows={3}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="node-type">Type</Label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Select node type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="datasource">Data Source</SelectItem>
            <SelectItem value="model">ML Model</SelectItem>
            <SelectItem value="rule">Decision Rule</SelectItem>
            <SelectItem value="notification">Notification</SelectItem>
            <SelectItem value="alert">Alert</SelectItem>
            <SelectItem value="agent">Agent</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="node-status">Status</Label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default NodeFormFields;
