
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NodeFormFieldsProps } from './types';
import FeatureTag from '@/components/ui/feature-tag';

const NodeFormFields: React.FC<NodeFormFieldsProps> = ({ node, onChange }) => {
  const { label = '', description = '', type = 'datasource', status = 'none', featureTag } = node.data || {};

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="node-label">Label</Label>
        <Input
          id="node-label"
          value={label}
          onChange={(e) => onChange('label', e.target.value)}
          placeholder="Enter node label"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="node-description">Description</Label>
        <Textarea
          id="node-description"
          value={description}
          onChange={(e) => onChange('description', e.target.value)}
          placeholder="Enter node description"
          rows={3}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="node-type">Type</Label>
        <Select value={type} onValueChange={(value) => onChange('type', value)}>
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
        <Select value={status} onValueChange={(value) => onChange('status', value)}>
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

      <div className="space-y-2">
        <Label htmlFor="feature-tag">Feature Tag</Label>
        <Select 
          value={featureTag || ""} 
          onValueChange={(value) => onChange('featureTag', value || undefined)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Add feature tag (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">None</SelectItem>
            <SelectItem value="new">
              <div className="flex items-center gap-2">
                <FeatureTag variant="new" />
                <span>New Feature</span>
              </div>
            </SelectItem>
            <SelectItem value="beta">
              <div className="flex items-center gap-2">
                <FeatureTag variant="beta" />
                <span>Beta Feature</span>
              </div>
            </SelectItem>
            <SelectItem value="updated">
              <div className="flex items-center gap-2">
                <FeatureTag variant="updated" />
                <span>Recently Updated</span>
              </div>
            </SelectItem>
            <SelectItem value="ai">
              <div className="flex items-center gap-2">
                <FeatureTag variant="ai" />
                <span>AI Powered</span>
              </div>
            </SelectItem>
            <SelectItem value="premium">
              <div className="flex items-center gap-2">
                <FeatureTag variant="premium" />
                <span>Premium Feature</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default NodeFormFields;
