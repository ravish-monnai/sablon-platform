
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import DraggableItem from '../DraggableItem';
import { ToolbarSectionProps } from './types';

const ToolbarSection: React.FC<ToolbarSectionProps> = ({ title, icon, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible 
      open={isOpen} 
      onOpenChange={setIsOpen}
      className="bg-white border rounded-md shadow-sm"
    >
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="sm" className="w-full flex justify-between">
          <div className="flex items-center">
            {icon}
            {title}
          </div>
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-2 space-y-2">
        {items.map((item) => (
          <DraggableItem 
            key={item.type}
            type={item.type}
            icon={item.icon}
            label={item.label}
            data={item.data}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ToolbarSection;
