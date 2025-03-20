
import React from "react";

const BanksTabContent = () => {
  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="border rounded p-3 text-center">
          <p className="font-medium">HDFC Bank</p>
          <p className="text-sm text-muted-foreground">48 statements</p>
        </div>
        <div className="border rounded p-3 text-center">
          <p className="font-medium">State Bank of India</p>
          <p className="text-sm text-muted-foreground">36 statements</p>
        </div>
        <div className="border rounded p-3 text-center">
          <p className="font-medium">ICICI Bank</p>
          <p className="text-sm text-muted-foreground">29 statements</p>
        </div>
        <div className="border rounded p-3 text-center">
          <p className="font-medium">Axis Bank</p>
          <p className="text-sm text-muted-foreground">22 statements</p>
        </div>
        <div className="border rounded p-3 text-center">
          <p className="font-medium">Kotak Mahindra</p>
          <p className="text-sm text-muted-foreground">17 statements</p>
        </div>
        <div className="border rounded p-3 text-center">
          <p className="font-medium">Yes Bank</p>
          <p className="text-sm text-muted-foreground">9 statements</p>
        </div>
        <div className="border rounded p-3 text-center">
          <p className="font-medium">Punjab National</p>
          <p className="text-sm text-muted-foreground">6 statements</p>
        </div>
      </div>
    </div>
  );
};

export default BanksTabContent;
