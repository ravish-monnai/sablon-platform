
import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarNavItem from "./SidebarNavItem";
import { customerNavItems, monnaiNavItems } from "./data/navigationItems";
import { ViewMode } from "./types/navigation";

interface NavigationProps {
  viewMode: ViewMode;
}

const SidebarNavigation = ({ viewMode }: NavigationProps) => {
  const navItems = viewMode === "customer" ? customerNavItems : monnaiNavItems;

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarNavItem
          key={item.path}
          label={item.label}
          path={item.path}
          icon={item.icon}
          subItems={item.subItems}
          viewMode={viewMode}
        />
      ))}
    </SidebarMenu>
  );
};

export default SidebarNavigation;
