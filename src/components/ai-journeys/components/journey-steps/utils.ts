
import { JourneyStep } from "./types";

// Helper function to get the right colors based on status
export function getStepStatusBorder(status: string): string {
  switch (status) {
    case "completed":
      return "border-green-400";
    case "active":
      return "border-blue-400";
    default:
      return "border-gray-300";
  }
}

// Helper function to get step background color - removed yellow and pink
export function getStepColor(step: JourneyStep, index: number): string {
  if (step.color) return step.color;
  
  const colors = [
    "#2bbfe0", // Blue for Document Upload
    "#66cc66", // Green for Feature Extraction
    "#6b7280", // Gray for Risk Assessment
    "#3b82f6", // Blue for Underwriting
    "#8b5cf6"  // Purple for Data Storage
  ];
  
  return colors[index % colors.length];
}

// Helper function to get branch color - removed reddish color
export function getBranchColor(index: number): string {
  const colors = [
    "#3b82f6", // Blue for path 1
    "#47c98e", // Green for path 2
    "#8b5cf6"  // Purple for path 3
  ];
  
  return colors[index % colors.length];
}

// Helper function to get dot colors for connector
export function getDotColor(stepIndex: number, dotIndex: number): string {
  const fromColor = getStepColor({ id: stepIndex, title: "", description: "", icon: null, status: "completed" }, stepIndex);
  const toColor = getStepColor({ id: stepIndex + 1, title: "", description: "", icon: null, status: "completed" }, stepIndex + 1);
  
  // For simplicity, just alternate colors
  return dotIndex % 2 === 0 ? fromColor : toColor;
}
