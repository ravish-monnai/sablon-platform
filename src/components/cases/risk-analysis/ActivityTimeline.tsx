
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

interface ActivityTimelineProps {
  email: string;
}

const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ email }) => {
  // Mock data for activity timeline
  const activities = [
    { 
      platform: "ClickASnap", 
      time: "30 months back", 
      icon: "📸" 
    },
    { 
      platform: "SlideTeam", 
      time: "47 months back", 
      icon: "🖼️" 
    },
    { 
      platform: "Twitter", 
      time: "50 months back", 
      icon: "🐦" 
    },
    { 
      platform: "Indiamart", 
      time: "53 months back", 
      icon: "🛒" 
    },
    { 
      platform: "Gravatar", 
      time: "53 months back", 
      icon: "👤" 
    },
    { 
      platform: "Mashable", 
      time: "57 months back", 
      icon: "📱" 
    },
    { 
      platform: "Canva", 
      time: "70 months back", 
      icon: "🎨" 
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <CalendarClock className="h-5 w-5 mr-2 text-[#9b87f5]" />
          <CardTitle className="text-base">Activity Timeline</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <div className="grid grid-cols-3 text-xs font-medium text-muted-foreground mb-2">
            <div>OLDEST PERIOD</div>
            <div>LATEST PERIOD</div>
            <div>NUMBER OF EVENTS</div>
          </div>
          <div className="grid grid-cols-3 text-sm mb-4">
            <div className="font-medium">Above 48 Months</div>
            <div className="font-medium">Below 48 Months</div>
            <div className="font-medium">21</div>
          </div>
        </div>
        
        <div className="space-y-3 mt-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center border-l-2 border-gray-200 pl-3 py-1 hover:bg-gray-50">
              <div className="w-6 text-center mr-2">{activity.icon}</div>
              <div className="flex-1">
                <p className="text-sm">Email was seen active on <span className="font-medium">{activity.platform}</span></p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
