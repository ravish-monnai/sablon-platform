
import { useLocation, useNavigate } from "react-router-dom";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { NavItem, ViewMode } from "./types/navigation";
import SidebarSubMenu from "./SidebarSubMenu";

interface NavItemProps extends NavItem {
  viewMode: ViewMode;
}

const SidebarNavItem = ({ 
  label, 
  path, 
  icon: Icon, 
  subItems, 
  viewMode
}: NavItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  
  const isActive = (itemPath: string) => {
    if (itemPath.includes('?')) {
      const [basePath, queryString] = itemPath.split('?');
      const queryParams = new URLSearchParams(queryString);
      const currentParams = new URLSearchParams(location.search);
      
      return currentPath === basePath && 
             queryParams.get('tab') === currentParams.get('tab');
    }
    return currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
  };

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
        isActive={subItems ? currentPath.startsWith(path) : isActive(path)}
        onClick={handleNavigation}
      >
        <Icon className="h-7 w-7" />
      </SidebarMenuButton>
      
      {subItems && (
        <SidebarSubMenu 
          subItems={subItems} 
          parentPath={path} 
          isActive={isActive} 
          viewMode={viewMode} 
        />
      )}
    </SidebarMenuItem>
  );
};

export default SidebarNavItem;
