
import React, { useState } from 'react';
import { NodeProps } from '@xyflow/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NodeData } from '../types';
import { getNodeColorByType, getStatusBorder } from '../utils/nodeStyles';

const CustomNode = ({ data, id, selected }: NodeProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  // Type assertion to ensure TypeScript understands this is NodeData
  const nodeData = data as NodeData;
  
  // Use the same styling as in the journey steps tab
  const backgroundColor = nodeData.color || getNodeColorByType(nodeData.type);
  const statusBorder = getStatusBorder(nodeData.status);
  const hasRules = nodeData.rules && nodeData.rules.length > 0;
  
  // Determine if this node has additional configuration details
  const hasApiSpecs = nodeData.apiSpecs !== undefined;
  const hasFeatureExtraction = nodeData.featureExtraction !== undefined;
  const hasRiskAssessment = nodeData.riskAssessment !== undefined;
  const hasCaseConfiguration = nodeData.caseConfiguration !== undefined;
  const hasDetails = hasApiSpecs || hasFeatureExtraction || hasRiskAssessment || hasCaseConfiguration;
  
  return (
    <div 
      className={`flex flex-col items-center rounded-md shadow-md ${statusBorder} transition-all duration-200`}
      style={{ 
        backgroundColor: backgroundColor,
        borderWidth: '2px',
        minWidth: hasDetails && showDetails ? '280px' : '130px',
        minHeight: hasDetails && showDetails ? '200px' : '90px',
        transform: selected ? 'scale(1.05)' : 'scale(1)',
        maxWidth: hasDetails && showDetails ? '350px' : 'auto'
      }}
    >
      <div className="p-3 flex flex-col items-center w-full">
        {nodeData.icon && (
          <div className="rounded-full bg-white p-2 mb-2 shadow-sm">
            {nodeData.icon}
          </div>
        )}
        <div className="text-sm font-medium text-white">{nodeData.label}</div>
        <div className="text-xs text-white opacity-80 mt-1 text-center line-clamp-2">{nodeData.description}</div>
        
        {/* Rules indicator badge */}
        {hasRules && (
          <Badge className="mt-2 bg-white text-black border border-white">
            {nodeData.rules?.length} {nodeData.rules?.length === 1 ? 'Rule' : 'Rules'}
          </Badge>
        )}
        
        {/* Toggle details button (only show if node has details) */}
        {hasDetails && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="mt-1 bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-30"
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? (
              <>
                <ChevronUp className="mr-1 h-3 w-3" /> Hide Details
              </>
            ) : (
              <>
                <ChevronDown className="mr-1 h-3 w-3" /> Show Details
              </>
            )}
          </Button>
        )}
      </div>
      
      {/* Details section */}
      {hasDetails && showDetails && (
        <div className="w-full bg-white bg-opacity-10 p-3 rounded-b-md text-white text-xs">
          <ScrollArea className="h-[180px]">
            {/* API Specs */}
            {hasApiSpecs && (
              <div className="mb-3">
                <h4 className="font-bold mb-1 text-white">API Specifications:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Endpoint: {nodeData.apiSpecs?.endpoint}</li>
                  <li>Method: {nodeData.apiSpecs?.method}</li>
                  <li>Auth: {nodeData.apiSpecs?.authType}</li>
                  {nodeData.apiSpecs?.s3Config && (
                    <>
                      <li className="font-semibold mt-1">S3 Configuration:</li>
                      <ul className="list-disc list-inside ml-3">
                        <li>Bucket: {nodeData.apiSpecs.s3Config.bucketName}</li>
                        <li>Region: {nodeData.apiSpecs.s3Config.region}</li>
                        <li>File Types: {nodeData.apiSpecs.s3Config.allowedFileTypes?.join(', ')}</li>
                        <li>Max Size: {nodeData.apiSpecs.s3Config.maxFileSize}</li>
                      </ul>
                    </>
                  )}
                </ul>
              </div>
            )}
            
            {/* Feature Extraction */}
            {hasFeatureExtraction && (
              <div className="mb-3">
                <h4 className="font-bold mb-1 text-white">Features Extracted:</h4>
                <ul className="list-disc list-inside grid grid-cols-1 gap-1">
                  {nodeData.featureExtraction?.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-2">
                  <p>Models: {nodeData.featureExtraction?.models?.join(', ')}</p>
                  <p>Confidence: {nodeData.featureExtraction?.confidenceThreshold}%</p>
                </div>
              </div>
            )}
            
            {/* Risk Assessment */}
            {hasRiskAssessment && (
              <div className="mb-3">
                <h4 className="font-bold mb-1 text-white">Risk Assessment:</h4>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  <p>High Risk: ≥{nodeData.riskAssessment?.thresholds?.highRisk}</p>
                  <p>Medium Risk: ≥{nodeData.riskAssessment?.thresholds?.mediumRisk}</p>
                  <p>Low Risk: ≥{nodeData.riskAssessment?.thresholds?.lowRisk}</p>
                  <p>Auto-Decision: {nodeData.riskAssessment?.autoDecision ? 'Yes' : 'No'}</p>
                </div>
                <h5 className="font-semibold mt-1">Key Risk Factors:</h5>
                <ul className="list-disc list-inside">
                  {nodeData.riskAssessment?.factors?.slice(0, 4).map((factor, index) => (
                    <li key={index}>{factor}</li>
                  ))}
                  {nodeData.riskAssessment?.factors && nodeData.riskAssessment.factors.length > 4 && (
                    <li>+{nodeData.riskAssessment.factors.length - 4} more factors</li>
                  )}
                </ul>
              </div>
            )}
            
            {/* Case Configuration */}
            {hasCaseConfiguration && (
              <div>
                <h4 className="font-bold mb-1 text-white">Case Configuration:</h4>
                <ul className="list-disc list-inside">
                  <li>Type: {nodeData.caseConfiguration?.caseType}</li>
                  <li>Priority: {nodeData.caseConfiguration?.priority}</li>
                  <li>Team: {nodeData.caseConfiguration?.assignedTeam}</li>
                  <li>SLA: {nodeData.caseConfiguration?.slaHours} hours</li>
                  <li>Auto-Notify: {nodeData.caseConfiguration?.autoNotify ? 'Yes' : 'No'}</li>
                </ul>
              </div>
            )}
          </ScrollArea>
        </div>
      )}
      
      {/* Node identifier badge */}
      <div className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 shadow-sm">
        <span className="text-xs font-bold">{id && typeof id === 'string' ? id.split('-')[1] || '1' : '1'}</span>
      </div>
      
      {/* Edit instruction */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 text-white text-[8px] text-center py-1 rounded-b-sm">
        Double-click to edit
      </div>
    </div>
  );
};

export default CustomNode;
