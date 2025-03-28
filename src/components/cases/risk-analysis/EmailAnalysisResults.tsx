
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EmailAnalysisResultsProps {
  email: string;
}

const EmailAnalysisResults: React.FC<EmailAnalysisResultsProps> = ({ email }) => {
  // Mock data for registered profiles
  const registeredProfiles = [
    { category: "Email Provider", count: 1, services: ["Google"] },
    { category: "Ecommerce", count: 2, services: ["Flipkart", "Amazon"] },
    { category: "Social Media", count: 3, services: ["Facebook", "Twitter", "Instagram"] },
    { category: "Professional", count: 1, services: ["Microsoft"] }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Digital Footprint</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {registeredProfiles.map((profile, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium">{profile.category}</p>
                <Badge variant="outline" className="bg-blue-50">
                  {profile.count} Registered
                </Badge>
              </div>
              <div className="flex flex-wrap gap-1">
                {profile.services.map((service, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm">
            <span>Registered Profiles</span>
            <span className="font-medium">11</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Profile Names</span>
            <span className="font-medium">1</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Profile Images</span>
            <span className="font-medium">0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailAnalysisResults;
