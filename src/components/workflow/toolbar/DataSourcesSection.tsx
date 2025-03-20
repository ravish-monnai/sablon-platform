
import React from 'react';
import { Phone, Mail, MapPin, Network, IdCard, FileText, Database } from 'lucide-react';
import { ToolbarSectionProps } from './types';

export const getDataSourcesSection = (): ToolbarSectionProps => {
  const dataSources = [
    { type: "datasource", label: "Phone Data", icon: <Phone className="text-yellow-500" size={16} />, data: { subtype: "phone_data" } },
    { type: "datasource", label: "Email Data", icon: <Mail className="text-yellow-500" size={16} />, data: { subtype: "email_data" } },
    { type: "datasource", label: "Location Data", icon: <MapPin className="text-yellow-500" size={16} />, data: { subtype: "location_data" } },
    { type: "datasource", label: "Network Data", icon: <Network className="text-yellow-500" size={16} />, data: { subtype: "network_data" } },
    { type: "datasource", label: "Identity Data", icon: <IdCard className="text-yellow-500" size={16} />, data: { subtype: "identity_data" } },
    { type: "datasource", label: "Document Data", icon: <FileText className="text-yellow-500" size={16} />, data: { subtype: "file_data" } },
  ];

  return {
    title: "Data Sources",
    icon: <Database className="text-yellow-500 mr-2" size={16} />,
    items: dataSources
  };
};

export default getDataSourcesSection;
