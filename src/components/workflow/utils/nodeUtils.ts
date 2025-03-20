
/**
 * Utility functions for node management in the workflow editor
 */

// Helper function to get default label based on node type
export const getDefaultLabelForType = (type: string): string => {
  switch (type) {
    case 'datasource':
      return 'Data Source';
    case 'model':
      return 'ML Model';
    case 'rule':
      return 'Decision Rule';
    case 'notification':
      return 'Notification';
    case 'alert':
      return 'Alert';
    case 'agent':
      return 'Agent';
    default:
      return 'New Node';
  }
};

// Helper function to get default description based on node type
export const getDefaultDescriptionForType = (type: string): string => {
  switch (type) {
    case 'datasource':
      return 'Source of data for the journey';
    case 'model':
      return 'Machine learning model';
    case 'rule':
      return 'Decision rule logic';
    case 'notification':
      return 'Send notification to user';
    case 'alert':
      return 'Generate alert for review';
    case 'agent':
      return 'Human or AI agent';
    default:
      return 'Description';
  }
};

// Helper function to get default icon for node type
export const getDefaultIconForType = (type: string): React.ReactNode => {
  // This will be handled by the CustomNode component
  return null;
};
