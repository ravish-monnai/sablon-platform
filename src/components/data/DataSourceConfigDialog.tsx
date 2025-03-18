
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Grip, Plus, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

// Define schema for validation
const partnerSchema = z.object({
  id: z.string(),
  name: z.string().min(2, { message: "Partner name must be at least 2 characters" }),
  isActive: z.boolean(),
  priority: z.number(),
  endpoint: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  apiKey: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
});

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  apiDocumentation: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  isActive: z.boolean(),
  features: z.record(z.boolean()).optional(),
  partners: z.array(partnerSchema),
  credentials: z.object({
    apiKey: z.string().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
    endpoint: z.string().url({ message: "Please enter a valid endpoint URL" }).optional().or(z.literal("")),
  }),
  dataMapping: z.string().optional(),
  waterfallEnabled: z.boolean().default(false),
  waterfallTimeout: z.number().min(1000).default(10000),
});

type FormValues = z.infer<typeof formSchema>;

interface DataSourceConfigDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dataSource?: {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    active: boolean;
    type: string;
  };
}

export function DataSourceConfigDialog({ 
  open, 
  onOpenChange,
  dataSource
}: DataSourceConfigDialogProps) {
  const [activeTab, setActiveTab] = React.useState("general");

  // Determine available features based on data source type
  const getAvailableFeatures = (type: string) => {
    if (type.includes("Phone Basic")) {
      return {
        "number_validation": "Phone Number Validation",
        "carrier_data": "Carrier Information",
        "line_type": "Line Type Detection",
        "porting_data": "Porting Status",
        "last_seen": "Last Seen Active Date",
        "device_info": "Device Information"
      };
    } else if (type.includes("Phone Social")) {
      return {
        "social_profiles": "Connected Social Profiles",
        "usage_patterns": "Usage Patterns",
        "risk_signals": "Risk Signals",
        "reputation_score": "Reputation Score",
        "activity_timeline": "Activity Timeline"
      };
    } else if (type.includes("Email")) {
      return {
        "email_validation": "Email Validation",
        "domain_info": "Domain Information",
        "deliverability": "Deliverability Score",
        "spam_score": "Spam Score",
        "disposable_check": "Disposable Email Check"
      };
    } else if (type.includes("Identity")) {
      return {
        "document_validation": "Document Validation",
        "biometric_matching": "Biometric Matching",
        "liveness_detection": "Liveness Detection",
        "face_comparison": "Face Comparison"
      };
    } else {
      return {};
    }
  };

  // Generate default data partners based on source type
  const getDefaultPartners = (type: string) => {
    if (type.includes("Phone")) {
      return [
        { 
          id: "twilio", 
          name: "Twilio Lookup", 
          isActive: true, 
          priority: 1,
          endpoint: "https://lookup.twilio.com/v1",
          apiKey: "••••••••••••••••",
          username: "phone_api_user",
          password: "••••••••••••••••"
        },
        { 
          id: "telnyx", 
          name: "Telnyx Number Lookup", 
          isActive: true, 
          priority: 2,
          endpoint: "https://api.telnyx.com/v2/number_lookup",
          apiKey: "••••••••••••••••",
          username: "",
          password: ""
        },
        { 
          id: "neutrino", 
          name: "Neutrino Phone Validation", 
          isActive: false, 
          priority: 3,
          endpoint: "https://neutrinoapi.com/phone-validate",
          apiKey: "",
          username: "",
          password: ""
        }
      ];
    } else if (type.includes("Email")) {
      return [
        { 
          id: "emailage", 
          name: "Emailage", 
          isActive: true, 
          priority: 1,
          endpoint: "https://api.emailage.com/v2",
          apiKey: "••••••••••••••••",
          username: "email_api_user",
          password: "••••••••••••••••"
        },
        { 
          id: "kickbox", 
          name: "Kickbox", 
          isActive: false, 
          priority: 2,
          endpoint: "https://api.kickbox.com/v2/verify",
          apiKey: "",
          username: "",
          password: ""
        }
      ];
    } else {
      return [
        { 
          id: "default", 
          name: "Primary Provider", 
          isActive: true, 
          priority: 1,
          endpoint: `https://api.example.com/${type.toLowerCase().replace(' ', '')}`,
          apiKey: "••••••••••••••••",
          username: "api_user",
          password: "••••••••••••••••"
        }
      ];
    }
  };

  const features = dataSource ? getAvailableFeatures(dataSource.type) : {};
  const defaultPartners = dataSource ? getDefaultPartners(dataSource.type) : [];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: dataSource?.name || "",
      description: dataSource?.description || "",
      apiDocumentation: "",
      isActive: dataSource?.active || false,
      features: Object.keys(features).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
      partners: defaultPartners,
      credentials: {
        apiKey: "",
        username: "",
        password: "",
        endpoint: "",
      },
      dataMapping: "",
      waterfallEnabled: defaultPartners.length > 1,
      waterfallTimeout: 10000,
    },
  });

  React.useEffect(() => {
    if (dataSource && open) {
      const features = getAvailableFeatures(dataSource.type);
      const partners = getDefaultPartners(dataSource.type);

      form.reset({
        name: dataSource.name,
        description: dataSource.description,
        apiDocumentation: "",
        isActive: dataSource.active,
        features: Object.keys(features).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
        partners: partners,
        credentials: {
          apiKey: "••••••••••••••••",
          username: dataSource.type.includes("Email") ? "email_api_user" : "api_user",
          password: "••••••••••••••••",
          endpoint: `https://api.${dataSource.type.toLowerCase().replace(' ', '')}.example.com/v1`,
        },
        dataMapping: dataSource.type.includes("Social") ? 
          '{\n  "external_user_id": "user_id",\n  "profile_data": "social_profile",\n  "connections": "network_connections",\n  "risk_score": "social_risk_score"\n}' : 
          '{\n  "record_id": "external_id",\n  "verification_status": "status",\n  "confidence_score": "score"\n}',
        waterfallEnabled: partners.length > 1,
        waterfallTimeout: 10000,
      });
    }
  }, [dataSource, form, open]);

  const onSubmit = (data: FormValues) => {
    console.log("Data source configuration updated:", data);
    
    // Here you would typically send this data to your backend
    toast.success("Data source configuration updated", {
      description: `${data.name} configuration has been saved.`,
    });
    
    onOpenChange(false);
  };

  const addNewPartner = () => {
    const currentPartners = form.getValues("partners") || [];
    form.setValue("partners", [
      ...currentPartners, 
      { 
        id: `partner-${Date.now()}`, 
        name: "New Partner", 
        isActive: false, 
        priority: currentPartners.length + 1,
        endpoint: "",
        apiKey: "",
        username: "",
        password: ""
      }
    ]);
  };

  const removePartner = (index: number) => {
    const currentPartners = form.getValues("partners") || [];
    form.setValue("partners", currentPartners.filter((_, i) => i !== index));
  };

  const title = dataSource ? `Configure ${dataSource.name}` : "Configure Data Source";
  const description = dataSource ? 
    `Update connection details and mapping for ${dataSource.name}.` : 
    "Configure a data source by providing API details and field mapping.";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="providers">Data Partners</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-6 py-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="flex-1 mr-4">
                          <FormLabel>Data Source Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Phone Validation API" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="isActive"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-end space-x-2">
                          <FormLabel>Active</FormLabel>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe what data this source provides..." 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="apiDocumentation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>API Documentation URL</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://api.example.com/docs" 
                            type="url"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Link to the API documentation for this data source
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="space-y-4 py-4">
                <div className="space-y-2">
                  <h3 className="text-md font-medium">Available Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Select which features to enable for this data source
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(features).map(([key, label]) => (
                    <FormField
                      key={key}
                      control={form.control}
                      name={`features.${key}`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-medium">{label}</FormLabel>
                            <FormDescription>
                              Enable {label.toLowerCase()} capabilities
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="providers" className="space-y-4 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-md font-medium">Data Partners</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure multiple data providers for this data source
                    </p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="waterfallEnabled"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2">
                        <FormLabel className="text-sm">Waterfall Mode</FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormDescription className="text-xs ml-2">
                          Try each provider in priority order
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
                
                {form.watch("waterfallEnabled") && (
                  <FormField
                    control={form.control}
                    name="waterfallTimeout"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3">
                        <FormLabel className="min-w-24">Timeout (ms)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={e => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">
                          Maximum wait time before trying next provider
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                )}
                
                <div className="space-y-4 mt-4">
                  {form.watch("partners").map((partner, index) => (
                    <Card key={partner.id} className="relative">
                      <Badge 
                        variant="outline" 
                        className="absolute top-2 right-2 flex items-center"
                      >
                        Priority: {partner.priority}
                      </Badge>
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 gap-4 pt-2">
                          <div className="flex items-center justify-between gap-4">
                            <FormField
                              control={form.control}
                              name={`partners.${index}.name`}
                              render={({ field }) => (
                                <FormItem className="flex-1">
                                  <FormLabel>Partner Name</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name={`partners.${index}.isActive`}
                              render={({ field }) => (
                                <FormItem className="flex items-center space-x-2 pt-6">
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel>Active</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => removePartner(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name={`partners.${index}.endpoint`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>API Endpoint</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name={`partners.${index}.apiKey`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>API Key</FormLabel>
                                  <FormControl>
                                    <Input {...field} type="password" />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          {(partner.username || partner.password) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name={`partners.${index}.username`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name={`partners.${index}.password`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                      <Input {...field} type="password" />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addNewPartner}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Partner
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="advanced" className="space-y-4 py-4">
                <div className="space-y-4 border rounded-md p-4">
                  <h3 className="text-md font-medium">API Credentials</h3>
                  
                  <FormField
                    control={form.control}
                    name="credentials.apiKey"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Global API Key</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter API key" {...field} />
                        </FormControl>
                        <FormDescription>
                          Only used if no partner-specific keys are available
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="credentials.username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="Username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="credentials.password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="Password" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="credentials.endpoint"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Global API Endpoint</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://api.example.com/v1" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="dataMapping"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data Mapping</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={`{\n  "externalField1": "internalField1",\n  "externalField2": "internalField2"\n}`}
                          className="min-h-[150px] font-mono text-sm"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        JSON mapping between external data fields and your internal model fields
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
