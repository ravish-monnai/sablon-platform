
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Globe, Phone, Database } from "lucide-react";

const SourceIndicators: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-green-100 shadow-sm">
        <Globe className="h-5 w-5 text-blue-600" />
        <span className="text-sm font-medium">Government Sources</span>
        <Badge className="bg-green-100 text-green-800">Verified</Badge>
      </div>
      
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-100 shadow-sm">
        <Phone className="h-5 w-5 text-indigo-600" />
        <span className="text-sm font-medium">Mobile Sources</span>
        <Badge className="bg-blue-100 text-blue-800">Checked</Badge>
      </div>
      
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-purple-100 shadow-sm">
        <Database className="h-5 w-5 text-purple-600" />
        <span className="text-sm font-medium">Consumer Databases</span>
        <Badge className="bg-purple-100 text-purple-800">Consulted</Badge>
      </div>
    </div>
  );
};

export default SourceIndicators;
