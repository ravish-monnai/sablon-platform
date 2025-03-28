
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RiskScoreGaugeProps {
  score: number;
}

const RiskScoreGauge: React.FC<RiskScoreGaugeProps> = ({ score }) => {
  // Calculate the position of the needle based on the score (0-999)
  const needlePosition = (score / 999) * 100;
  
  // Determine the risk level based on the score
  const getRiskLevel = () => {
    if (score < 300) return { text: "LOW RISK", color: "text-green-500" };
    if (score < 600) return { text: "MEDIUM RISK", color: "text-amber-500" };
    return { text: "HIGH RISK", color: "text-red-500" };
  };
  
  const riskLevel = getRiskLevel();

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Risk Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md h-40">
            {/* Gauge background */}
            <div className="absolute bottom-0 w-full h-24 overflow-hidden">
              <div className="relative w-full h-48 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                {/* Green section (0-300) */}
                <div className="absolute bottom-0 left-0 w-1/3 h-48 bg-gradient-to-r from-green-500 to-green-300" style={{ borderTopRightRadius: "100%", borderBottomRightRadius: "0%" }}></div>
                
                {/* Yellow section (300-600) */}
                <div className="absolute bottom-0 left-1/3 w-1/3 h-48 bg-gradient-to-r from-amber-300 to-amber-500" style={{ borderRadius: "0%" }}></div>
                
                {/* Red section (600-999) */}
                <div className="absolute bottom-0 right-0 w-1/3 h-48 bg-gradient-to-r from-amber-500 to-red-500" style={{ borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%" }}></div>
              </div>
            </div>
            
            {/* Score text */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
              <div className={`text-4xl font-bold ${riskLevel.color}`}>{score}</div>
              <div className={`text-sm font-medium ${riskLevel.color}`}>{riskLevel.text}</div>
            </div>
            
            {/* Gauge markers */}
            <div className="absolute bottom-0 w-full px-2 flex justify-between text-xs text-gray-500">
              <span>0</span>
              <span>200</span>
              <span>400</span>
              <span>600</span>
              <span>800</span>
              <span>999</span>
            </div>
            
            {/* Needle */}
            <div 
              className="absolute bottom-24 left-1/2 w-1 h-16 bg-gray-800 origin-bottom transform -translate-x-1/2 z-10"
              style={{ transform: `translateX(-50%) rotate(${(needlePosition - 50) * 1.8}deg)` }}
            >
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-gray-800"></div>
            </div>
            
            {/* Center point */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-gray-800 z-20"></div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Score is calculated based on digital footprint analysis, verification signals, and pattern recognition.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskScoreGauge;
