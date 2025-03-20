
import React from 'react';
import { Database, Server, FileText, Network, Cloud, Shield, FolderInput } from 'lucide-react';
import { ToolbarSectionProps } from './types';

export const getDataSourcesSection = (): ToolbarSectionProps => {
  const dataSources = [
    // Input data sources (secure)
    { type: "datasource", label: "S3 Input", icon: <Cloud className="text-yellow-500" size={16} />, data: { subtype: "s3_input", isSecure: true } },
    { type: "datasource", label: "SFTP Input", icon: <Server className="text-yellow-500" size={16} />, data: { subtype: "sftp_input", isSecure: true } },
    { type: "datasource", label: "API Input", icon: <Network className="text-yellow-500" size={16} />, data: { subtype: "api_input", isSecure: true } },
    { type: "datasource", label: "Secure Upload", icon: <Shield className="text-yellow-500" size={16} />, data: { subtype: "secure_upload", isSecure: true } },
    
    // Regular data sources
    { type: "datasource", label: "Database", icon: <Database className="text-yellow-500" size={16} />, data: { subtype: "database" } },
    { type: "datasource", label: "Document Data", icon: <FileText className="text-yellow-500" size={16} />, data: { subtype: "file_data" } },
  ];

  return {
    title: "Input Data",
    icon: <FolderInput className="text-yellow-500 mr-2" size={16} />,
    items: dataSources
  };
};

export default getDataSourcesSection;
