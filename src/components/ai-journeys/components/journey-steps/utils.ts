
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

// Helper function to get step background color
export function getStepColor(step: JourneyStep, index: number): string {
  if (step.color) return step.color;
  
  const colors = [
    "#2bbfe0", // Blue for Document Upload
    "#ffcc1d", // Yellow for Feature Extraction
    "#66cc66", // Green for Risk Assessment
    "#e85abd", // Pink for Underwriting
    "#2bbfe0"  // Blue for Data Storage
  ];
  
  return colors[index % colors.length];
}

// Helper function to get branch color
export function getBranchColor(index: number): string {
  const colors = [
    "#ff7066", // Red-ish for high risk
    "#47c98e", // Green-ish for low risk
    "#7f66ff"  // Purple for neutral
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
