
import React from 'react';
import { Database, ServerCog, GitMerge, RefreshCw, SquareStack } from 'lucide-react';
import { ToolbarSectionProps } from './types';

export const getDataStoreSection = (): ToolbarSectionProps => {
  const dataStores = [
    { type: "datastore", label: "Data Warehouse", icon: <Database className="text-emerald-600" size={16} />, data: { subtype: "warehouse" } },
    { type: "datastore", label: "Data Lake", icon: <SquareStack className="text-emerald-600" size={16} />, data: { subtype: "lake" } },
    { type: "datastore", label: "Cache", icon: <ServerCog className="text-emerald-600" size={16} />, data: { subtype: "cache" } },
    { type: "transformation", label: "Data Transform", icon: <GitMerge className="text-emerald-600" size={16} />, data: { subtype: "transform" } },
    { type: "transformation", label: "Data Cleansing", icon: <RefreshCw className="text-emerald-600" size={16} />, data: { subtype: "cleansing" } },
  ];

  return {
    title: "Data Store & Transform",
    icon: <Database className="text-emerald-600 mr-2" size={16} />,
    items: dataStores
  };
};

export default getDataStoreSection;
