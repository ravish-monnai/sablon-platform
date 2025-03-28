
import { useNavigate } from "react-router-dom";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { NavItem } from "./types/navigation";
import SidebarSubMenu from "./SidebarSubMenu";
import { cn } from "@/lib/utils";

interface NavItemProps extends NavItem {
  isActive: boolean;
}

const SidebarNavItem = ({ 
  label, 
  path, 
  icon: Icon, 
  subItems, 
  isActive: isPrimaryActive
}: NavItemProps) => {
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    if (!subItems) {
      navigate(path);
      return;
    }

    // If there are subitems, navigate to the first subitem
    navigate(subItems[0].path.includes('?') 
      ? `${path}?${subItems[0].path.split('?')[1]}` 
      : path
    );
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={label}
        isActive={isPrimaryActive}
        onClick={handleNavigation}
        className="transition-all duration-200 ease-in-out group"
      >
        <Icon className={cn(
          "h-8 w-8 transition-all duration-300", 
          isPrimaryActive 
            ? "text-monnai-blue" 
            : "text-sidebar-foreground group-hover:text-monnai-blue"
        )} />
      </SidebarMenuButton>
      
      {subItems && (
        <SidebarSubMenu 
          subItems={subItems} 
          parentPath={path} 
          isActive={isPrimaryActive}
        />
      )}
    </SidebarMenuItem>
  );
};

export default SidebarNavItem;
