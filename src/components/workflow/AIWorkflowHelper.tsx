
import React, { useState } from 'react';
import { Bot, Brain, Database, Sparkles, ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useLocation } from 'react-router-dom';

interface AIWorkflowHelperProps {
  onAddNodes: (nodes: any[]) => void;
}

const AIWorkflowHelper: React.FC<AIWorkflowHelperProps> = ({ onAddNodes }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [useCase, setUseCase] = useState<string>('fraud_detection');
  const [description, setDescription] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestedNodes, setSuggestedNodes] = useState<any[]>([]);
  
  const useCaseOptions = [
    { value: 'fraud_detection', label: 'Fraud Detection' },
    { value: 'kyc', label: 'KYC Verification' },
    { value: 'underwriting', label: 'Loan Underwriting' },
    { value: 'collection', label: 'Collections' },
    { value: 'custom', label: 'Custom Journey' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate AI generation with predefined templates
    setTimeout(() => {
      let nodes = [];
      const baseX = 100;
      const baseY = 100;
      
      if (useCase === 'fraud_detection') {
        nodes = [
          {
            id: 'datasource-1',
            type: 'default',
            position: { x: baseX, y: baseY },
            data: { 
              label: 'Device Fingerprint',
              description: 'Collects device information',
              icon: <Database className="text-monnai-yellow" size={20} />,
              type: 'datasource'
            }
          },
          {
            id: 'datasource-2',
            type: 'default',
            position: { x: baseX, y: baseY + 150 },
            data: { 
              label: 'Transaction History',
              description: 'Historical transaction data',
              icon: <Database className="text-monnai-yellow" size={20} />,
              type: 'datasource'
            }
          },
          {
            id: 'model-1',
            type: 'default',
            position: { x: baseX + 300, y: baseY + 75 },
            data: { 
              label: 'Fraud Risk Model',
              description: 'ML model for fraud detection',
              icon: <Brain className="text-monnai-pink" size={20} />,
              type: 'model',
              modelType: 'binary'
            }
          },
          {
            id: 'agent-1',
            type: 'default',
            position: { x: baseX + 600, y: baseY + 75 },
            data: { 
              label: 'Fraud Review Agent',
              description: 'Agent for high-risk review',
              icon: <Bot className="text-monnai-blue" size={20} />,
              type: 'agent'
            }
          }
        ];
      } else if (useCase === 'kyc') {
        nodes = [
          {
            id: 'datasource-1',
            type: 'default',
            position: { x: baseX, y: baseY },
            data: { 
              label: 'ID Verification',
              description: 'Document verification service',
              icon: <Database className="text-monnai-yellow" size={20} />,
              type: 'datasource'
            }
          },
          {
            id: 'datasource-2',
            type: 'default',
            position: { x: baseX, y: baseY + 150 },
            data: { 
              label: 'Address Verification',
              description: 'Address validation service',
              icon: <Database className="text-monnai-yellow" size={20} />,
              type: 'datasource'
            }
          },
          {
            id: 'model-1',
            type: 'default',
            position: { x: baseX + 300, y: baseY + 75 },
            data: { 
              label: 'Identity Risk Model',
              description: 'ML model for identity validation',
              icon: <Brain className="text-monnai-pink" size={20} />,
              type: 'model',
              modelType: 'multiclass'
            }
          },
          {
            id: 'agent-1',
            type: 'default',
            position: { x: baseX + 600, y: baseY + 75 },
            data: { 
              label: 'KYC Agent',
              description: 'Agent for KYC approval',
              icon: <Bot className="text-monnai-blue" size={20} />,
              type: 'agent'
            }
          }
        ];
      } else {
        // Generate a basic template for other cases
        nodes = [
          {
            id: 'datasource-1',
            type: 'default',
            position: { x: baseX, y: baseY },
            data: { 
              label: 'Primary Data Source',
              description: 'Main data input',
              icon: <Database className="text-monnai-yellow" size={20} />,
              type: 'datasource'
            }
          },
          {
            id: 'model-1',
            type: 'default',
            position: { x: baseX + 300, y: baseY },
            data: { 
              label: 'Analysis Model',
              description: 'ML model for analysis',
              icon: <Brain className="text-monnai-pink" size={20} />,
              type: 'model',
              modelType: 'binary'
            }
          },
          {
            id: 'agent-1',
            type: 'default',
            position: { x: baseX + 600, y: baseY },
            data: { 
              label: 'Decision Agent',
              description: 'Agent for review',
              icon: <Bot className="text-monnai-blue" size={20} />,
              type: 'agent'
            }
          }
        ];
      }
      
      setSuggestedNodes(nodes);
      setIsGenerating(false);
      setStep(2);
    }, 2000);
  };

  const handleApply = () => {
    onAddNodes(suggestedNodes);
    setOpen(false);
    setStep(1);
    setDescription('');
  };

  const resetForm = () => {
    setStep(1);
    setUseCase('fraud_detection');
    setDescription('');
    setSuggestedNodes([]);
  };

  return (
    <>
      <Button
        onClick={() => {
          resetForm();
          setOpen(true);
        }}
        className="flex items-center gap-2"
        variant="secondary"
      >
        <Sparkles className="h-4 w-4" />
        <span>AI Journey Creator</span>
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-monnai-pink" />
              AI Journey Creator
            </DialogTitle>
            <DialogDescription>
              {step === 1 ? 
                "Let AI help you create a journey template." :
                "Review the suggested workflow."
              }
            </DialogDescription>
          </DialogHeader>
          
          {step === 1 ? (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>What type of journey are you creating?</Label>
                <RadioGroup 
                  value={useCase} 
                  onValueChange={setUseCase}
                  className="flex flex-col space-y-1"
                >
                  {useCaseOptions.map(option => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Describe your journey (optional)</Label>
                <Textarea
                  id="description"
                  placeholder="E.g. A journey to detect fraudulent transactions for high-value purchases"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              
              <DialogFooter className="sm:justify-between mt-6">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="gap-2"
                >
                  {isGenerating ? (
                    <>Generating<span className="animate-pulse">...</span></>
                  ) : (
                    <>
                      <Lightbulb className="h-4 w-4" />
                      Generate Suggestions
                    </>
                  )}
                </Button>
              </DialogFooter>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Suggested Workflow</Label>
                <div className="border rounded-md p-4 space-y-3">
                  {suggestedNodes.map((node, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {idx > 0 && <ArrowRight className="h-4 w-4 text-gray-400" />}
                      <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                        {node.data.icon}
                        <span className="text-sm">{node.data.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <DialogFooter className="sm:justify-between mt-6">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button onClick={handleApply}>
                  Apply to Workflow
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIWorkflowHelper;
