
import { Badge } from "@/components/ui/badge";
import { CircleCheck, CircleX, CircleAlert } from "lucide-react";
import React from "react";

// Helper functions for visual elements
export const getConfidenceBadge = (confidence?: string) => {
  switch (confidence) {
    case "High":
      return <Badge className="bg-green-100 text-green-800">High</Badge>;
    case "Medium":
      return <Badge className="bg-amber-100 text-amber-800">Medium</Badge>;
    case "Low":
      return <Badge className="bg-red-100 text-red-800">Low</Badge>;
    default:
      return <Badge variant="outline" className="text-gray-500">Unknown</Badge>;
  }
};

export const getActiveStatusIcon = (active?: string) => {
  switch (active) {
    case "YES":
      return <CircleCheck className="h-5 w-5 text-green-500" />;
    case "NO":
      return <CircleX className="h-5 w-5 text-red-500" />;
    case "UNKNOWN":
    default:
      return <CircleAlert className="h-5 w-5 text-amber-500" />;
  }
};

export const getScoreColor = (score?: number) => {
  if (!score) return "text-gray-500";
  if (score >= 80) return "text-green-600";
  if (score >= 50) return "text-amber-600";
  return "text-red-600";
};
