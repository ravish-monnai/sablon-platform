
import React from 'react';
import { MessageSquare, AlertCircle, ShieldCheck, Zap } from 'lucide-react';
import { ToolbarSectionProps } from './types';

export const getActionsSection = (): ToolbarSectionProps => {
  const actions = [
    { 
      type: "notification", 
      label: "Notification", 
      icon: <MessageSquare className="text-green-600" size={16} />, 
      data: { actionType: "notification" } 
    },
    { 
      type: "alert", 
      label: "Alert", 
      icon: <AlertCircle className="text-red-600" size={16} />, 
      data: { actionType: "alert" } 
    },
    { 
      type: "verification", 
      label: "Verification", 
      icon: <ShieldCheck className="text-indigo-600" size={16} />, 
      data: { actionType: "verification" } 
    },
    { 
      type: "automation", 
      label: "Automation", 
      icon: <Zap className="text-amber-600" size={16} />, 
      data: { actionType: "automation" } 
    },
  ];

  return {
    title: "Actions",
    icon: <Zap className="text-amber-500 mr-2" size={16} />,
    items: actions
  };
};

export default getActionsSection;
