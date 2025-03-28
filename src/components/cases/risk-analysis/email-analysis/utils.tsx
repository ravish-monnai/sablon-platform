
import React from "react";

// Get status icon based on status
export const getStatusIcon = (Icon: React.ElementType, status: string) => {
  switch (status) {
    case "success":
      return <Icon className="h-4 w-4 text-green-500" />;
    case "warning":
      return <Icon className="h-4 w-4 text-amber-500" />;
    case "error":
      return <Icon className="h-4 w-4 text-red-500" />;
    case "info":
      return <Icon className="h-4 w-4 text-blue-500" />;
    default:
      return <Icon className="h-4 w-4 text-gray-500" />;
  }
};

export const mockEmailData = {
  deliverable: true,
  domainDetails: {
    domainName: "gmail.com",
    registered: true,
    companyName: "Google LLC",
    freeProvider: true,
    disposable: false,
    suspiciousTld: false,
    acceptAll: false,
    creationDate: "1995-08-13"
  },
  breach: {
    isBreached: true,
    breachCount: 12,
    firstBreachDate: "2021-09-17",
    lastBreachDate: "2024-06-10",
    breaches: [
      { platformName: "8fit", domainName: "8fit.com", breachDate: "2022-07-01" },
      { platformName: "Canva", domainName: "canva.com", breachDate: "2023-04-27" }
    ]
  },
  tenure: {
    years: 7.74,
    days: 2827
  },
  classification: {
    type: "PERSONAL",
    confidence: 95
  }
};

// Digital footprint categories
export const mockDigitalCategories = [
  { 
    category: "Email Provider", 
    count: 1, 
    services: ["Google"],
    status: "success" 
  },
  { 
    category: "Ecommerce", 
    count: 6, 
    services: ["Amazon", "Flipkart", "Myntra", "Ajio", "Meesho", "Nykaa"],
    status: "success" 
  },
  { 
    category: "Social Media", 
    count: 3, 
    services: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    status: "success" 
  },
  { 
    category: "Education", 
    count: 1, 
    services: ["Byjus"],
    status: "success" 
  }
];
