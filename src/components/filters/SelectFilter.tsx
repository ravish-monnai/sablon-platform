
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LucideIcon } from "lucide-react";

export interface FilterOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectFilterProps {
  options: FilterOption[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  icon?: LucideIcon;
  className?: string;
  triggerClassName?: string;
  disabled?: boolean;
}

const SelectFilter: React.FC<SelectFilterProps> = ({ 
  options, 
  value, 
  onValueChange, 
  placeholder = "Select...",
  icon: Icon,
  className = "",
  triggerClassName = "",
  disabled = false
}) => {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className={`w-40 ${triggerClassName}`}>
        <div className="flex items-center">
          {Icon && <Icon className="mr-2 h-4 w-4" />}
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent className={className}>
        {options.map((option) => (
          <SelectItem 
            key={option.value} 
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectFilter;
