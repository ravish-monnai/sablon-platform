
import { Edge, MarkerType, Node } from '@xyflow/react';
import { NodeData } from '../types';

// Maps node types to minimap colors
export const getMinimapNodeColor = (node: Node) => {
  const data = node.data as NodeData;
  
  if (!data || !data.type) return '#d1d5db'; // Default gray

  // Use the same colors as in the CustomNode
  switch (data.type) {
    case 'datasource':
      return '#fef08a'; // Yellow
    case 'model':
      return '#d8b4fe'; // Purple
    case 'rule':
      return '#93c5fd'; // Blue
    case 'notification':
      return '#86efac'; // Green
    case 'agent':
      return '#a5b4fc'; // Indigo
    case 'alert':
      return '#fca5a5'; // Red
    default:
      return '#d1d5db'; // Gray
  }
};

// Default edge options
export const getEdgeOptions = () => {
  return {
    type: 'smoothstep',
    style: { 
      stroke: '#94a3b8',  // Default edge color
      strokeWidth: 2
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#94a3b8'
    },
    animated: false,
    labelStyle: { 
      fill: '#64748b', 
      fontWeight: 500,
      fontSize: 12
    },
    labelBgStyle: { 
      fill: '#f8fafc', 
      fillOpacity: 0.8,
      rx: 4,
      strokeWidth: 0
    }
  };
};

// Function to get a custom edge style based on edge data
export const getCustomEdgeStyle = (edge: Edge) => {
  const edgeType = edge.data?.type;
  
  if (!edgeType) return getEdgeOptions();
  
  switch (edgeType) {
    case 'success':
      return {
        ...getEdgeOptions(),
        style: { 
          stroke: '#22c55e', // Green for success
          strokeWidth: 2
        },
        markerEnd: {
          ...getEdgeOptions().markerEnd,
          color: '#22c55e'
        }
      };
    case 'failure':
      return {
        ...getEdgeOptions(),
        style: { 
          stroke: '#ef4444', // Red for failure
          strokeWidth: 2
        },
        markerEnd: {
          ...getEdgeOptions().markerEnd,
          color: '#ef4444'
        }
      };
    case 'warning':
      return {
        ...getEdgeOptions(),
        style: { 
          stroke: '#f59e0b', // Amber for warning
          strokeWidth: 2
        },
        markerEnd: {
          ...getEdgeOptions().markerEnd,
          color: '#f59e0b'
        }
      };
    case 'feedback':
      return {
        ...getEdgeOptions(),
        style: { 
          stroke: '#6366f1', // Indigo for feedback
          strokeWidth: 2,
          strokeDasharray: '5,5' // Dashed line
        },
        markerEnd: {
          ...getEdgeOptions().markerEnd,
          color: '#6366f1'
        }
      };
    default:
      return getEdgeOptions();
  }
};

// Functions for WorkflowPreview component
export const getNodeColorByType = (type: string) => {
  switch (type) {
    case 'datasource':
      return '#FEF9C3'; // Yellow
    case 'model':
      return '#F3E8FF'; // Purple
    case 'rule':
      return '#DBEAFE'; // Blue
    case 'notification':
      return '#DCFCE7'; // Green
    case 'agent':
      return '#E0E7FF'; // Indigo
    case 'alert':
      return '#FEE2E2'; // Red
    default:
      return '#F1F5F9'; // Default slate
  }
};

export const getStatusBorder = (status: string) => {
  if (status === 'error') return 'border-red-500';
  if (status === 'warning') return 'border-yellow-500';
  if (status === 'success') return 'border-green-500';
  return 'border-gray-200';
};
