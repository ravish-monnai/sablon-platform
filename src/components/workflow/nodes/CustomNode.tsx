
import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { NodeData } from '../types';

interface CustomNodeProps {
  id: string;
  data: NodeData;
  selected: boolean;
  isConnectable: boolean;
}

const CustomNode: React.FC<CustomNodeProps> = ({ id, data, selected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine background color based on type or explicit color
  const getBgColor = () => {
    if (data.color) return data.color;
    
    switch (data.type) {
      case 'datasource':
        return '#FEF9C3'; // Yellow
      case 'model':
        return '#F3E8FF'; // Purple
      case 'rule':
        return '#DBEAFE'; // Blue
      case 'notification':
        return '#DCFCE7'; // Green
      case 'agent':
        return '#E0E7FF'; // Indigo
      case 'alert':
        return '#FEE2E2'; // Red
      default:
        return '#F1F5F9'; // Default slate
    }
  };

  // Determine border color based on selection and status
  const getBorderColor = () => {
    if (selected) return 'border-blue-500';
    if (data.status === 'error') return 'border-red-500';
    if (data.status === 'warning') return 'border-yellow-500';
    if (data.status === 'success') return 'border-green-500';
    return 'border-gray-200';
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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

  // Determine what details to show when expanded
  const renderExpandedDetails = () => {
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
            {data.rules.map((rule, idx) => (
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

  return (
    <div 
      className={`p-3 rounded-lg shadow-md border ${getBorderColor()} max-w-xs transition-all duration-200`}
      style={{ backgroundColor: getBgColor() }}
    >
      {/* Input handle on the left */}
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={true}
        className="w-3 h-3 bg-gray-400 border-2 border-white"
      />
      
      {/* Output handle on the right */}
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={true}
        className="w-3 h-3 bg-gray-400 border-2 border-white"
      />
      
      <div className="flex items-center">
        {data.icon && <div className="mr-2">{data.icon}</div>}
        <div className="flex-1">
          <div className="font-medium text-gray-800 text-sm">{data.label}</div>
          <div className="text-xs text-gray-600">{data.description}</div>
        </div>
        
        {/* Show expand button only if we have additional details */}
        {(data.apiSpecs || data.featureExtraction || data.riskAssessment || data.caseConfiguration || (data.rules && data.rules.length > 0)) && (
          <button 
            className="ml-1 text-gray-500 hover:text-gray-700"
            onClick={toggleExpand}
          >
            {isExpanded ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
        )}
      </div>
      
      {/* Expandable section with details */}
      {isExpanded && (
        <div className="mt-2 border-t pt-2 border-gray-200">
          {renderExpandedDetails()}
        </div>
      )}
    </div>
  );
};

export default CustomNode;
