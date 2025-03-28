
import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarNavItem from "./SidebarNavItem";
import { monnaiNavItems } from "./data/navigationItems";
import { useLocation } from "react-router-dom";

const SidebarNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navItems = monnaiNavItems;

  return (
    <SidebarMenu className="py-2">
      {navItems.map((item) => (
        <SidebarNavItem
          key={item.path}
          label={item.label}
          path={item.path}
          icon={item.icon}
          subItems={item.subItems}
          isActive={currentPath === item.path || currentPath.startsWith(`${item.path}/`)}
        />
      ))}
    </SidebarMenu>
  );
};

export default SidebarNavigation;
