
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ActivityTimelineProps {
  email: string;
}

interface Activity {
  platform: string;
  time: string;
  category: string;
  action: string;
}

const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ email }) => {
  // Mock data for activity timeline with actual platforms
  const activities: Activity[] = [
    { 
      platform: "Amazon", 
      time: "2 days ago", 
      category: "E-commerce",
      action: "Made a purchase"
    },
    { 
      platform: "Netflix", 
      time: "3 days ago", 
      category: "Entertainment",
      action: "Account login"
    },
    { 
      platform: "LinkedIn", 
      time: "1 week ago", 
      category: "Professional",
      action: "Profile update"
    },
    { 
      platform: "Instagram", 
      time: "2 weeks ago", 
      category: "Social Media",
      action: "Account login"
    },
    { 
      platform: "Spotify", 
      time: "3 weeks ago", 
      category: "Entertainment",
      action: "Subscription renewed"
    },
    { 
      platform: "Flipkart", 
      time: "1 month ago", 
      category: "E-commerce",
      action: "Made a purchase"
    },
    { 
      platform: "Facebook", 
      time: "1 month ago", 
      category: "Social Media",
      action: "Changed password"
    },
    { 
      platform: "Twitter", 
      time: "2 months ago", 
      category: "Social Media",
      action: "Account login"
    },
    { 
      platform: "Canva", 
      time: "2 months ago", 
      category: "Design",
      action: "Account login"
    },
    { 
      platform: "Myntra", 
      time: "3 months ago", 
      category: "E-commerce",
      action: "Made a purchase"
    }
  ];

  // Group activities by recency
  const recentActivities = activities.filter(a => 
    a.time.includes("days") || a.time.includes("week"));
  const olderActivities = activities.filter(a => 
    a.time.includes("month"));

  // Get activity category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "E-commerce": return "bg-green-100 text-green-700";
      case "Social Media": return "bg-blue-100 text-blue-700";
      case "Entertainment": return "bg-purple-100 text-purple-700";
      case "Professional": return "bg-amber-100 text-amber-700";
      case "Design": return "bg-pink-100 text-pink-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card className="border border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center">
            <CalendarClock className="h-5 w-5 mr-2 text-[#9b87f5]" />
            Activity Timeline
          </CardTitle>
          <Badge variant="outline" className="bg-[#E5DEFF] text-[#7E69AB] border-0">
            {activities.length} activities detected
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Timeline summary */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-[#E5DEFF] rounded-md">
              <p className="text-xl font-bold text-[#7E69AB]">{recentActivities.length}</p>
              <p className="text-xs text-[#7E69AB]">Recent Activities</p>
              <p className="text-xs text-[#7E69AB] opacity-75">Last 14 days</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-md">
              <p className="text-xl font-bold text-gray-700">{activities.length}</p>
              <p className="text-xs text-gray-600">Total Activities</p>
              <p className="text-xs text-gray-500">Last 3 months</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-md">
              <p className="text-xl font-bold text-blue-700">4</p>
              <p className="text-xs text-blue-600">Categories</p>
              <p className="text-xs text-blue-500">Active platforms</p>
            </div>
          </div>
          
          {/* Recent activities */}
          <div>
            <h3 className="text-sm font-medium mb-3 flex items-center">
              <Clock className="h-4 w-4 mr-1 text-[#9b87f5]" />
              Recent Activities (Last 14 days)
            </h3>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={`recent-${index}`} className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0 mr-3 bg-white border border-gray-200 p-1">
                    <img
                      src={`https://logo.clearbit.com/${activity.platform.toLowerCase()}.com`}
                      alt={activity.platform}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${activity.platform}&background=random&color=fff&size=36`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{activity.platform}</p>
                      <Badge className={`ml-2 ${getCategoryColor(activity.category)}`} variant="outline">
                        {activity.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Older activities */}
          <div>
            <h3 className="text-sm font-medium mb-3 flex items-center">
              <Clock className="h-4 w-4 mr-1 text-[#9b87f5]" />
              Older Activities
            </h3>
            <div className="space-y-2">
              {olderActivities.map((activity, index) => (
                <div key={`older-${index}`} className="flex items-center border-l-2 border-gray-200 pl-3 py-2 hover:bg-gray-50">
                  <div className="h-8 w-8 rounded overflow-hidden flex-shrink-0 mr-3 bg-white border border-gray-200 p-1">
                    <img
                      src={`https://logo.clearbit.com/${activity.platform.toLowerCase()}.com`}
                      alt={activity.platform}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${activity.platform}&background=random&color=fff&size=32`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.platform}</span> - {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge className={`ml-2 ${getCategoryColor(activity.category)}`} variant="outline">
                    {activity.category}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
