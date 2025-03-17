
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
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  apiDocumentation: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  credentials: z.object({
    apiKey: z.string().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
    endpoint: z.string().url({ message: "Please enter a valid endpoint URL" }).optional().or(z.literal("")),
  }),
  dataMapping: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface NewDataSourceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewDataSourceDialog({ open, onOpenChange }: NewDataSourceDialogProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      apiDocumentation: "",
      credentials: {
        apiKey: "",
        username: "",
        password: "",
        endpoint: "",
      },
      dataMapping: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("New data source form submitted:", data);
    
    // Here you would typically send this data to your backend
    // For now, we'll just show a success message
    toast.success("New data source integration created", {
      description: `${data.name} has been added as a new data source.`,
    });
    
    // Reset form and close dialog
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Integrate New Data Source</DialogTitle>
          <DialogDescription>
            Add a new data source partner by providing API details, credentials, and field mapping.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data Source Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Credit Bureau API" {...field} />
                    </FormControl>
                    <FormDescription>
                      A descriptive name for this data source
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
              <Button type="submit">Create Integration</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
