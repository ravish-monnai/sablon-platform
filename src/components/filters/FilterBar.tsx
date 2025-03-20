
import React from "react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  children: React.ReactNode;
  className?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  children,
  className
}) => {
  return (
    <div className={cn("flex flex-wrap justify-between items-center gap-4", className)}>
      {children}
    </div>
  );
};

export default FilterBar;
