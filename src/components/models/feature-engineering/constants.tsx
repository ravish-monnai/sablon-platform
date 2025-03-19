
import { 
  Phone, Mail, Briefcase, DollarSign, 
  MapPin, IdCard, Network, ShieldAlert,
  Database
} from "lucide-react";
import React from "react";

export const DATA_SOURCES = [
  { id: "phone_basic", name: "Phone Basic", icon: <Phone className="h-5 w-5 mr-2 text-blue-500" /> },
  { id: "phone_social", name: "Phone Social", icon: <Phone className="h-5 w-5 mr-2 text-indigo-500" /> },
  { id: "email_basic", name: "Email Basic", icon: <Mail className="h-5 w-5 mr-2 text-blue-500" /> },
  { id: "email_social", name: "Email Social", icon: <Mail className="h-5 w-5 mr-2 text-indigo-500" /> },
  { id: "employment", name: "Employment", icon: <Briefcase className="h-5 w-5 mr-2 text-purple-500" /> },
  { id: "income", name: "Income", icon: <DollarSign className="h-5 w-5 mr-2 text-green-500" /> },
  { id: "ip_intelligence", name: "IP Intelligence", icon: <MapPin className="h-5 w-5 mr-2 text-red-500" /> },
  { id: "identity", name: "Identity", icon: <IdCard className="h-5 w-5 mr-2 text-amber-500" /> },
  { id: "network_graph", name: "Network Graph", icon: <Network className="h-5 w-5 mr-2 text-blue-600" /> },
  { id: "global_security", name: "Global Security Data", icon: <ShieldAlert className="h-5 w-5 mr-2 text-gray-500" /> },
];

export const FEATURE_TYPES = [
  { id: "numeric", name: "Numeric" },
  { id: "categorical", name: "Categorical" },
  { id: "boolean", name: "Boolean" },
  { id: "datetime", name: "Date/Time" },
  { id: "text", name: "Text" },
];

export const TRANSFORMATIONS = [
  { id: "none", name: "None" },
  { id: "log", name: "Logarithmic" },
  { id: "normalize", name: "Normalize (0-1)" },
  { id: "standardize", name: "Standardize (z-score)" },
  { id: "binning", name: "Binning" },
  { id: "one_hot", name: "One-Hot Encoding" },
];

export const getDataSourceIcon = (sourceId: string) => {
  const source = DATA_SOURCES.find(src => src.id === sourceId);
  return source ? source.icon : <Database className="h-5 w-5 mr-2 text-gray-500" />;
};
