
import React from "react";
import { BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DigitalCategory {
  category: string;
  count: number;
  services: string[];
  status: string;
}

interface DigitalCategoriesProps {
  digitalCategories: DigitalCategory[];
}

const DigitalCategories: React.FC<DigitalCategoriesProps> = ({ digitalCategories }) => {
  return (
    <div>
      <h3 className="text-sm font-medium mb-2 flex items-center">
        <BarChart className="h-4 w-4 mr-1 text-[#9b87f5]" /> 
        Digital Categories
      </h3>
      <div className="space-y-4">
        {digitalCategories.map((profile, index) => (
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
    </div>
  );
};

export default DigitalCategories;
