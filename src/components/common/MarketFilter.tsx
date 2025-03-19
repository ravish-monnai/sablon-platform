
import React from 'react';
import { useMarket, Market } from '@/contexts/MarketContext';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin } from 'lucide-react';

interface MarketFilterProps {
  compact?: boolean;
}

const MarketFilter: React.FC<MarketFilterProps> = ({ compact = false }) => {
  const { selectedMarket, setSelectedMarket } = useMarket();
  
  const markets: Market[] = ['Global', 'US', 'India', 'Indonesia', 'Philippines', 'Mexico', 'Brazil'];
  
  return (
    <div className={compact ? "" : "mb-6"}>
      {!compact && (
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Filter by Market</span>
        </div>
      )}
      <Tabs value={selectedMarket} onValueChange={(value) => setSelectedMarket(value as Market)}>
        <TabsList className={`grid ${compact ? "grid-cols-4 gap-1 mb-2" : "grid-cols-7"}`}>
          {markets.map((market) => (
            <TabsTrigger 
              key={market} 
              value={market} 
              className={`text-xs ${compact && "py-1 px-2"}`}
            >
              {market === 'Global' ? 'All' : market}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default MarketFilter;
