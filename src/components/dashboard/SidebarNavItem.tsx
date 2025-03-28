
import { useNavigate } from "react-router-dom";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { NavItem, ViewMode } from "./types/navigation";
import SidebarSubMenu from "./SidebarSubMenu";
import { cn } from "@/lib/utils";

interface NavItemProps extends NavItem {
  viewMode: ViewMode;
  isActive: boolean;
}

const SidebarNavItem = ({ 
  label, 
  path, 
  icon: Icon, 
  subItems, 
  viewMode,
  isActive: isPrimaryActive
}: NavItemProps) => {
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    const params = new URLSearchParams();
    params.set("viewMode", viewMode);

    if (!subItems) {
      navigate({ pathname: path, search: params.toString() });
      return;
    }

    // If there are subitems, navigate to the first subitem
    navigate({ 
      pathname: path, 
      search: subItems[0].path.includes('?') 
        ? subItems[0].path.split('?')[1] 
        : params.toString() 
    });
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={label}
        isActive={isPrimaryActive}
        onClick={handleNavigation}
        className="transition-all duration-200 ease-in-out"
      >
        <Icon className={cn(
          "h-8 w-8 transition-all", 
          isPrimaryActive 
            ? "text-sidebar-accent-foreground" 
            : "text-sidebar-foreground"
        )} />
      </SidebarMenuButton>
      
      {subItems && (
        <SidebarSubMenu 
          subItems={subItems} 
          parentPath={path} 
          viewMode={viewMode} 
          isActive={isPrimaryActive}
        />
      )}
    </SidebarMenuItem>
  );
};

export default SidebarNavItem;
