
import React from 'react';
import { Upload, Server, Network, Cloud, Shield, LogOut } from 'lucide-react';
import { ToolbarSectionProps } from './types';

export const getOutputResponseSection = (): ToolbarSectionProps => {
  const outputTypes = [
    { 
      type: "output", 
      label: "S3 Output", 
      icon: <Cloud className="text-orange-500" size={16} />, 
      data: { outputType: "s3", isSecure: true } 
    },
    { 
      type: "output", 
      label: "SFTP Output", 
      icon: <Server className="text-orange-500" size={16} />, 
      data: { outputType: "sftp", isSecure: true } 
    },
    { 
      type: "output", 
      label: "API Response", 
      icon: <Network className="text-orange-500" size={16} />, 
      data: { outputType: "api", isSecure: true } 
    },
    { 
      type: "output", 
      label: "Secure Download", 
      icon: <Shield className="text-orange-500" size={16} />, 
      data: { outputType: "secure_download", isSecure: true } 
    },
    { 
      type: "output", 
      label: "File Export", 
      icon: <Upload className="text-orange-500" size={16} />, 
      data: { outputType: "file_export", isSecure: true } 
    },
  ];

  return {
    title: "Output Response",
    icon: <LogOut className="text-orange-500 mr-2" size={16} />,
    items: outputTypes
  };
};

export default getOutputResponseSection;
