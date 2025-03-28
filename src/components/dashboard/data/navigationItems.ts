
import { 
  LayoutDashboard, 
  FileText, 
  Users,
  Bot, 
  Database, 
  Settings,
  Coins  // New import for a more finance-related icon
} from "lucide-react";
import { NavItem } from "../types/navigation";
import { createCustomIcon } from "@/components/ui/icon";

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
    icon: Coins,  // Replace with Coins icon for a finance-related look
    subItems: [
      { 
        label: "Transaction List", 
        path: "/transactions",
        icon: Coins
      },
      { 
        label: "New Transaction", 
        path: "/transactions/new", 
        icon: createCustomIcon("/lovable-uploads/19b78546-e02e-4d5e-8942-6a3d06bf5c6f.png", "h-6 w-6")
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
