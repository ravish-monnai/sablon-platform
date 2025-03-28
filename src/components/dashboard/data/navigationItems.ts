
import { 
  LayoutDashboard, 
  FileText, 
  Users,
  Wallet,
  Workflow, 
  Bot, 
  Database, 
  Settings
} from "lucide-react";
import { NavItem } from "../types/navigation";

export const monnaiNavItems: NavItem[] = [
  { 
    label: "Dashboard", 
    path: "/", 
    icon: LayoutDashboard 
  },
  { 
    label: "Cases", 
    path: "/cases", 
    icon: FileText 
  },
  { 
    label: "Customers", 
    path: "/customers", 
    icon: Users 
  },
  { 
    label: "Transactions", 
    path: "/transactions", 
    icon: Wallet 
  },
  { 
    label: "AI Journeys", 
    path: "/ai-journeys", 
    icon: Workflow,
    subItems: [
      { 
        label: "Journey Builder", 
        path: "/ai-journeys?tab=workflow",
        icon: Workflow
      },
      { 
        label: "Live Journeys", 
        path: "/ai-journeys?tab=live", 
        icon: Workflow
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
        icon: Bot
      },
      { 
        label: "Live Agents", 
        path: "/ai-agents?tab=live", 
        icon: Bot
      }
    ]
  },
  { 
    label: "Data", 
    path: "/data", 
    icon: Database 
  },
  { 
    label: "Settings", 
    path: "/settings", 
    icon: Settings 
  },
];
