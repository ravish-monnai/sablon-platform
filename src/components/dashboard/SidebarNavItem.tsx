
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import FeatureTag from "@/components/ui/feature-tag";

interface SubItem {
  label: string;
  path: string;
  icon?: React.FC<{ className?: string }>;
  featureTag?: {
    variant: "new" | "beta" | "updated" | "ai" | "premium";
    label?: string;
  };
}

interface NavItemProps {
  label: string;
  path: string;
  icon: React.FC<{ className?: string }>;
  subItems?: SubItem[];
  viewMode: "customer" | "internal";
  featureTag?: {
    variant: "new" | "beta" | "updated" | "ai" | "premium";
    label?: string;
  };
}

const SidebarNavItem = ({ 
  label, 
  path, 
  icon: Icon, 
  subItems, 
  viewMode,
  featureTag
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
          <Icon className="mr-2" />
          <span className="flex items-center gap-1.5">
            {label}
            {featureTag && (
              <FeatureTag 
                variant={featureTag.variant} 
                className="scale-75"
              >
                {featureTag.label}
              </FeatureTag>
            )}
          </span>
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
            <Icon className="mr-2" />
            <span className="flex items-center gap-1.5">
              {label}
              {featureTag && (
                <FeatureTag 
                  variant={featureTag.variant} 
                  className="scale-75"
                >
                  {featureTag.label}
                </FeatureTag>
              )}
            </span>
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
                  {subItem.icon && <subItem.icon className="mr-2 h-4 w-4" />}
                  <span className="flex items-center gap-1.5">
                    {subItem.label}
                    {subItem.featureTag && (
                      <FeatureTag 
                        variant={subItem.featureTag.variant} 
                        className="scale-75"
                      >
                        {subItem.featureTag.label}
                      </FeatureTag>
                    )}
                  </span>
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
