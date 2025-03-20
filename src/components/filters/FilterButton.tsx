
import React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FilterButtonProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ 
  icon: Icon,
  children,
  onClick,
  variant = "outline",
  size = "sm",
  className
}) => {
  return (
    <Button variant={variant} size={size} onClick={onClick} className={className}>
      {Icon && <Icon className="h-4 w-4 mr-1" />}
      {children}
    </Button>
  );
};

export default FilterButton;
