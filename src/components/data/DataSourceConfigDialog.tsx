
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  apiDocumentation: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  isActive: z.boolean(),
  credentials: z.object({
    apiKey: z.string().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
    endpoint: z.string().url({ message: "Please enter a valid endpoint URL" }).optional().or(z.literal("")),
  }),
  dataMapping: z.string().optional(),
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
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: dataSource?.name || "",
      description: dataSource?.description || "",
      apiDocumentation: "",
      isActive: dataSource?.active || false,
      credentials: {
        apiKey: "",
        username: "",
        password: "",
        endpoint: "",
      },
      dataMapping: "",
    },
  });

  React.useEffect(() => {
    if (dataSource && open) {
      form.reset({
        name: dataSource.name,
        description: dataSource.description,
        apiDocumentation: "",
        isActive: dataSource.active,
        credentials: {
          apiKey: "••••••••••••••••",
          username: dataSource.type.includes("Email") ? "email_api_user" : "api_user",
          password: "••••••••••••••••",
          endpoint: `https://api.${dataSource.type.toLowerCase().replace(' ', '')}.example.com/v1`,
        },
        dataMapping: dataSource.type.includes("Social") ? 
          '{\n  "external_user_id": "user_id",\n  "profile_data": "social_profile",\n  "connections": "network_connections",\n  "risk_score": "social_risk_score"\n}' : 
          '{\n  "record_id": "external_id",\n  "verification_status": "status",\n  "confidence_score": "score"\n}',
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

  const title = dataSource ? `Configure ${dataSource.name}` : "Configure Data Source";
  const description = dataSource ? 
    `Update connection details and mapping for ${dataSource.name}.` : 
    "Configure a data source by providing API details and field mapping.";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1 mr-4">
                      <FormLabel>Data Source Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Credit Bureau API" {...field} />
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

              <div className="space-y-4 border rounded-md p-4">
                <h3 className="text-md font-medium">Partner Credentials</h3>
                
                <FormField
                  control={form.control}
                  name="credentials.apiKey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>API Key</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter API key" {...field} />
                      </FormControl>
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
                      <FormLabel>API Endpoint</FormLabel>
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
            </div>

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
