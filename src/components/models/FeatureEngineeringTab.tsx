
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Check, Plus, Database, Mail, Phone, Network, MapPin, IdCard, DollarSign, Briefcase, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

// Define data source types with their icons for consistency
const DATA_SOURCES = [
  { id: "phone_basic", name: "Phone Basic", icon: <Phone className="h-5 w-5 mr-2 text-blue-500" /> },
  { id: "phone_social", name: "Phone Social", icon: <Phone className="h-5 w-5 mr-2 text-indigo-500" /> },
  { id: "email_basic", name: "Email Basic", icon: <Mail className="h-5 w-5 mr-2 text-blue-500" /> },
  { id: "email_social", name: "Email Social", icon: <Mail className="h-5 w-5 mr-2 text-indigo-500" /> },
  { id: "employment", name: "Employment", icon: <Briefcase className="h-5 w-5 mr-2 text-purple-500" /> },
  { id: "income", name: "Income", icon: <DollarSign className="h-5 w-5 mr-2 text-green-500" /> },
  { id: "ip_intelligence", name: "IP Intelligence", icon: <MapPin className="h-5 w-5 mr-2 text-red-500" /> },
  { id: "identity", name: "Identity", icon: <IdCard className="h-5 w-5 mr-2 text-amber-500" /> },
  { id: "network_graph", name: "Network Graph", icon: <Network className="h-5 w-5 mr-2 text-blue-600" /> },
  { id: "global_security", name: "Global Security Data", icon: <ShieldCheck className="h-5 w-5 mr-2 text-gray-500" /> },
];

// Sample feature types for demonstration
const FEATURE_TYPES = [
  { id: "numeric", name: "Numeric" },
  { id: "categorical", name: "Categorical" },
  { id: "boolean", name: "Boolean" },
  { id: "datetime", name: "Date/Time" },
  { id: "text", name: "Text" },
];

// Sample transformations
const TRANSFORMATIONS = [
  { id: "none", name: "None" },
  { id: "log", name: "Logarithmic" },
  { id: "normalize", name: "Normalize (0-1)" },
  { id: "standardize", name: "Standardize (z-score)" },
  { id: "binning", name: "Binning" },
  { id: "one_hot", name: "One-Hot Encoding" },
];

interface FeatureEngineeringTabProps {
  modelType: string;
}

const FeatureEngineeringTab: React.FC<FeatureEngineeringTabProps> = ({ modelType }) => {
  // Sample existing features for demo
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
    
    // Reset form and close dialog
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

  const getDataSourceIcon = (sourceId: string) => {
    const source = DATA_SOURCES.find(src => src.id === sourceId);
    return source ? source.icon : <Database className="h-5 w-5 mr-2 text-gray-500" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Feature Engineering</h3>
        <Dialog open={isNewFeatureDialogOpen} onOpenChange={setIsNewFeatureDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Feature
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Feature</DialogTitle>
              <DialogDescription>
                Create a new feature using available data sources. 
                Feature engineering is crucial for improving model performance.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="feature-name" className="text-sm font-medium">Feature Name</label>
                  <Input
                    id="feature-name"
                    value={newFeature.name}
                    onChange={(e) => setNewFeature({...newFeature, name: e.target.value})}
                    placeholder="e.g., account_age_days"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Data Source</label>
                  <Select 
                    value={newFeature.source}
                    onValueChange={(value) => setNewFeature({...newFeature, source: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select data source" />
                    </SelectTrigger>
                    <SelectContent>
                      {DATA_SOURCES.map((source) => (
                        <SelectItem key={source.id} value={source.id}>
                          <div className="flex items-center">
                            {source.icon}
                            <span>{source.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="feature-description" className="text-sm font-medium">Description</label>
                <Textarea
                  id="feature-description"
                  value={newFeature.description}
                  onChange={(e) => setNewFeature({...newFeature, description: e.target.value})}
                  placeholder="Describe what this feature represents and why it's useful"
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Feature Type</label>
                  <Select 
                    value={newFeature.type}
                    onValueChange={(value) => setNewFeature({...newFeature, type: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {FEATURE_TYPES.map((type) => (
                        <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Transformation</label>
                  <Select 
                    value={newFeature.transformation}
                    onValueChange={(value) => setNewFeature({...newFeature, transformation: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select transformation" />
                    </SelectTrigger>
                    <SelectContent>
                      {TRANSFORMATIONS.map((transform) => (
                        <SelectItem key={transform.id} value={transform.id}>{transform.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="feature-formula" className="text-sm font-medium">Formula / Logic</label>
                <Textarea
                  id="feature-formula"
                  value={newFeature.formula}
                  onChange={(e) => setNewFeature({...newFeature, formula: e.target.value})}
                  placeholder="e.g., IF(transaction_amount > avg_transaction * 3, 1, 0)"
                  className="w-full font-mono text-sm"
                />
                <p className="text-xs text-gray-500">
                  Define how this feature should be calculated from the raw data.
                </p>
              </div>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsNewFeatureDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="button" onClick={handleAddFeature}>
                Add Feature
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
        <p className="text-sm text-slate-600 mb-2">
          <strong>Model Type:</strong> {modelType === 'binary' ? 'Binary Classification' : 
                          modelType === 'multiclass' ? 'Multi-class Classification' : 
                          modelType === 'regression' ? 'Regression' : modelType}
        </p>
        <p className="text-sm text-slate-600">
          Features should be engineered to maximize predictive power for this specific model type.
        </p>
      </div>
      
      <div className="grid gap-4">
        {features.map(feature => (
          <Card key={feature.id} className="overflow-hidden">
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {getDataSourceIcon(feature.source)}
                  <CardTitle className="text-base">{feature.name}</CardTitle>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full 
                  ${feature.importance === 'high' ? 'bg-green-100 text-green-800' : 
                   feature.importance === 'medium' ? 'bg-amber-100 text-amber-800' : 
                   'bg-blue-100 text-blue-800'}`}>
                  {feature.importance.charAt(0).toUpperCase() + feature.importance.slice(1)} Importance
                </span>
              </div>
              <CardDescription className="pl-7">{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Type:</span>{" "}
                  <span className="font-medium">{feature.type}</span>
                </div>
                <div>
                  <span className="text-gray-500">Source:</span>{" "}
                  <span className="font-medium">
                    {DATA_SOURCES.find(src => src.id === feature.source)?.name || feature.source}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Transformation:</span>{" "}
                  <span className="font-medium">
                    {TRANSFORMATIONS.find(t => t.id === feature.transformation)?.name || feature.transformation}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureEngineeringTab;
