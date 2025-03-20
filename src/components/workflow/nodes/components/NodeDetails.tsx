
import React from 'react';
import { NodeData, AnalysisRule } from '../../types';

interface NodeDetailsProps {
  data: NodeData;
}

const NodeDetails: React.FC<NodeDetailsProps> = ({ data }) => {
  // Helper to render object properties in a readable format
  const renderObjectProperties = (obj: Record<string, any>, depth = 0): JSX.Element => {
    if (!obj) return <></>;
    
    return (
      <div className={`pl-${depth * 2}`}>
        {Object.entries(obj).map(([key, value]) => {
          // Skip rendering React elements or functions
          if (React.isValidElement(value) || typeof value === 'function') {
            return null;
          }
          
          // Format the key for display
          const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
          
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            return (
              <div key={key} className="mt-1">
                <div className="font-medium text-gray-700">{formattedKey}:</div>
                {renderObjectProperties(value, depth + 1)}
              </div>
            );
          } else if (Array.isArray(value)) {
            return (
              <div key={key} className="mt-1">
                <div className="font-medium text-gray-700">{formattedKey}:</div>
                <ul className="pl-4 list-disc text-xs">
                  {value.map((item, i) => (
                    <li key={i} className="mt-0.5">{item}</li>
                  ))}
                </ul>
              </div>
            );
          } else {
            return (
              <div key={key} className="mt-0.5 text-xs">
                <span className="font-medium text-gray-700">{formattedKey}: </span>
                <span>{value?.toString()}</span>
              </div>
            );
          }
        })}
      </div>
    );
  };

  // API Specifications
  if (data.apiSpecs) {
    return (
      <div className="mt-2 text-xs">
        <div className="font-semibold">API Specifications:</div>
        {renderObjectProperties(data.apiSpecs)}
      </div>
    );
  }
  
  // Feature Extraction
  if (data.featureExtraction) {
    return (
      <div className="mt-2 text-xs">
        <div className="font-semibold">Feature Extraction:</div>
        {renderObjectProperties(data.featureExtraction)}
      </div>
    );
  }
  
  // Risk Assessment
  if (data.riskAssessment) {
    return (
      <div className="mt-2 text-xs">
        <div className="font-semibold">Risk Assessment:</div>
        {renderObjectProperties(data.riskAssessment)}
      </div>
    );
  }
  
  // Case Configuration
  if (data.caseConfiguration) {
    return (
      <div className="mt-2 text-xs">
        <div className="font-semibold">Case Configuration:</div>
        {renderObjectProperties(data.caseConfiguration)}
      </div>
    );
  }
  
  // Rules
  if (data.rules && data.rules.length > 0) {
    return (
      <div className="mt-2 text-xs">
        <div className="font-semibold">Rules:</div>
        <ul className="pl-4 list-disc">
          {data.rules.map((rule: AnalysisRule, idx: number) => (
            <li key={idx}>{rule.condition} {rule.operator} {rule.value} → {rule.action}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  return (
    <div className="text-xs text-gray-500 mt-2">
      No additional configuration details available
    </div>
  );
};

export default NodeDetails;
