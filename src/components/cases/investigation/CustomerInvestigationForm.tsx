
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Plus } from "lucide-react";

// Form schema for validation
const customerInvestigationSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  ipAddress: z.string().optional().or(z.literal("")),
  deviceId: z.string().optional().or(z.literal(""))
});

type CustomerInvestigationForm = z.infer<typeof customerInvestigationSchema>;

const CustomerInvestigationForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<CustomerInvestigationForm>({
    resolver: zodResolver(customerInvestigationSchema),
    defaultValues: {
      phoneNumber: "",
      email: "",
      ipAddress: "",
      deviceId: ""
    }
  });

  const onSubmit = (data: CustomerInvestigationForm) => {
    setIsLoading(true);
    console.log("Form submitted:", data);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would handle the response here
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <p className="text-gray-500 text-center mb-8">Enter the below details to get started</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 text-sm">IN</span>
                  </div>
                  <FormControl>
                    <Input 
                      {...field}
                      className="pl-10" 
                      placeholder="987 890 1234" 
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder="Eg. ravish@monnai.com" 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="ipAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IP Address</FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder="Eg. 192.16.18.10" 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="deviceId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Device ID</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="Eg. AA-1111-20000" 
                    />
                  </FormControl>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Plus className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 font-medium text-lg"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Fetch Insights"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CustomerInvestigationForm;
