
import React from "react";
import { bankListByMarket } from "./bankListByMarket";

const BanksTabContent = () => {
  // Use a default global market for consistent display
  const banks = bankListByMarket("Global");
  
  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {banks.map((bank, index) => (
          <div key={index} className="border rounded p-3 text-center">
            <p className="font-medium">{bank.name}</p>
            <p className="text-sm text-muted-foreground">{bank.count} statements</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BanksTabContent;
