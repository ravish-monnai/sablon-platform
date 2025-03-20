
import React from 'react';
import DraggableItem from '../DraggableItem';
import { ToolbarSectionProps } from './types';

const ToolbarSection: React.FC<ToolbarSectionProps> = ({ title, icon, items }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {items.map((item, index) => (
          <DraggableItem
            key={`${item.type}-${index}`}
            type={item.type}
            label={item.label}
            icon={item.icon}
            data={item.data}
          />
        ))}
      </div>
      
      {/* Add some guiding text for better UX */}
      <div className="mt-2 text-xs text-gray-500 italic px-1">
        Drag items to the canvas
      </div>
    </div>
  );
};

export default ToolbarSection;
