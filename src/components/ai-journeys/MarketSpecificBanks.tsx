
import React from "react";
import { Market } from "@/contexts/MarketContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, BuildingBank } from "lucide-react";

// Bank data for different markets
export const getBanksByMarket = (market: Market) => {
  const banksByMarket = {
    'Global': [
      { name: "JPMorgan Chase", type: "Global Bank" },
      { name: "HSBC", type: "Global Bank" },
      { name: "Citibank", type: "Global Bank" },
      { name: "Standard Chartered", type: "Global Bank" },
      { name: "Deutsche Bank", type: "Global Bank" }
    ],
    'US': [
      { name: "Bank of America", type: "National Bank" },
      { name: "Wells Fargo", type: "National Bank" },
      { name: "JPMorgan Chase", type: "National Bank" },
      { name: "Citibank", type: "National Bank" },
      { name: "Capital One", type: "National Bank" }
    ],
    'India': [
      { name: "State Bank of India", type: "Public Sector Bank" },
      { name: "HDFC Bank", type: "Private Bank" },
      { name: "ICICI Bank", type: "Private Bank" },
      { name: "Axis Bank", type: "Private Bank" },
      { name: "Punjab National Bank", type: "Public Sector Bank" }
    ],
    'Indonesia': [
      { name: "Bank Mandiri", type: "State-Owned Bank" },
      { name: "Bank Central Asia", type: "Private Bank" },
      { name: "Bank Rakyat Indonesia", type: "State-Owned Bank" },
      { name: "Bank Negara Indonesia", type: "State-Owned Bank" },
      { name: "CIMB Niaga", type: "Private Bank" }
    ],
    'Philippines': [
      { name: "BDO Unibank", type: "Universal Bank" },
      { name: "Bank of the Philippine Islands", type: "Universal Bank" },
      { name: "Metropolitan Bank and Trust Company", type: "Universal Bank" },
      { name: "Philippine National Bank", type: "Universal Bank" },
      { name: "Land Bank of the Philippines", type: "State-Owned Bank" }
    ],
    'Mexico': [
      { name: "BBVA Mexico", type: "Commercial Bank" },
      { name: "Santander Mexico", type: "Commercial Bank" },
      { name: "Banorte", type: "Commercial Bank" },
      { name: "Citibanamex", type: "Commercial Bank" },
      { name: "HSBC Mexico", type: "Commercial Bank" }
    ],
    'Brazil': [
      { name: "Itaú Unibanco", type: "Commercial Bank" },
      { name: "Banco do Brasil", type: "State-Owned Bank" },
      { name: "Bradesco", type: "Commercial Bank" },
      { name: "Caixa Econômica Federal", type: "State-Owned Bank" },
      { name: "Santander Brasil", type: "Commercial Bank" }
    ]
  };
  
  return banksByMarket[market] || banksByMarket['Global'];
};

interface MarketSpecificBanksProps {
  market: Market;
}

const MarketSpecificBanks: React.FC<MarketSpecificBanksProps> = ({ market }) => {
  const banks = getBanksByMarket(market);
  
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">
        Supported Banks {market !== 'Global' ? `in ${market}` : '(Global)'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {banks.map((bank, index) => (
          <Card key={index} className="bg-card hover:bg-accent/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                <BuildingBank className="h-4 w-4 mr-2 text-primary" />
                {bank.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{bank.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarketSpecificBanks;
