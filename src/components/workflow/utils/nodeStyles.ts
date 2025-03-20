
// Helper functions for node styling

// Return appropriate color based on node type
export const getNodeColorByType = (type: string): string => {
  switch(type) {
    case 'rule':
      return '#3b82f6'; // blue
    case 'model':
      return '#8b5cf6'; // purple (changed from pink)
    case 'data':
    case 'datasource':
      return '#2bbfe0'; // blue (changed from yellow)
    case 'notification':
      return '#22c55e'; // green
    case 'alert':
      return '#6b7280'; // gray (changed from red)
    case 'agent':
      return '#3b82f6'; // blue (changed from purple)
    default:
      return '#2bbfe0'; // default blue
  }
};

// Match the status border styling from journey steps
export const getStatusBorder = (status?: string): string => {
  switch(status) {
    case 'completed':
      return 'border-green-400';
    case 'active':
      return 'border-blue-400';
    case 'error':
      return 'border-red-400';
    default:
      return 'border-transparent';
  }
};

// Define edge styling options
export const getEdgeOptions = () => ({
  style: { strokeWidth: 2, stroke: '#94a3b8' },
  labelBgStyle: { fill: 'white', fillOpacity: 0.8 },
  labelStyle: { fill: '#333', fontSize: 12 },
  animated: true
});

// Get node color for minimap
export const getMinimapNodeColor = (node: any) => {
  const nodeData = node.data;
  if (nodeData.type === 'datasource' || nodeData.type === 'data') return '#2bbfe0'; // changed from yellow
  if (nodeData.type === 'model') return '#8b5cf6'; // changed from pink
  if (nodeData.type === 'agent') return '#3b82f6'; // changed from purple
  if (nodeData.type === 'rule') return '#3b82f6';
  if (nodeData.type === 'notification') return '#22c55e';
  if (nodeData.type === 'alert') return '#6b7280'; // changed from red
  return '#2bbfe0';
};
