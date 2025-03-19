import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Brain, Save, Upload, Plus, ChevronRight, LineChart, BarChart2,
  Banknote, CreditCard, ShieldAlert, Calculator, ChartLine, FileText,
  UserCheck, Briefcase, IndianRupee
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import BankStatementFeatures from "../bank-statement/BankStatementFeatures";
import FeatureEngineeringTab from "./FeatureEngineeringTab";

interface ModelConfigDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  modelName: string;
  modelType: string;
}

const ModelConfigDialog: React.FC<ModelConfigDialogProps> = ({
  open,
  onOpenChange,
  modelName,
  modelType
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isIndianBankStatementAnalyzer, setIsIndianBankStatementAnalyzer] = useState(false);

  useEffect(() => {
    // Check if this is the Indian Bank Statement Analyzer model
    setIsIndianBankStatementAnalyzer(modelName === "Indian Bank Statement Analyzer");
  }, [modelName]);

  const handleSaveChanges = () => {
    setIsSubmitting(true);
    
    // Simulate saving changes
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Model configuration saved",
        description: "Your model settings have been updated successfully.",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            {isIndianBankStatementAnalyzer ? (
              <FileText className="mr-2 h-5 w-5 text-amber-500" />
            ) : (
              <Brain className="mr-2 h-5 w-5 text-monnai-pink" />
            )}
            {modelName}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col h-full">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Feature Engineering</TabsTrigger>
              <TabsTrigger value="training">Training Data</TabsTrigger>
              <TabsTrigger value="parameters">Model Parameters</TabsTrigger>
              <TabsTrigger value="deployment">Deployment</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="model-name">Model Name</Label>
                    <Input id="model-name" defaultValue={modelName} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="model-type">Model Type</Label>
                    <Select defaultValue={modelType.toLowerCase()}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select model type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="binary">Binary Classification</SelectItem>
                        <SelectItem value="regression">Regression</SelectItem>
                        <SelectItem value="multiclass">Multi-class Classification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="model-description">Description</Label>
                    <Textarea 
                      id="model-description" 
                      defaultValue={modelType === "binary" ? "Identifies fraudulent transactions" : modelType === "regression" ? "Predicts credit default risk" : "Optimizes collections strategies"}
                      className="h-24"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Performance Metrics</Label>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="space-y-2">
                          {modelType === "binary" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Accuracy</span>
                                <span className="font-medium">96.7%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">AUC</span>
                                <span className="font-medium">0.88</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Precision</span>
                                <span className="font-medium">0.92</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Recall</span>
                                <span className="font-medium">0.89</span>
                              </div>
                            </>
                          )}
                          {modelType === "regression" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">R²</span>
                                <span className="font-medium">0.86</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">MAE</span>
                                <span className="font-medium">0.15</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">RMSE</span>
                                <span className="font-medium">0.22</span>
                              </div>
                            </>
                          )}
                          {modelType === "multiclass" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Accuracy</span>
                                <span className="font-medium">88.2%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">F1 Score</span>
                                <span className="font-medium">0.88</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Macro Precision</span>
                                <span className="font-medium">0.87</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Macro Recall</span>
                                <span className="font-medium">0.85</span>
                              </div>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-2">
                    <Label>Last Model Update</Label>
                    <div className="text-sm text-muted-foreground">
                      <div>Trained: 1 week ago</div>
                      <div>Deployed: 4 days ago</div>
                      <div>By: Risk Team</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Feature Engineering Tab */}
            <TabsContent value="features" className="space-y-4">
              {isIndianBankStatementAnalyzer ? (
                <FeatureEngineeringTab modelType={modelType} />
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center justify-between">
                        <span>Transaction Features</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardTitle>
                      <CardDescription>Features derived from transaction data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">transaction_amount_normalized</div>
                            <div className="text-xs text-muted-foreground">Min-max scaled transaction amount</div>
                          </div>
                          <div className="flex-1">
                            <div>Numeric</div>
                            <div className="text-xs text-muted-foreground">Min-Max Scaler</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">transaction_time_of_day</div>
                            <div className="text-xs text-muted-foreground">Hour of transaction (0-23)</div>
                          </div>
                          <div className="flex-1">
                            <div>Categorical</div>
                            <div className="text-xs text-muted-foreground">One-Hot Encoding</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">transaction_velocity</div>
                            <div className="text-xs text-muted-foreground">Number of transactions in last 24h</div>
                          </div>
                          <div className="flex-1">
                            <div>Numeric</div>
                            <div className="text-xs text-muted-foreground">Standard Scaler</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center justify-between">
                        <span>User Behavior Features</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardTitle>
                      <CardDescription>Features derived from user behavior</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">days_since_registration</div>
                            <div className="text-xs text-muted-foreground">Days since user registered</div>
                          </div>
                          <div className="flex-1">
                            <div>Numeric</div>
                            <div className="text-xs text-muted-foreground">Log Transform</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">device_change</div>
                            <div className="text-xs text-muted-foreground">New device used for transaction</div>
                          </div>
                          <div className="flex-1">
                            <div>Boolean</div>
                            <div className="text-xs text-muted-foreground">Binary</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">browser_fingerprint</div>
                            <div className="text-xs text-muted-foreground">Hashed browser fingerprint</div>
                          </div>
                          <div className="flex-1">
                            <div>Categorical</div>
                            <div className="text-xs text-muted-foreground">Target Encoding</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center justify-between">
                        <span>Network Features</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardTitle>
                      <CardDescription>Features derived from network analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">network_degree</div>
                            <div className="text-xs text-muted-foreground">Number of direct connections</div>
                          </div>
                          <div className="flex-1">
                            <div>Numeric</div>
                            <div className="text-xs text-muted-foreground">Standard Scaler</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">fraud_neighbor_ratio</div>
                            <div className="text-xs text-muted-foreground">Ratio of neighbors marked as fraud</div>
                          </div>
                          <div className="flex-1">
                            <div>Numeric</div>
                            <div className="text-xs text-muted-foreground">None</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">pagerank_score</div>
                            <div className="text-xs text-muted-foreground">PageRank centrality score</div>
                          </div>
                          <div className="flex-1">
                            <div>Numeric</div>
                            <div className="text-xs text-muted-foreground">Min-Max Scaler</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>

            {/* Training Data Tab */}
            <TabsContent value="training" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Training Data</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-1" /> Import Labels
                  </Button>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1" /> Add Label
                  </Button>
                </div>
              </div>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Training Dataset Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Class Distribution</h4>
                      <div className="h-32 flex items-center justify-center bg-gray-50 rounded-md border">
                        <BarChart2 className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Training Metrics</h4>
                      <div className="h-32 flex items-center justify-center bg-gray-50 rounded-md border">
                        <LineChart className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Samples:</span>
                      <span className="font-medium">125,432</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Labeled Samples:</span>
                      <span className="font-medium">98,745 (78.7%)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Class Balance:</span>
                      <span className="font-medium">91.2% legitimate, 8.8% fraud</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Last Updated:</span>
                      <span className="font-medium">1 week ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Recent Labels</CardTitle>
                  <CardDescription>Latest manual labels added to the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-12 text-xs font-medium text-muted-foreground">
                      <div className="col-span-2">Transaction ID</div>
                      <div className="col-span-2">User ID</div>
                      <div className="col-span-2">Label</div>
                      <div className="col-span-3">Labeled By</div>
                      <div className="col-span-3">Timestamp</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-12 text-sm">
                      <div className="col-span-2">TX-94782</div>
                      <div className="col-span-2">U-38291</div>
                      <div className="col-span-2">
                        <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Fraud</span>
                      </div>
                      <div className="col-span-3">John Smith</div>
                      <div className="col-span-3">2023-10-12 14:23</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-12 text-sm">
                      <div className="col-span-2">TX-94781</div>
                      <div className="col-span-2">U-29143</div>
                      <div className="col-span-2">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Legitimate</span>
                      </div>
                      <div className="col-span-3">Sarah Johnson</div>
                      <div className="col-span-3">2023-10-12 14:18</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-12 text-sm">
                      <div className="col-span-2">TX-94780</div>
                      <div className="col-span-2">U-38291</div>
                      <div className="col-span-2">
                        <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Fraud</span>
                      </div>
                      <div className="col-span-3">AI Suggestion</div>
                      <div className="col-span-3">2023-10-12 14:15</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-12 text-sm">
                      <div className="col-span-2">TX-94779</div>
                      <div className="col-span-2">U-67832</div>
                      <div className="col-span-2">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Legitimate</span>
                      </div>
                      <div className="col-span-3">John Smith</div>
                      <div className="col-span-3">2023-10-12 14:05</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Model Parameters Tab */}
            <TabsContent value="parameters" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Model Architecture</CardTitle>
                    <CardDescription>Configure the structure of your model</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="model-algorithm">Algorithm</Label>
                      <Select defaultValue="xgboost">
                        <SelectTrigger id="model-algorithm">
                          <SelectValue placeholder="Select algorithm" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="xgboost">XGBoost</SelectItem>
                          <SelectItem value="lightgbm">LightGBM</SelectItem>
                          <SelectItem value="randomforest">Random Forest</SelectItem>
                          <SelectItem value="neural">Neural Network</SelectItem>
                          <SelectItem value="logistic">Logistic Regression</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="num-estimators">Number of Estimators</Label>
                      <Input id="num-estimators" type="number" defaultValue="100" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="max-depth">Max Depth</Label>
                      <Input id="max-depth" type="number" defaultValue="6" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="learning-rate">Learning Rate</Label>
                      <Input id="learning-rate" type="number" defaultValue="0.1" step="0.01" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Training Configuration</CardTitle>
                    <CardDescription>Configure how your model is trained</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="train-test-split">Train/Test Split</Label>
                      <Input id="train-test-split" type="number" defaultValue="0.8" step="0.05" min="0.5" max="0.95" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cv-folds">Cross-Validation Folds</Label>
                      <Input id="cv-folds" type="number" defaultValue="5" min="3" max="10" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Class Weights</Label>
                      <Select defaultValue="balanced">
                        <SelectTrigger>
                          <SelectValue placeholder="Select weight strategy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="balanced">Balanced</SelectItem>
                          <SelectItem value="custom">Custom Weights</SelectItem>
                          <SelectItem value="none">No Weighting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="early-stopping" defaultChecked />
                      <Label htmlFor="early-stopping">Enable Early Stopping</Label>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Hyperparameter Optimization</CardTitle>
                    <CardDescription>Configure automatic hyperparameter tuning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-tune" defaultChecked />
                      <Label htmlFor="auto-tune">Enable Auto-Tuning</Label>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tuning-method">Tuning Method</Label>
                      <Select defaultValue="bayesian">
                        <SelectTrigger id="tuning-method">
                          <SelectValue placeholder="Select tuning method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bayesian">Bayesian Optimization</SelectItem>
                          <SelectItem value="random">Random Search</SelectItem>
                          <SelectItem value="grid">Grid Search</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="max-evals">Maximum Evaluations</Label>
                      <Input id="max-evals" type="number" defaultValue="50" min="10" max="200" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="optimization-metric">Optimization Metric</Label>
                      <Select defaultValue="auc">
                        <SelectTrigger id="optimization-metric">
                          <SelectValue placeholder="Select metric" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auc">AUC</SelectItem>
                          <SelectItem value="f1">F1 Score</SelectItem>
                          <SelectItem value="precision">Precision</SelectItem>
                          <SelectItem value="recall">Recall</SelectItem>
                          <SelectItem value="accuracy">Accuracy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Feature Selection</CardTitle>
                    <CardDescription>Configure automatic feature selection</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="feature-selection" defaultChecked />
                      <Label htmlFor="feature-selection">Enable Feature Selection</Label>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="selection-method">Selection Method</Label>
                      <Select defaultValue="importance">
                        <SelectTrigger id="selection-method">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="importance">Feature Importance</SelectItem>
                          <SelectItem value="recursive">Recursive Feature Elimination</SelectItem>
                          <SelectItem value="correlation">Correlation Analysis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="features-to-select">Features to Select</Label>
                      <Input id="features-to-select" type="number" defaultValue="20" min="5" max="50" />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-pca" />
                      <Label htmlFor="auto-pca">Apply PCA After Selection</Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Deployment Tab */}
            <TabsContent value="deployment" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Deployment Settings</CardTitle>
                  <CardDescription>Configure how your model is deployed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="deployment-environment">Environment</Label>
                      <Select defaultValue="production">
                        <SelectTrigger id="deployment-environment">
                          <SelectValue placeholder="Select environment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="staging">Staging</SelectItem>
                          <SelectItem value="production">Production</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="version">Version</Label>
                      <Input id="version" defaultValue="v2.4.0" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Deployment Strategy</Label>
                    <Select defaultValue="canary">
                      <SelectTrigger>
                        <SelectValue placeholder="Select strategy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blue-green">Blue-Green Deployment</SelectItem>
                        <SelectItem value="canary">Canary Release</SelectItem>
                        <SelectItem value="shadow">Shadow Deployment</SelectItem>
                        <SelectItem value="immediate">Immediate Replacement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Traffic Allocation</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="text-sm mb-1">New Model: 25%</div>
                        <div className="h-2 w-full bg-gray-100 rounded">
                          <div className="h-2 bg-monnai-pink rounded" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm mb-1">Current Model: 75%</div>
                        <div className="h-2 w-full bg-gray-100 rounded">
                          <div className="h-2 bg-monnai-blue rounded" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Monitoring Settings</h4>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="perf-monitoring" defaultChecked />
                      <Label htmlFor="perf-monitoring">Performance Monitoring</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="drift-detection" defaultChecked />
                      <Label htmlFor="drift-detection">Data Drift Detection</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="outlier-detection" defaultChecked />
                      <Label htmlFor="outlier-detection">Outlier Detection</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="explainability" defaultChecked />
                      <Label htmlFor="explainability">Model Explainability</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Rollback</Button>
                <Button>Deploy New Version</Button>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end space-x-2 pt-4 mt-auto">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSaveChanges}
              disabled={isSubmitting}
              className="bg-monnai-pink hover:bg-monnai-pink/90"
            >
              <Save className="mr-2 h-4 w-4" />
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModelConfigDialog;
