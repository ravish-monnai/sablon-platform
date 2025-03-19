
import { 
  LayoutDashboard, 
  Workflow, 
  Bot, 
  Database, 
  FileCode, 
  FileText, 
  Users,
  Wallet,
  PlayCircle
} from "lucide-react";
import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarNavItem from "./SidebarNavItem";

interface NavigationProps {
  viewMode: "customer" | "internal";
}

const SidebarNavigation = ({ viewMode }: NavigationProps) => {
  const customerNavItems = [
    { label: "Dashboard", path: "/", icon: LayoutDashboard },
    { 
      label: "AI Journeys", 
      path: "/ai-journeys", 
      icon: Workflow,
      subItems: [
        { label: "Journey Builder", path: "/ai-journeys?tab=workflow" },
        { label: "Live Journeys", path: "/ai-journeys?tab=live", icon: PlayCircle }
      ]
    },
    { 
      label: "AI Agents", 
      path: "/ai-agents", 
      icon: Bot,
      subItems: [
        { label: "Agent Builder", path: "/ai-agents?tab=builder" },
        { label: "Live Agents", path: "/ai-agents?tab=live", icon: PlayCircle }
      ]
    },
    { label: "Models", path: "/models", icon: FileCode },
    { label: "Data", path: "/data", icon: Database },
    { label: "Cases", path: "/cases", icon: FileText },
    { label: "Customers", path: "/customers", icon: Users },
    { label: "Transactions", path: "/transactions", icon: Wallet },
  ];
  
  const monnaiNavItems = [
    { label: "Operations Dashboard", path: "/", icon: LayoutDashboard },
    { 
      label: "AI Journeys", 
      path: "/ai-journeys", 
      icon: Workflow,
      subItems: [
        { label: "Journey Builder", path: "/ai-journeys?tab=workflow" },
        { label: "Live Journeys", path: "/ai-journeys?tab=live", icon: PlayCircle }
      ]
    },
    { 
      label: "AI Agents", 
      path: "/ai-agents", 
      icon: Bot,
      subItems: [
        { label: "Agent Builder", path: "/ai-agents?tab=builder" },
        { label: "Live Agents", path: "/ai-agents?tab=live", icon: PlayCircle }
      ]
    },
    { label: "Models", path: "/models", icon: FileCode },
    { label: "Data", path: "/data", icon: Database },
    { label: "All Transactions", path: "/transactions", icon: Wallet },
  ];

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
