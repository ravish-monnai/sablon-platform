
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define available markets
export type Market = 'Global' | 'US' | 'India' | 'Indonesia' | 'Philippines' | 'Mexico' | 'Brazil';

interface MarketContextType {
  selectedMarket: Market;
  setSelectedMarket: (market: Market) => void;
}

const MarketContext = createContext<MarketContextType | undefined>(undefined);

export const MarketProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [selectedMarket, setSelectedMarket] = useState<Market>('Global');

  return (
    <MarketContext.Provider value={{ selectedMarket, setSelectedMarket }}>
      {children}
    </MarketContext.Provider>
  );
};

export const useMarket = (): MarketContextType => {
  const context = useContext(MarketContext);
  if (context === undefined) {
    throw new Error('useMarket must be used within a MarketProvider');
  }
  return context;
};
