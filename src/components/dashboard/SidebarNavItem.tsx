
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

interface SubItem {
  label: string;
  path: string;
  icon?: React.FC<{ className?: string }>;
}

interface NavItemProps {
  label: string;
  path: string;
  icon: React.FC<{ className?: string }>;
  subItems?: SubItem[];
  viewMode: "customer" | "internal";
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

  return (
    <SidebarMenuItem>
      {!subItems ? (
        <SidebarMenuButton
          tooltip={label}
          isActive={isActive(path)}
          onClick={() => {
            const params = new URLSearchParams();
            params.set("viewMode", viewMode);
            navigate({ pathname: path, search: params.toString() });
          }}
        >
          <Icon className="h-6 w-6" />
        </SidebarMenuButton>
      ) : (
        <>
          <SidebarMenuButton
            tooltip={label}
            isActive={currentPath.startsWith(path)}
            onClick={() => {
              const params = new URLSearchParams();
              params.set("viewMode", viewMode);
              navigate({ 
                pathname: path, 
                search: subItems?.[0].path.includes('?') 
                  ? subItems[0].path.split('?')[1] 
                  : params.toString() 
              });
            }}
          >
            <Icon className="h-6 w-6" />
          </SidebarMenuButton>
          
          <SidebarMenuSub>
            {subItems.map((subItem) => (
              <SidebarMenuSubItem key={subItem.path}>
                <SidebarMenuSubButton
                  isActive={isActive(subItem.path)}
                  onClick={() => {
                    navigate({ 
                      pathname: path, 
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
        </>
      )}
    </SidebarMenuItem>
  );
};

export default SidebarNavItem;
