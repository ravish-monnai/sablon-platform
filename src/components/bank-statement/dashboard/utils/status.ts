
// Helper function to check if a feature has exceptions
export const hasExceptions = (feature: any): boolean => {
  return feature.exceptions && feature.exceptions.length > 0;
};

// Helper function to get the appropriate badge variant based on status
export const getStatusColor = (status: string): "success" | "warning" | "destructive" | "default" | "secondary" | "outline" => {
  const statusLower = status.toLowerCase();
  
  if (statusLower.includes('good') || 
      statusLower.includes('verified') || 
      statusLower.includes('excellent') || 
      statusLower.includes('low risk') || 
      statusLower.includes('passed') || 
      statusLower.includes('improving') || 
      statusLower.includes('positive') ||
      statusLower.includes('stable')) {
    return 'success';
  } else if (statusLower.includes('medium') || 
             statusLower.includes('moderate') || 
             statusLower.includes('stable')) {
    return 'warning';
  } else if (statusLower.includes('high') || 
             statusLower.includes('risk') || 
             statusLower.includes('failed') || 
             statusLower.includes('rejected') ||
             statusLower.includes('worsening')) {
    return 'destructive';
  } else {
    return 'default';
  }
};
