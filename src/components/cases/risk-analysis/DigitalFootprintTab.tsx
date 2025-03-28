
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SearchX, Globe, ExternalLink } from "lucide-react";

interface Platform {
  name: string;
  icon: string;
  category: string;
  active: boolean;
  lastSeen: string;
}

interface DigitalFootprintTabProps {
  email: string;
}

const DigitalFootprintTab: React.FC<DigitalFootprintTabProps> = ({ email }) => {
  const platforms: Platform[] = [
    { name: "Facebook", icon: "facebook", category: "Social Media", active: true, lastSeen: "2 months ago" },
    { name: "Instagram", icon: "instagram", category: "Social Media", active: true, lastSeen: "1 month ago" },
    { name: "LinkedIn", icon: "linkedin", category: "Professional", active: true, lastSeen: "3 months ago" },
    { name: "Twitter", icon: "twitter", category: "Social Media", active: true, lastSeen: "6 months ago" },
    { name: "Amazon", icon: "amazon", category: "E-commerce", active: true, lastSeen: "2 weeks ago" },
    { name: "Flipkart", icon: "flipkart", category: "E-commerce", active: true, lastSeen: "1 month ago" },
    { name: "Myntra", icon: "myntra", category: "E-commerce", active: true, lastSeen: "3 months ago" },
    { name: "Nykaa", icon: "nykaa", category: "E-commerce", active: true, lastSeen: "5 months ago" },
    { name: "Snapchat", icon: "snapchat", category: "Social Media", active: false, lastSeen: "1 year ago" },
    { name: "Canva", icon: "canva", category: "Design", active: true, lastSeen: "4 months ago" },
    { name: "Medium", icon: "medium", category: "Content", active: false, lastSeen: "1 year ago" },
    { name: "Github", icon: "github", category: "Developer", active: true, lastSeen: "6 months ago" },
    { name: "Spotify", icon: "spotify", category: "Entertainment", active: true, lastSeen: "1 week ago" },
    { name: "Netflix", icon: "netflix", category: "Entertainment", active: true, lastSeen: "3 days ago" },
    { name: "Adobe", icon: "adobe", category: "Design", active: false, lastSeen: "8 months ago" },
    { name: "Slack", icon: "slack", category: "Communication", active: true, lastSeen: "2 weeks ago" },
  ];
  
  // Organize platforms by category
  const categorizedPlatforms = platforms.reduce((acc, platform) => {
    if (!acc[platform.category]) {
      acc[platform.category] = [];
    }
    acc[platform.category].push(platform);
    return acc;
  }, {} as Record<string, Platform[]>);
  
  // Sort categories by number of platforms (descending)
  const sortedCategories = Object.keys(categorizedPlatforms).sort(
    (a, b) => categorizedPlatforms[b].length - categorizedPlatforms[a].length
  );

  return (
    <div className="grid grid-cols-1 gap-6">
      <Card className="border border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <Globe className="h-5 w-5 mr-2 text-[#9b87f5]" />
            Digital Footprint Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-purple-50 rounded-md p-3 text-center">
              <p className="text-2xl font-bold text-[#9b87f5]">{platforms.length}</p>
              <p className="text-sm text-muted-foreground">Total Platforms</p>
            </div>
            <div className="bg-green-50 rounded-md p-3 text-center">
              <p className="text-2xl font-bold text-green-600">{platforms.filter(p => p.active).length}</p>
              <p className="text-sm text-muted-foreground">Active Accounts</p>
            </div>
            <div className="bg-blue-50 rounded-md p-3 text-center">
              <p className="text-2xl font-bold text-blue-600">{Object.keys(categorizedPlatforms).length}</p>
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">
              Digital footprint indicates a consistent online presence across multiple service categories, with active accounts on major platforms.
            </p>
          </div>
          
          <div className="space-y-4">
            {sortedCategories.map((category) => (
              <div key={category}>
                <h3 className="text-sm font-medium mb-2 flex items-center">
                  <Badge variant="outline" className="mr-2 bg-[#E5DEFF] text-[#7E69AB] border-0">
                    {category}
                  </Badge>
                  <span className="text-muted-foreground text-xs">
                    {categorizedPlatforms[category].length} platforms
                  </span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                  {categorizedPlatforms[category].map((platform) => (
                    <div 
                      key={platform.name} 
                      className={`flex items-center p-2 rounded-md border ${platform.active 
                        ? "border-gray-200 bg-white"
                        : "border-gray-100 bg-gray-50"
                      }`}
                    >
                      <div className="w-8 h-8 rounded flex items-center justify-center mr-2 overflow-hidden">
                        <img 
                          src={`https://logo.clearbit.com/${platform.name.toLowerCase()}.com`} 
                          alt={platform.name}
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${platform.name}&background=random&color=fff&size=32`;
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-medium truncate ${platform.active ? "text-gray-900" : "text-gray-500"}`}>
                          {platform.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{platform.lastSeen}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalFootprintTab;
