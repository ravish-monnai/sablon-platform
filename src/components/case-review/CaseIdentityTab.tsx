
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, Mail, Phone, Globe, File, Fingerprint,
  Check, AlertTriangle, Download, 
  MessageCircle, Users, Briefcase, GraduationCap, Gamepad, BadgeDollarSign, Wallet, Share
} from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

interface CaseIdentityTabProps {
  caseData: any;
}

// Category configuration with icons and risk levels
const digitalCategories = [
  { id: "email", name: "Email", icon: Mail, isCritical: true, impact: "high" },
  { id: "social", name: "Social Media", icon: Users, isCritical: true, impact: "high" },
  { id: "messaging", name: "Messaging", icon: MessageCircle, isCritical: false, impact: "medium" },
  { id: "professional", name: "Professional", icon: Briefcase, isCritical: false, impact: "medium" },
  { id: "education", name: "Education", icon: GraduationCap, isCritical: false, impact: "low" },
  { id: "gaming", name: "Gaming", icon: Gamepad, isCritical: true, impact: "high" },
  { id: "betting", name: "Betting/Gambling", icon: BadgeDollarSign, isCritical: true, impact: "critical" },
  { id: "finance", name: "Finance", icon: Wallet, isCritical: true, impact: "critical" },
  { id: "sharing", name: "File Sharing", icon: Share, isCritical: false, impact: "medium" },
];

// Impact color mapping
const impactColors: Record<string, string> = {
  critical: "#ea384c",
  high: "#F97316",
  medium: "#9b87f5",
  low: "#8E9196"
};

// Generate category data based on risk profile
const generateCategoryData = (riskLevel: string) => {
  return digitalCategories.map(category => {
    let usage = 0;
    let flags = [];
    
    // Higher risk profiles have more concerning digital footprints
    if (riskLevel === "High" || riskLevel === "Critical") {
      if (category.id === "betting" || category.id === "gaming") {
        usage = Math.floor(Math.random() * 30) + 70; // High usage
        flags.push("Excessive activity");
        flags.push("Recent large transactions");
      } else if (category.id === "finance") {
        usage = Math.floor(Math.random() * 40) + 30;
        flags.push("Multiple new accounts");
      } else if (category.id === "social") {
        usage = Math.floor(Math.random() * 30) + 60;
        flags.push("Multiple new connections");
        flags.push("Cross-border activity");
      } else {
        usage = Math.floor(Math.random() * 70);
      }
    } else {
      // Low/Medium risk profiles have more balanced digital footprints
      if (category.id === "professional" || category.id === "email") {
        usage = Math.floor(Math.random() * 30) + 60; // Higher usage of professional platforms
      } else if (category.id === "betting" || category.id === "gaming") {
        usage = Math.floor(Math.random() * 30); // Lower usage of concerning platforms
      } else {
        usage = Math.floor(Math.random() * 60);
      }
    }
    
    return {
      ...category,
      usage,
      flags
    };
  }).sort((a, b) => b.usage - a.usage); // Sort by usage (highest first)
};

const CaseIdentityTab = ({ caseData }: CaseIdentityTabProps) => {
  // Generate category data based on the case risk level
  const categoryData = generateCategoryData(caseData.riskLevel);
  
  // Count categories with high usage that are also critical
  const criticalCategories = categoryData.filter(c => c.isCritical && c.usage > 50);

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
                <h3 className="font-medium">Digital Category Analysis</h3>
                <p className="text-sm text-muted-foreground">User's activity across digital categories</p>
              </div>
              {criticalCategories.length > 0 && (
                <Badge variant="outline" className="text-red-600 border-red-600">
                  {criticalCategories.length} Critical Categories
                </Badge>
              )}
            </div>

            <div className="h-64 border rounded-md p-4 bg-gray-50">
              <ChartContainer
                config={digitalCategories.reduce((acc, cat) => {
                  acc[cat.id] = { color: impactColors[cat.impact] || "#8E9196" };
                  return acc;
                }, {} as Record<string, { color: string }>)}
              >
                <BarChart
                  data={categoryData}
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
                  <YAxis 
                    label={{ 
                      value: 'Usage Score', 
                      angle: -90, 
                      position: 'insideLeft', 
                      style: { textAnchor: 'middle' } 
                    }} 
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent 
                        labelFormatter={(value) => `Category: ${value}`}
                        formatter={(value, name, entry) => {
                          const category = entry.payload;
                          return [
                            <div key="usage" className="flex flex-col">
                              <span className="font-semibold">Usage Score: {category.usage}</span>
                              {category.impact === "critical" || category.impact === "high" ? (
                                <span className="text-red-500 font-semibold">
                                  Impact: {category.impact.toUpperCase()}
                                </span>
                              ) : (
                                <span>Impact: {category.impact}</span>
                              )}
                              {category.flags?.length > 0 && (
                                <div className="mt-1">
                                  <span className="font-semibold">Flags:</span>
                                  <ul className="list-disc pl-4">
                                    {category.flags.map((flag: string, idx: number) => (
                                      <li key={idx} className="text-xs">{flag}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ];
                        }}
                      />
                    }
                  />
                  <Bar dataKey="usage" name="Usage">
                    {categoryData.map((entry: any, index: number) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={impactColors[entry.impact] || "#8E9196"} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>

            <div className="flex flex-wrap gap-4 my-2">
              {categoryData.map((category: any) => {
                const IconComponent = category.icon;
                const isCritical = category.isCritical && category.usage > 50;
                
                return (
                  <div 
                    key={category.id}
                    className={`flex flex-col items-center p-3 rounded-lg ${
                      isCritical 
                        ? "border-2 border-red-300 bg-red-50" 
                        : category.usage > 50
                          ? "border border-blue-200 bg-blue-50"
                          : "border border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div 
                      className={`p-2 rounded-full mb-1 ${
                        isCritical ? "bg-red-100" : 
                        category.usage > 50 ? "bg-blue-100" : "bg-gray-100"
                      }`}
                      style={{ 
                        color: impactColors[category.impact]
                      }}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium">{category.name}</span>
                    <span className={`text-xs mt-1 ${
                      isCritical ? "text-red-600 font-semibold" : "text-muted-foreground"
                    }`}>
                      {category.usage}% usage
                    </span>
                    {isCritical && (
                      <Badge variant="outline" className="text-red-600 border-red-600 mt-1 text-[0.65rem] px-1">
                        CRITICAL
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4 border-t pt-4">
              <h4 className="font-medium text-sm mb-2">Risk Assessment Impact</h4>
              <p className="text-sm text-muted-foreground">
                {criticalCategories.length > 0 ? (
                  <>
                    The user's digital footprint shows <span className="font-semibold text-red-600">significant activity in {criticalCategories.length} high-risk categories</span>, which may indicate elevated risk for this case. 
                    {criticalCategories.map(c => c.name).join(', ')} usage patterns should be examined closely.
                  </>
                ) : (
                  <>
                    The user's digital footprint does not show concerning patterns across high-risk categories, suggesting normal usage behavior.
                  </>
                )}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseIdentityTab;
