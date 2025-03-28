
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
import { NavItem } from "../types/navigation";

export const customerNavItems: NavItem[] = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { 
    label: "AI Journeys", 
    path: "/ai-journeys", 
    icon: Workflow,
    subItems: [
      { 
        label: "Journey Builder", 
        path: "/ai-journeys?tab=workflow",
        icon: PlayCircle
      },
      { 
        label: "Live Journeys", 
        path: "/ai-journeys?tab=live", 
        icon: PlayCircle
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
        icon: PlayCircle
      },
      { 
        label: "Live Agents", 
        path: "/ai-agents?tab=live", 
        icon: PlayCircle
      }
    ]
  },
  { label: "Models", path: "/models", icon: FileCode },
  { label: "Data", path: "/data", icon: Database },
  { label: "Cases", path: "/cases", icon: FileText },
  { label: "Customers", path: "/customers", icon: Users },
  { label: "Transactions", path: "/transactions", icon: Wallet },
];
  
export const monnaiNavItems: NavItem[] = [
  { label: "Operations Dashboard", path: "/", icon: LayoutDashboard },
  { 
    label: "AI Journeys", 
    path: "/ai-journeys", 
    icon: Workflow,
    subItems: [
      { 
        label: "Journey Builder", 
        path: "/ai-journeys?tab=workflow",
        icon: PlayCircle
      },
      { 
        label: "Live Journeys", 
        path: "/ai-journeys?tab=live", 
        icon: PlayCircle
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
        icon: PlayCircle
      },
      { 
        label: "Live Agents", 
        path: "/ai-agents?tab=live", 
        icon: PlayCircle
      }
    ]
  },
  { label: "Models", path: "/models", icon: FileCode },
  { label: "Data", path: "/data", icon: Database },
  { label: "All Transactions", path: "/transactions", icon: Wallet },
];
