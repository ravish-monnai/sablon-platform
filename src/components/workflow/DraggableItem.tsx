
import React from 'react';
import { DragItemProps } from './types';

const DraggableItem: React.FC<DragItemProps> = ({ type, icon, label }) => {
  return (
    <div 
      className="border rounded-md p-2 bg-blue-50 cursor-grab flex items-center"
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData('application/reactflow/type', type);
      }}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default DraggableItem;
