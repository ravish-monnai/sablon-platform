
import { NodeData, AnalysisRule } from '../types';

export interface NodeConfigProps {
  isOpen: boolean;
  onClose: () => void;
  node: any | null;
  onUpdateNode: (nodeId: string, data: NodeData) => void;
}

export interface RuleEditorProps {
  rules: AnalysisRule[];
  setRules: React.Dispatch<React.SetStateAction<AnalysisRule[]>>;
}

export interface RuleItemProps {
  rule: AnalysisRule;
  onUpdate: (id: string, field: keyof AnalysisRule, value: string) => void;
  onRemove: (id: string) => void;
}

export interface NodeFormFieldsProps {
  label: string;
  setLabel: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  type: string;
  setType: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
}
