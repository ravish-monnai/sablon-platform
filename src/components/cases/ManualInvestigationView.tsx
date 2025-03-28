
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { AlertTriangle, UserCheck, PhoneCall, Search, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form schema for validation
const customerInvestigationSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  ipAddress: z.string().optional().or(z.literal("")),
  deviceId: z.string().optional().or(z.literal(""))
});

type CustomerInvestigationForm = z.infer<typeof customerInvestigationSchema>;

const InvestigationCard = ({ 
  title, 
  description, 
  icon: Icon,
  onStart
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  onStart: () => void;
}) => (
  <Card className="border border-gray-200 hover:border-primary/50 transition-all">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-lg font-medium">{title}</CardTitle>
      <Icon className="h-5 w-5 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Button onClick={onStart} className="w-full">Start Investigation</Button>
    </CardContent>
  </Card>
);

const CustomerInvestigationForm = () => {
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

const ManualInvestigationView = () => {
  const [activeTab, setActiveTab] = useState<string>("customer-check");
  
  const handleStartInvestigation = (type: string) => {
    console.log(`Starting ${type} investigation`);
    // In a real application, this would navigate to a details page or open a form
  };
  
  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">Manual Investigation</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="customer-check" className="text-gray-600 data-[state=active]:text-monnai-blue">
              <Search className="h-4 w-4 mr-2" />
              Customer Check
            </TabsTrigger>
            <TabsTrigger value="fraud-risk" className="text-gray-600 data-[state=active]:text-monnai-blue">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Fraud Risk
            </TabsTrigger>
            <TabsTrigger value="identity-verification" className="text-gray-600 data-[state=active]:text-monnai-blue">
              <UserCheck className="h-4 w-4 mr-2" />
              Identity Check
            </TabsTrigger>
            <TabsTrigger value="reachability" className="text-gray-600 data-[state=active]:text-monnai-blue">
              <PhoneCall className="h-4 w-4 mr-2" />
              Reachability
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="customer-check" className="space-y-4">
            <p className="text-muted-foreground mb-6">
              Check customer details by inputting various identifiers such as phone number,
              email, IP address, or device ID.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InvestigationCard
                title="Basic Customer Check"
                description="Verify customer identity and gather basic customer information"
                icon={Search}
                onStart={() => handleStartInvestigation("basic-customer-check")}
              />
              <InvestigationCard
                title="Advanced Customer Check"
                description="Perform a comprehensive check with deeper analysis of customer data"
                icon={Search}
                onStart={() => handleStartInvestigation("advanced-customer-check")}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="fraud-risk" className="space-y-4">
            <CustomerInvestigationForm />
          </TabsContent>
          
          <TabsContent value="identity-verification" className="space-y-4">
            <p className="text-muted-foreground mb-6">
              Verify customer identity through manual document review, biometric analysis, 
              and cross-reference with external databases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InvestigationCard
                title="Document Verification"
                description="Manually review identity documents for authenticity and consistency"
                icon={UserCheck}
                onStart={() => handleStartInvestigation("document-verification")}
              />
              <InvestigationCard
                title="Identity Cross-Check"
                description="Cross-reference customer information with external databases"
                icon={UserCheck}
                onStart={() => handleStartInvestigation("identity-cross-check")}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="reachability" className="space-y-4">
            <p className="text-muted-foreground mb-6">
              Verify customer reachability through phone, email, and address validation
              to ensure accurate contact information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InvestigationCard
                title="Contact Information Validation"
                description="Verify phone numbers, email addresses, and physical addresses for accuracy"
                icon={PhoneCall}
                onStart={() => handleStartInvestigation("contact-validation")}
              />
              <InvestigationCard
                title="Address Verification"
                description="Verify customer's residential address through various data sources"
                icon={PhoneCall}
                onStart={() => handleStartInvestigation("address-verification")}
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ManualInvestigationView;
