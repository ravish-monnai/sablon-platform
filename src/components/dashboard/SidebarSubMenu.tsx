
import { useNavigate, useLocation } from "react-router-dom";
import {
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { SubItem } from "./types/navigation";
import { cn } from "@/lib/utils";

interface SidebarSubMenuProps {
  subItems: SubItem[];
  parentPath: string;
  isActive: boolean;
}

const SidebarSubMenu = ({ 
  subItems, 
  parentPath, 
  isActive: isParentActive
}: SidebarSubMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isSubItemActive = (itemPath: string) => {
    if (itemPath.includes('?')) {
      const [basePath, queryString] = itemPath.split('?');
      const queryParams = new URLSearchParams(queryString);
      const currentParams = new URLSearchParams(location.search);
      
      return location.pathname === basePath && 
             queryParams.get('tab') === currentParams.get('tab');
    }
    return false;
  };

  if (!isParentActive) return null;

  return (
    <SidebarMenuSub>
      {subItems.map((subItem) => {
        const isActive = isSubItemActive(subItem.path);
        
        return (
          <SidebarMenuSubItem key={subItem.path}>
            <SidebarMenuSubButton
              isActive={isActive}
              onClick={() => {
                navigate(subItem.path.includes('?') 
                  ? `${parentPath}?${subItem.path.split('?')[1]}` 
                  : parentPath
                );
              }}
              className="transition-all duration-200 group"
            >
              {subItem.icon && 
                <subItem.icon className={cn(
                  "h-6 w-6 transition-all duration-300", 
                  isActive 
                    ? "text-monnai-blue" 
                    : "text-sidebar-foreground opacity-80 group-hover:text-[#9b87f5]"
                )} />
              }
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        );
      })}
    </SidebarMenuSub>
  );
};

export default SidebarSubMenu;
