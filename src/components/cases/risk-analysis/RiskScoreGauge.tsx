
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Shield } from "lucide-react";

interface RiskScoreGaugeProps {
  score: number;
}

const RiskScoreGauge: React.FC<RiskScoreGaugeProps> = ({ score }) => {
  // Calculate the position of the needle based on the score (0-999)
  const needlePosition = (score / 999) * 100;
  
  // Determine the risk level based on the score
  const getRiskLevel = () => {
    if (score < 300) return { text: "LOW RISK", color: "text-green-500", bg: "bg-green-50", icon: CheckCircle };
    if (score < 600) return { text: "MEDIUM RISK", color: "text-amber-500", bg: "bg-amber-50", icon: Shield };
    return { text: "HIGH RISK", color: "text-red-500", bg: "bg-red-50", icon: AlertTriangle };
  };
  
  const riskLevel = getRiskLevel();
  const Icon = riskLevel.icon;

  // Calculate percentage as human-readable indicator
  const riskPercentage = Math.round((score / 999) * 100);
  
  // Risk category description based on score range
  const getRiskCategory = () => {
    if (score < 100) return "Very Low";
    if (score < 200) return "Low";
    if (score < 300) return "Low-Medium";
    if (score < 400) return "Medium";
    if (score < 500) return "Medium-High";
    if (score < 600) return "High";
    if (score < 800) return "Very High";
    return "Extreme";
  };

  return (
    <Card className="border border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center">
          <Shield className="h-5 w-5 mr-2 text-[#9b87f5]" />
          Risk Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-36 h-36 flex-shrink-0">
            {/* Circular gauge background */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {/* Risk level segments */}
              <div className="w-full h-full bg-gray-100">
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    {/* Low risk segment (0-30%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="10"
                      strokeDasharray={`${30 * 2.83} ${70 * 2.83}`}
                      className="transition-all duration-1000"
                    />
                    {/* Medium risk segment (30-60%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="10"
                      strokeDasharray={`${30 * 2.83} ${70 * 2.83}`}
                      strokeDashoffset={`${-30 * 2.83}`}
                      className="transition-all duration-1000"
                    />
                    {/* High risk segment (60-100%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="10"
                      strokeDasharray={`${40 * 2.83} ${60 * 2.83}`}
                      strokeDashoffset={`${-60 * 2.83}`}
                      className="transition-all duration-1000"
                    />
                    {/* Score indicator */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="#ffffff"
                      className="transition-all duration-1000"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Score display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`text-3xl font-bold ${riskLevel.color}`}>{score}</div>
              <div className="text-xs text-muted-foreground">of 999</div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className={`flex items-center justify-between p-3 rounded-md ${riskLevel.bg}`}>
              <div className="flex items-center">
                <Icon className={`h-5 w-5 mr-2 ${riskLevel.color}`} />
                <span className={`font-medium ${riskLevel.color}`}>{riskLevel.text}</span>
              </div>
              <span className={`text-sm ${riskLevel.color}`}>{riskPercentage}% Risk Factor</span>
            </div>
            
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Risk Category</span>
                  <span className="text-sm text-muted-foreground">{getRiskCategory()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-gradient-to-r from-green-500 via-amber-500 to-red-500" 
                    style={{width: `${riskPercentage}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="pt-2 text-xs text-muted-foreground">
                <p>Score calculated using 47 verification data points and 12 risk models</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskScoreGauge;
