
import { useNavigate } from "react-router-dom";
import {
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { SubItem } from "./types/navigation";

interface SidebarSubMenuProps {
  subItems: SubItem[];
  parentPath: string;
  isActive: (path: string) => boolean;
  viewMode: "customer" | "internal";
}

const SidebarSubMenu = ({ 
  subItems, 
  parentPath, 
  isActive, 
  viewMode 
}: SidebarSubMenuProps) => {
  const navigate = useNavigate();

  return (
    <SidebarMenuSub>
      {subItems.map((subItem) => (
        <SidebarMenuSubItem key={subItem.path}>
          <SidebarMenuSubButton
            isActive={isActive(subItem.path)}
            onClick={() => {
              navigate({ 
                pathname: parentPath, 
                search: subItem.path.includes('?') 
                  ? subItem.path.split('?')[1] 
                  : '' 
              });
            }}
          >
            {subItem.icon && <subItem.icon className="h-5 w-5" />}
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      ))}
    </SidebarMenuSub>
  );
};

export default SidebarSubMenu;
