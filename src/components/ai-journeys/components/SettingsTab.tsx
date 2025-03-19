
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useMarket } from "@/contexts/MarketContext";
import { getBanksByMarket } from "@/components/ai-journeys/MarketSpecificBanks";

const SettingsTab: React.FC = () => {
  const { selectedMarket } = useMarket();
  const banks = getBanksByMarket(selectedMarket);
  
  // Define payment methods based on market
  const getPaymentMethods = () => {
    switch (selectedMarket) {
      case 'India':
        return ["UPI", "IMPS", "NEFT", "RTGS", "Google Pay", "PhonePe", "Paytm"];
      case 'US':
        return ["ACH", "Wire Transfer", "Zelle", "Venmo", "Cash App", "PayPal"];
      case 'Mexico':
        return ["SPEI", "CoDi", "Oxxo Pay", "Mercado Pago", "PayPal"];
      case 'Brazil':
        return ["PIX", "Boleto", "TED", "DOC", "Nubank", "PagSeguro"];
      default:
        return ["SWIFT", "Wire Transfer", "Digital Wallets", "Revolut", "Wise", "PayPal"];
    }
  };
  
  return (
    <div className="pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Journey Configuration</CardTitle>
          <CardDescription>Configure how the Bank Statement Analyzer Agent works{selectedMarket !== 'Global' ? ` for ${selectedMarket}` : ''}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Supported Banks</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {banks.map((bank, index) => (
                <Badge key={index} variant="outline" className="justify-start">{bank.name}</Badge>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <h4 className="font-medium">Payment Method Detection</h4>
            <p className="text-sm text-muted-foreground">Specialized detection for payment methods {selectedMarket !== 'Global' ? `common in ${selectedMarket}` : 'across global markets'}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {getPaymentMethods().map((method, index) => (
                <Badge key={index} variant="outline" className="justify-start">{method}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsTab;
