
import React from 'react';
import { useMarket, Market } from '@/contexts/MarketContext';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin } from 'lucide-react';

const MarketFilter: React.FC = () => {
  const { selectedMarket, setSelectedMarket } = useMarket();
  
  const markets: Market[] = ['Global', 'US', 'India', 'Indonesia', 'Philippines', 'Mexico', 'Brazil'];
  
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Filter by Market</span>
      </div>
      <Tabs value={selectedMarket} onValueChange={(value) => setSelectedMarket(value as Market)}>
        <TabsList className="grid grid-cols-7">
          {markets.map((market) => (
            <TabsTrigger key={market} value={market} className="text-xs">
              {market}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default MarketFilter;
