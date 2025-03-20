
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface ToggleOption {
  value: string;
  label: string;
  icon?: LucideIcon;
}

interface FilterToggleGroupProps {
  options: ToggleOption[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

const FilterToggleGroup: React.FC<FilterToggleGroupProps> = ({
  options,
  value,
  onValueChange,
  className,
  variant = "outline",
  size = "sm"
}) => {
  return (
    <ToggleGroup 
      type="single" 
      value={value} 
      onValueChange={onValueChange}
      className={cn("flex", className)}
      variant={variant}
      size={size}
    >
      {options.map((option) => (
        <ToggleGroupItem 
          key={option.value} 
          value={option.value}
          aria-label={option.label}
          className="flex items-center gap-1"
        >
          {option.icon && <option.icon className="h-4 w-4" />}
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default FilterToggleGroup;
