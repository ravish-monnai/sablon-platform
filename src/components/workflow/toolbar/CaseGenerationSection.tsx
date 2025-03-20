
import React from 'react';
import { FileCheck, FilePlus, FileWarning, FileX, FolderOpen } from 'lucide-react';
import { ToolbarSectionProps } from './types';

export const getCaseGenerationSection = (): ToolbarSectionProps => {
  const caseTypes = [
    { 
      type: "case", 
      label: "Create Case", 
      icon: <FilePlus className="text-indigo-600" size={16} />, 
      data: { caseType: "create" } 
    },
    { 
      type: "case", 
      label: "Fraud Case", 
      icon: <FileWarning className="text-indigo-600" size={16} />, 
      data: { caseType: "fraud" } 
    },
    { 
      type: "case", 
      label: "Verification Case", 
      icon: <FileCheck className="text-indigo-600" size={16} />, 
      data: { caseType: "verification" } 
    },
    { 
      type: "case", 
      label: "Exception Case", 
      icon: <FileX className="text-indigo-600" size={16} />, 
      data: { caseType: "exception" } 
    },
  ];

  return {
    title: "Case Generation",
    icon: <FolderOpen className="text-indigo-600 mr-2" size={16} />,
    items: caseTypes
  };
};

export default getCaseGenerationSection;
