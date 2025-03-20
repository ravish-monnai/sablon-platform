
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
        
        // Create a custom drag preview element
        const previewEl = document.createElement('div');
        previewEl.className = 'drag-preview';
        previewEl.innerHTML = `
          <div style="
            background-color: white;
            color: #333;
            padding: 12px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            border: 2px solid ${getNodeColor(type)};
            min-width: 150px;
          ">
            <div style="color: ${getNodeColor(type)};">${getIconHTML(type)}</div>
            <span style="font-weight: 500;">${label}</span>
          </div>
        `;
        
        document.body.appendChild(previewEl);
        event.dataTransfer.setDragImage(previewEl, 75, 25);
        
        // Remove the element after the drag operation
        setTimeout(() => {
          document.body.removeChild(previewEl);
        }, 0);
      }}
    >
      <div className="text-base" style={{ color: getIconColor(type) }}>{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

// Helper function to get icon HTML for drag preview
const getIconHTML = (type: string): string => {
  switch(type) {
    case 'datasource':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 9h1"></path><path d="M9 12h1"></path><path d="M9 15h1"></path></svg>';
    case 'datastore':
    case 'transformation':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"></ellipse><path d="M4 6v6a8 3 0 0 0 16 0V6"></path><path d="M4 12v6a8 3 0 0 0 16 0v-6"></path></svg>';
    case 'model':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
    case 'rule':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 14-5-5"></path><path d="m18 17-8-8"></path><path d="M8 17h9"></path><path d="M7 22h10"></path><path d="M2 12h5"></path><path d="M2 7h3"></path><path d="M2 17h3"></path></svg>';
    case 'case':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>';
    case 'output':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 3 6 6m0 0-6 6"></path><path d="M12 19H3c0-4.2 3.1-8 7-8.7"></path></svg>';
    default:
      return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>';
  }
};

// Helper function to get node color based on type
const getNodeColor = (type: string): string => {
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
