
import { NodeData } from "../types";

export interface NodeConfigDialogProps {
  isOpen: boolean;
  onClose: () => void;
  node: any;
  onUpdateNode: (nodeId: string, data: NodeData) => void;
}

export interface NodeFormFieldsProps {
  node: any;
  onChange: (field: string, value: any) => void;
}

export interface RuleItemProps {
  rule: {
    id: string;
    condition: string;
    operator: string;
    value: string;
    action: string;
    priority?: 'low' | 'medium' | 'high';
    notes?: string;
  };
  onDelete: (id: string) => void;
  onEdit: (id: string, field: string, value: any) => void;
}

export interface RulesEditorProps {
  rules: Array<{
    id: string;
    condition: string;
    operator: string;
    value: string;
    action: string;
    priority?: 'low' | 'medium' | 'high';
    notes?: string;
  }>;
  onChange: (rules: any[]) => void;
}

export interface NodeInputsOutputsProps {
  inputs: string[];
  outputs: string[];
  onChange: (field: string, values: string[]) => void;
}

export interface NodeMappingsProps {
  mappings: Record<string, string>;
  onChange: (mappings: Record<string, string>) => void;
}

export interface NodeDecisionsProps {
  decisions: Array<{
    condition: string;
    outcome: string;
    nextNode?: string;
  }>;
  onChange: (decisions: Array<{
    condition: string;
    outcome: string;
    nextNode?: string;
  }>) => void;
}
