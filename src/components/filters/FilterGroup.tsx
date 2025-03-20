
import React from "react";
import { cn } from "@/lib/utils";

interface FilterGroupProps {
  children: React.ReactNode;
  className?: string;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ 
  children,
  className
}) => {
  return (
    <div className={cn("flex flex-wrap gap-2 items-center", className)}>
      {children}
    </div>
  );
};

export default FilterGroup;
