
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Market } from '@/contexts/MarketContext';
import BankStatementTestResults from './BankStatementTestResults';

export interface BankStatementTestDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedMarket: Market;
  setSelectedMarket?: React.Dispatch<React.SetStateAction<Market>>;
}

const BankStatementTestDialog: React.FC<BankStatementTestDialogProps> = ({ 
  isOpen, 
  onOpenChange,
  selectedMarket = 'Global',
  setSelectedMarket
}) => {
  const [activeTab, setActiveTab] = useState('input');
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  
  const handleRunTest = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setHasResults(true);
      setActiveTab('results');
    }, 2000);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Test Bank Statement Analysis Agent</DialogTitle>
          <DialogDescription>
            {selectedMarket === 'Global' 
              ? 'Upload bank statements to test the analysis capabilities' 
              : `Upload ${selectedMarket} bank statements to test the analysis capabilities`}
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="input">Input</TabsTrigger>
            <TabsTrigger value="results" disabled={!hasResults}>Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="input" className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-12 text-center">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <svg
                  className="h-10 w-10 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-semibold">Drag & Drop your bank statement</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Supported formats: PDF, CSV, OFX, QFX
                </p>
                <p className="mt-2 text-xs text-muted-foreground">Max file size: 10MB</p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button onClick={handleRunTest} disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Run Analysis"}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="results" className="space-y-4">
            <BankStatementTestResults />
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab('input')}>
                Back to Input
              </Button>
              <Button onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default BankStatementTestDialog;
