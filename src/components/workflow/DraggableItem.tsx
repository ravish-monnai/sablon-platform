
import React from 'react';
import { DragItemProps } from './types';

const DraggableItem: React.FC<DragItemProps> = ({ type, icon, label, data = {} }) => {
  return (
    <div 
      className="border rounded-md p-2 bg-blue-50 cursor-grab flex items-center"
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData('application/reactflow/type', type);
        // Store additional data as JSON string
        if (Object.keys(data).length > 0) {
          event.dataTransfer.setData('application/reactflow/data', JSON.stringify(data));
        }
      }}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default DraggableItem;
