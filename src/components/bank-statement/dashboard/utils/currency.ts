
// Helper function to get currency symbol based on market
export const getCurrencySymbol = (market?: string) => {
  if (!market) return "₹";
  
  switch (market) {
    case "India":
      return "₹";
    case "US":
      return "$";
    case "Mexico":
      return "$";
    case "Indonesia":
      return "Rp";
    case "Philippines":
      return "₱";
    default:
      return "₹";
  }
};

// Helper function to format currency based on market
export const formatCurrency = (amount: number, market?: string) => {
  if (!market) return `₹${amount.toLocaleString('en-IN')}`;
  
  switch (market) {
    case "India":
      return `₹${amount.toLocaleString('en-IN')}`;
    case "US":
      return `$${amount.toLocaleString('en-US')}`;
    case "Mexico":
      return `$${amount.toLocaleString('es-MX')}`;
    case "Indonesia":
      return `Rp${amount.toLocaleString('id-ID')}`;
    case "Philippines":
      return `₱${amount.toLocaleString('en-PH')}`;
    default:
      return `₹${amount.toLocaleString('en-IN')}`;
  }
};
