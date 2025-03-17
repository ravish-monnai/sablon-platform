import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, Mail, Phone, Globe, File, Fingerprint,
  Check, AlertTriangle, Download, 
  Twitter, Facebook, Instagram, Linkedin, Github
} from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

interface CaseIdentityTabProps {
  caseData: any;
}

const platformIcons: Record<string, React.ElementType> = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  // Other platforms use Globe as fallback
};

const CaseIdentityTab = ({ caseData }: CaseIdentityTabProps) => {
  const digitalFootprint = caseData?.digitalFootprint || { platforms: [] };
  
  const activePlatforms = digitalFootprint.platforms.filter((p: any) => p.active);
  
  const platformColors: Record<string, string> = {
    twitter: "#1DA1F2",
    facebook: "#4267B2",
    instagram: "#E1306C",
    linkedin: "#0077B5",
    github: "#333333",
    reddit: "#FF4500",
    tiktok: "#000000",
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2 text-[#9b87f5]" />
            <CardTitle className="text-lg">Identity Information</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="font-medium">{caseData.customer}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="font-medium">{caseData.email}</p>
                {caseData.emailVerified ? 
                  <Badge variant="outline" className="ml-2 text-green-600 border-green-600">
                    <Check className="h-3 w-3 mr-1" /> Verified
                  </Badge> : 
                  <Badge variant="outline" className="ml-2 text-amber-600 border-amber-600">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Unverified
                  </Badge>
                }
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="font-medium">{caseData.phone}</p>
                {caseData.phoneVerified ? 
                  <Badge variant="outline" className="ml-2 text-green-600 border-green-600">
                    <Check className="h-3 w-3 mr-1" /> Verified
                  </Badge> : 
                  <Badge variant="outline" className="ml-2 text-amber-600 border-amber-600">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Unverified
                  </Badge>
                }
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="font-medium">{caseData.location}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-3">Identity Documents</h3>
            <div className="space-y-3">
              {caseData.documents.map((doc: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between border rounded-md p-3">
                  <div className="flex items-center">
                    <File className="h-10 w-10 p-2 mr-3 bg-gray-100 rounded-md text-gray-600" />
                    <div>
                      <p className="font-medium">{doc.type}</p>
                      <div className="flex items-center">
                        <p className="text-sm text-muted-foreground mr-2">
                          Score: {doc.score}/100
                        </p>
                        <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${
                              doc.score >= 80 ? "bg-green-500" :
                              doc.score >= 60 ? "bg-amber-400" :
                              "bg-red-500"
                            }`} 
                            style={{ width: `${doc.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {doc.verified ? 
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <Check className="h-3 w-3 mr-1" /> Verified
                      </Badge> : 
                      <Badge variant="outline" className="text-amber-600 border-amber-600">
                        <AlertTriangle className="h-3 w-3 mr-1" /> Issues
                      </Badge>
                    }
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center">
            <Fingerprint className="h-5 w-5 mr-2 text-[#9b87f5]" />
            <CardTitle className="text-lg">Digital Footprint</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Platform Activity</h3>
                <p className="text-sm text-muted-foreground">User's presence across digital platforms</p>
              </div>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                {activePlatforms.length} Active Platforms
              </Badge>
            </div>

            <div className="h-64 border rounded-md p-4 bg-gray-50">
              <ChartContainer
                config={{
                  twitter: { color: "#1DA1F2" },
                  facebook: { color: "#4267B2" },
                  instagram: { color: "#E1306C" },
                  linkedin: { color: "#0077B5" },
                  github: { color: "#333333" },
                  reddit: { color: "#FF4500" },
                  tiktok: { color: "#000000" },
                }}
              >
                <BarChart
                  data={activePlatforms}
                  margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis label={{ value: 'Usage Score', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent 
                        labelFormatter={(value) => `Platform: ${value}`}
                        formatter={(value, name, entry) => {
                          const platform = entry.payload;
                          return [
                            <div key="usage" className="flex flex-col">
                              <span>Usage Score: {platform.usage}</span>
                              <span>Last Active: {platform.lastActive}</span>
                            </div>
                          ];
                        }}
                      />
                    }
                  />
                  <Bar dataKey="usage" name="Usage">
                    {activePlatforms.map((entry: any, index: number) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={platformColors[entry.id] || "#8884d8"} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>

            <div className="flex flex-wrap gap-4 my-2">
              {digitalFootprint.platforms.map((platform: any) => {
                const IconComponent = platformIcons[platform.id] || Globe;
                return (
                  <div 
                    key={platform.id}
                    className={`flex flex-col items-center p-3 rounded-lg ${
                      platform.active 
                        ? "border border-blue-200 bg-blue-50" 
                        : "border border-gray-200 bg-gray-50 opacity-60"
                    }`}
                  >
                    <div 
                      className={`p-2 rounded-full mb-1 ${
                        platform.active ? "bg-blue-100" : "bg-gray-100"
                      }`}
                      style={{ color: platform.active ? platformColors[platform.id] : "#999" }}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium">{platform.name}</span>
                    {platform.active && (
                      <span className="text-xs text-muted-foreground mt-1">
                        {platform.lastActive}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseIdentityTab;
