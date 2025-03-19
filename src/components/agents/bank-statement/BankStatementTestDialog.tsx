
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Upload, PlayCircle } from 'lucide-react';
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
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto">
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
                <Upload
                  className="h-10 w-10 text-muted-foreground"
                />
                <h3 className="mt-4 text-lg font-semibold">Drag & Drop your bank statement</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Supported formats: PDF, CSV, OFX, QFX
                </p>
                <p className="mt-2 text-xs text-muted-foreground">Max file size: 10MB</p>
                
                <div className="mt-6 flex gap-2">
                  <Button variant="outline" className="mt-2">
                    Browse Files
                  </Button>
                  <Button variant="outline" className="mt-2">
                    Use Sample
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button onClick={handleRunTest} disabled={isProcessing} className="flex items-center gap-2">
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <PlayCircle className="h-4 w-4" />
                    Run Analysis
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="results" className="py-4">
            <BankStatementTestResults />
            
            <div className="flex justify-between mt-6">
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
