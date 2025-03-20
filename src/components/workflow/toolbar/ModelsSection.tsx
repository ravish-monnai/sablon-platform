
import React from 'react';
import { Brain, ChartBar, Clock } from 'lucide-react';
import { ToolbarSectionProps } from './types';

export const getModelsSection = (): ToolbarSectionProps => {
  const models = [
    { 
      type: "model", 
      label: "Binary Classifier", 
      icon: <Brain className="text-pink-600" size={16} />, 
      data: { modelType: "binary" } 
    },
    { 
      type: "model", 
      label: "Multi-class Classifier", 
      icon: <Brain className="text-pink-600" size={16} />, 
      data: { modelType: "multiclass" } 
    },
    { 
      type: "model", 
      label: "Regression Model", 
      icon: <ChartBar className="text-pink-600" size={16} />, 
      data: { modelType: "regression" } 
    },
    { 
      type: "model", 
      label: "Time Series Model", 
      icon: <Clock className="text-pink-600" size={16} />, 
      data: { modelType: "timeseries" } 
    },
  ];

  return {
    title: "Models",
    icon: <Brain className="text-pink-600 mr-2" size={16} />,
    items: models
  };
};

export default getModelsSection;
