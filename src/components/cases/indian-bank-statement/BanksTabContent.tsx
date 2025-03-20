
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

const BanksTabContent = () => {
  const banks = [
    { name: "HDFC Bank", statements: 48, description: "HDFC Bank statements processed by the AI analyzing salary credits, loan EMIs, and recurring payments." },
    { name: "State Bank of India", statements: 36, description: "SBI statements showing government payments, pension deposits, and utility bill payments." },
    { name: "ICICI Bank", statements: 29, description: "ICICI Bank statements with business transactions, GST payments, and vendor settlements." },
    { name: "Axis Bank", statements: 22, description: "Axis Bank statements showing credit card payments, investment transactions, and rent payments." },
    { name: "Kotak Mahindra", statements: 17, description: "Kotak Mahindra statements with mutual fund investments, stock trading, and bill payments." },
    { name: "Yes Bank", statements: 9, description: "Yes Bank statements showing business loans, overdraft usage, and international transfers." },
    { name: "Punjab National", statements: 6, description: "Punjab National Bank statements with agricultural loan disbursements, subsidies, and rural payments." }
  ];

  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {banks.map((bank, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="border rounded p-3 text-center relative cursor-help">
                  <p className="font-medium">{bank.name}</p>
                  <p className="text-sm text-muted-foreground">{bank.statements} statements</p>
                  <HelpCircle className="h-3.5 w-3.5 text-muted-foreground absolute top-2 right-2" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs">
                <p className="text-sm">{bank.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default BanksTabContent;
