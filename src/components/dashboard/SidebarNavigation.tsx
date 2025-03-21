
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

// Define a clear interface for navigation items
interface NavItem {
  label: string;
  path: string;
  icon: React.FC<{ className?: string }>;
  subItems?: SubItem[];
  featureTag?: {
    variant: "new" | "beta" | "updated" | "ai" | "premium";
    label?: string;
  };
}

interface SubItem {
  label: string;
  path: string;
  icon?: React.FC<{ className?: string }>;
  featureTag?: {
    variant: "new" | "beta" | "updated" | "ai" | "premium";
    label?: string;
  };
}

const SidebarNavigation = ({ viewMode }: NavigationProps) => {
  const customerNavItems: NavItem[] = [
    { label: "Dashboard", path: "/", icon: LayoutDashboard },
    { 
      label: "AI Journeys", 
      path: "/ai-journeys", 
      icon: Workflow,
      subItems: [
        { 
          label: "Journey Builder", 
          path: "/ai-journeys?tab=workflow",
          featureTag: { variant: "new" }
        },
        { 
          label: "Live Journeys", 
          path: "/ai-journeys?tab=live", 
          icon: PlayCircle,
          featureTag: { variant: "new" }
        }
      ]
    },
    { 
      label: "AI Agents", 
      path: "/ai-agents", 
      icon: Bot,
      subItems: [
        { 
          label: "Agent Builder", 
          path: "/ai-agents?tab=builder",
          featureTag: { variant: "new" }
        },
        { 
          label: "Live Agents", 
          path: "/ai-agents?tab=live", 
          icon: PlayCircle,
          featureTag: { variant: "new" }
        }
      ]
    },
    { label: "Models", path: "/models", icon: FileCode },
    { label: "Data", path: "/data", icon: Database },
    { 
      label: "Cases", 
      path: "/cases", 
      icon: FileText,
      featureTag: { variant: "new" }
    },
    { label: "Customers", path: "/customers", icon: Users },
    { label: "Transactions", path: "/transactions", icon: Wallet },
  ];
  
  const monnaiNavItems: NavItem[] = [
    { label: "Operations Dashboard", path: "/", icon: LayoutDashboard },
    { 
      label: "AI Journeys", 
      path: "/ai-journeys", 
      icon: Workflow,
      subItems: [
        { 
          label: "Journey Builder", 
          path: "/ai-journeys?tab=workflow",
          featureTag: { variant: "new" }
        },
        { 
          label: "Live Journeys", 
          path: "/ai-journeys?tab=live", 
          icon: PlayCircle,
          featureTag: { variant: "new" }
        }
      ]
    },
    { 
      label: "AI Agents", 
      path: "/ai-agents", 
      icon: Bot,
      subItems: [
        { 
          label: "Agent Builder", 
          path: "/ai-agents?tab=builder",
          featureTag: { variant: "new" }
        },
        { 
          label: "Live Agents", 
          path: "/ai-agents?tab=live", 
          icon: PlayCircle,
          featureTag: { variant: "new" }
        }
      ]
    },
    { label: "Models", path: "/models", icon: FileCode },
    { label: "Data", path: "/data", icon: Database },
    { 
      label: "All Transactions", 
      path: "/transactions", 
      icon: Wallet 
    },
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
          featureTag={item.featureTag}
        />
      ))}
    </SidebarMenu>
  );
};

export default SidebarNavigation;
