
import React from 'react';
import { DragItemProps } from './types';

const DraggableItem: React.FC<DragItemProps> = ({ type, icon, label, data = {} }) => {
  return (
    <div 
      className="border rounded-md p-2 bg-white hover:bg-blue-50 cursor-grab flex items-center gap-2 shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-1"
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData('application/reactflow/type', type);
        // Store additional data as JSON string
        if (Object.keys(data).length > 0) {
          event.dataTransfer.setData('application/reactflow/data', JSON.stringify(data));
        }
        
        // Add visual feedback during drag
        const dragImage = document.createElement('div');
        dragImage.innerHTML = `
          <div style="
            background-color: ${getBackgroundColor(type)};
            color: white;
            padding: 8px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          ">
            <span>${label}</span>
          </div>
        `;
        document.body.appendChild(dragImage);
        dragImage.style.position = 'absolute';
        dragImage.style.top = '-1000px';
        event.dataTransfer.setDragImage(dragImage, 20, 20);
        
        // Remove the element after the drag operation
        setTimeout(() => {
          document.body.removeChild(dragImage);
        }, 0);
      }}
    >
      <div className="text-base" style={{ color: getIconColor(type) }}>{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

// Helper function to get background color based on type for the drag preview
const getBackgroundColor = (type: string): string => {
  switch(type) {
    case 'datasource':
      return '#ffcc1d'; // yellow
    case 'datastore':
    case 'transformation':
      return '#10b981'; // emerald
    case 'model':
      return '#e879f9'; // pink
    case 'rule':
      return '#3b82f6'; // blue
    case 'case':
      return '#818cf8'; // indigo
    case 'output':
      return '#f97316'; // orange
    case 'notification':
      return '#22c55e'; // green
    case 'alert':
      return '#ef4444'; // red
    case 'agent':
      return '#8b5cf6'; // purple
    default:
      return '#2bbfe0'; // default blue
  }
};

// Helper function to get icon color
const getIconColor = (type: string): string => {
  switch(type) {
    case 'datasource':
      return '#ffcc1d'; // yellow
    case 'datastore':
    case 'transformation':
      return '#10b981'; // emerald
    case 'model':
      return '#e879f9'; // pink
    case 'rule':
      return '#3b82f6'; // blue
    case 'case':
      return '#818cf8'; // indigo
    case 'output':
      return '#f97316'; // orange
    case 'notification':
      return '#22c55e'; // green
    case 'alert':
      return '#ef4444'; // red
    case 'agent':
      return '#8b5cf6'; // purple
    default:
      return '#2bbfe0'; // default blue
  }
};

export default DraggableItem;
