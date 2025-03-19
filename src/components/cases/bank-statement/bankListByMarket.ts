
import { Market } from "@/contexts/MarketContext";

interface Bank {
  name: string;
  count: number;
}

export const bankListByMarket = (market: string): Bank[] => {
  switch (market) {
    case 'India':
      return [
        { name: "HDFC Bank", count: 48 },
        { name: "State Bank of India", count: 36 },
        { name: "ICICI Bank", count: 29 },
        { name: "Axis Bank", count: 22 },
        { name: "Kotak Mahindra", count: 17 },
        { name: "Yes Bank", count: 9 },
        { name: "Punjab National", count: 6 }
      ];
    case 'US':
      return [
        { name: "Bank of America", count: 43 },
        { name: "JPMorgan Chase", count: 38 },
        { name: "Wells Fargo", count: 27 },
        { name: "Citibank", count: 22 },
        { name: "Capital One", count: 15 },
        { name: "US Bank", count: 11 },
        { name: "TD Bank", count: 8 }
      ];
    case 'Mexico':
      return [
        { name: "BBVA", count: 32 },
        { name: "Santander", count: 28 },
        { name: "Banorte", count: 25 },
        { name: "Citibanamex", count: 19 },
        { name: "HSBC Mexico", count: 12 }
      ];
    default:
      return [
        { name: "Global Bank 1", count: 35 },
        { name: "Global Bank 2", count: 29 },
        { name: "Global Bank 3", count: 24 },
        { name: "Global Bank 4", count: 18 },
        { name: "Global Bank 5", count: 14 },
        { name: "Global Bank 6", count: 10 },
        { name: "Global Bank 7", count: 7 }
      ];
  }
};
