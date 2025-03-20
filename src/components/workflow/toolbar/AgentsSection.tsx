
import React from 'react';
import { Users, Bot } from 'lucide-react';
import { ToolbarSectionProps } from './types';

export const getAgentsSection = (): ToolbarSectionProps => {
  const agents = [
    { 
      type: "agent", 
      label: "Human Agent", 
      icon: <Users className="text-monnai-blue" size={16} />, 
      data: { agentType: "regular_agent" } 
    },
    { 
      type: "agent", 
      label: "AI Agent", 
      icon: <Bot className="text-purple-600" size={16} />, 
      data: { agentType: "ai_agent" } 
    },
  ];

  return {
    title: "Agents",
    icon: <Users className="text-purple-600 mr-2" size={16} />,
    items: agents
  };
};

export default getAgentsSection;
