
import React, { useState, useRef, useEffect } from 'react';
import { useMarket, Market } from '@/contexts/MarketContext';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, Globe, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MarketFilterProps {
  compact?: boolean;
}

const MarketFilter: React.FC<MarketFilterProps> = ({ compact = false }) => {
  const { selectedMarket, setSelectedMarket } = useMarket();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const markets: Market[] = ['Global', 'US', 'India', 'Indonesia', 'Philippines', 'Mexico', 'Brazil'];
  
  const filteredMarkets = markets.filter(market => 
    market.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Close popover when clicking outside
  const popoverRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={popoverRef} className={compact ? "w-40" : "mb-6 w-full"}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            role="combobox" 
            aria-expanded={open}
            className={`w-full justify-between ${compact ? "h-8 px-2 text-xs" : ""}`}
          >
            <div className="flex items-center">
              {selectedMarket === 'Global' ? (
                <Globe className="mr-2 h-3.5 w-3.5" />
              ) : null}
              <span className="truncate">{selectedMarket}</span>
            </div>
            <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40 p-0" align="start">
          <Command>
            <CommandInput 
              placeholder="Search market..." 
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="h-8"
            />
            <CommandList>
              <CommandEmpty>No market found.</CommandEmpty>
              <CommandGroup>
                {filteredMarkets.map((market) => (
                  <CommandItem
                    key={market}
                    value={market}
                    onSelect={() => {
                      setSelectedMarket(market as Market);
                      setOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-sm"
                  >
                    <div className="flex items-center">
                      {market === selectedMarket && (
                        <Check className="mr-2 h-3.5 w-3.5" />
                      )}
                      {market === 'Global' ? (
                        <Globe className="mr-2 h-3.5 w-3.5" />
                      ) : null}
                      <span>{market}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MarketFilter;
