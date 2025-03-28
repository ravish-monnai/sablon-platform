
import { Phone, Mail, Globe, Shield, BarChart2 } from "lucide-react";

export interface AnalysisStep {
  message: string;
  icon: typeof Phone | typeof Mail | typeof Globe | typeof Shield | typeof BarChart2;
  duration: number;
}

export const getAnalysisSteps = (): AnalysisStep[] => {
  return [
    { message: "Querying telecom data sources...", icon: Phone, duration: 800 },
    { message: "Analyzing email information...", icon: Mail, duration: 800 },
    { message: "Gathering digital footprint data...", icon: Globe, duration: 800 },
    { message: "Checking identity data sources...", icon: Shield, duration: 800 },
    { message: "Running risk assessment algorithms...", icon: BarChart2, duration: 800 }
  ];
};

export const runAnalysisAnimation = async (
  setCurrentAnalysisStep: (step: string) => void
): Promise<void> => {
  const steps = getAnalysisSteps();
  
  for (const step of steps) {
    setCurrentAnalysisStep(step.message);
    await new Promise(resolve => setTimeout(resolve, step.duration));
  }
};
