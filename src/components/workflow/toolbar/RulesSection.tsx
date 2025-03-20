
import React from 'react';
import { GitBranch, BarChart } from 'lucide-react';
import { ToolbarSectionProps } from './types';

export const getRulesSection = (): ToolbarSectionProps => {
  const rules = [
    { 
      type: "rule", 
      label: "Decision Rule", 
      icon: <GitBranch className="text-blue-600" size={16} />, 
      data: { ruleType: "decision_rule" } 
    },
    { 
      type: "rule", 
      label: "Threshold Rule", 
      icon: <BarChart className="text-blue-600" size={16} />, 
      data: { ruleType: "threshold_rule" } 
    },
    { 
      type: "rule", 
      label: "Conditional Rule", 
      icon: <GitBranch className="text-blue-600" size={16} />, 
      data: { ruleType: "conditional_rule" } 
    },
  ];

  return {
    title: "Rules",
    icon: <GitBranch className="text-blue-600 mr-2" size={16} />,
    items: rules
  };
};

export default getRulesSection;
