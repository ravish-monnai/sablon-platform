
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { 
  CreditCard, AlertTriangle, 
  Calculator, Briefcase, FileText 
} from "lucide-react";
import { toast } from "sonner";
import FeatureCategoryTabs from "./FeatureCategoryTabs";
import IncomeVerificationTab from "./categories/IncomeVerificationTab";
import CashFlowTab from "./categories/CashFlowTab";
import FraudDetectionTab from "./categories/FraudDetectionTab";
import PlaceholderTab from "./categories/PlaceholderTab";
import NewFeatureDialog from "./NewFeatureDialog";
import { getDataSourceIcon } from "./constants";

interface FeatureEngineeringTabProps {
  modelType: string;
}

const FeatureEngineeringTab: React.FC<FeatureEngineeringTabProps> = ({ modelType }) => {
  const [selectedCategory, setSelectedCategory] = useState("income-verification");
  
  const [features, setFeatures] = useState([
    { 
      id: 1, 
      name: "phone_verification_score", 
      description: "Score from phone verification system",
      source: "phone_basic",
      type: "numeric",
      importance: "high",
      transformation: "normalize"
    },
    { 
      id: 2, 
      name: "email_domain_age", 
      description: "Age of the email domain in days",
      source: "email_basic",
      type: "numeric",
      importance: "medium",
      transformation: "log"
    },
    { 
      id: 3, 
      name: "ip_country_match", 
      description: "Boolean indicating if IP country matches declared country",
      source: "ip_intelligence",
      type: "boolean",
      importance: "high",
      transformation: "none"
    },
  ]);
  
  const [isNewFeatureDialogOpen, setIsNewFeatureDialogOpen] = useState(false);
  const [newFeature, setNewFeature] = useState({
    name: "",
    description: "",
    source: "",
    type: "",
    transformation: "none",
    formula: ""
  });

  const handleAddFeature = () => {
    const featureId = features.length + 1;
    setFeatures([
      ...features, 
      { 
        id: featureId, 
        ...newFeature,
        importance: "medium" // Default importance
      }
    ]);
    
    setNewFeature({
      name: "",
      description: "",
      source: "",
      type: "",
      transformation: "none",
      formula: ""
    });
    setIsNewFeatureDialogOpen(false);
    
    toast.success("New feature added successfully", {
      description: `${newFeature.name} has been added to your feature set.`
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Feature Engineering</h3>
        <NewFeatureDialog
          isOpen={isNewFeatureDialogOpen}
          setIsOpen={setIsNewFeatureDialogOpen}
          newFeature={newFeature}
          setNewFeature={setNewFeature}
          handleAddFeature={handleAddFeature}
        />
      </div>
      
      <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
        <p className="text-sm text-slate-600 mb-2">
          <strong>Model Type:</strong> {modelType === 'binary' ? 'Binary Classification' : 
                        modelType === 'multiclass' ? 'Multi-class Classification' : 
                        modelType === 'regression' ? 'Regression' : modelType}
        </p>
        <p className="text-sm text-slate-600">
          Indian Bank Statement Analyzer features are configured to maximize predictive power for multiple classification tasks.
        </p>
      </div>
      
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <FeatureCategoryTabs
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <IncomeVerificationTab />
        <CashFlowTab />
        
        <PlaceholderTab
          value="debt-service"
          icon={<CreditCard className="h-10 w-10 text-muted-foreground" />}
          title="Debt Service Coverage Features"
          description="Configure debt-related features and analysis"
          buttonText="Configure Debt Features"
        />
        
        <PlaceholderTab
          value="risk-profiling"
          icon={<AlertTriangle className="h-10 w-10 text-muted-foreground" />}
          title="Risk Profiling Features"
          description="Configure risk assessment features"
          buttonText="Configure Risk Features"
        />
        
        <PlaceholderTab
          value="alternative-credit"
          icon={<Calculator className="h-10 w-10 text-muted-foreground" />}
          title="Alternative Credit Assessment"
          description="Configure alternative credit scoring features"
          buttonText="Configure Alt Credit Features"
        />
        
        <FraudDetectionTab />
        
        <PlaceholderTab
          value="automated-underwriting"
          icon={<Briefcase className="h-10 w-10 text-muted-foreground" />}
          title="Automated Underwriting Features"
          description="Configure automated underwriting features"
          buttonText="Configure Auto UW Features"
        />
      </Tabs>
    </div>
  );
};

export default FeatureEngineeringTab;
