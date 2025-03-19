
import { ReactNode, useState, useEffect } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { 
  LayoutDashboard, 
  Workflow, 
  Bot, 
  Database, 
  FileCode, 
  FileText, 
  Users,
  UserRound,
  Building2,
  Search,
  Flag,
  Wallet,
  Sliders,
  Layers,
  Activity
} from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import MonnaiLogo from "../branding/MonnaiLogo"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import AIAssistant from "../ai-assistant/AIAssistant"
import ViewToggle from "../agents/ViewToggle"

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname
  
  const searchParams = new URLSearchParams(location.search)
  const viewModeParam = searchParams.get("viewMode")
  const [viewMode, setViewMode] = useState<"customer" | "internal">(
    viewModeParam === "internal" ? "internal" : "customer"
  )
  
  const updateViewModeInURL = (newMode: "customer" | "internal") => {
    const params = new URLSearchParams(location.search)
    params.set("viewMode", newMode)
    navigate({ pathname: location.pathname, search: params.toString() })
  }
  
  useEffect(() => {
    const mode = viewModeParam === "internal" ? "internal" : "customer"
    setViewMode(mode)
  }, [viewModeParam])
  
  const customerNavItems = [
    { label: "Dashboard", path: "/", icon: LayoutDashboard },
    { label: "AI Journeys", path: "/ai-journeys", icon: Workflow },
    { label: "AI Agents", path: "/ai-agents", icon: Bot },
    { label: "Models", path: "/models", icon: FileCode },
    { label: "Data", path: "/data", icon: Database },
    { label: "Cases", path: "/cases", icon: FileText },
    { label: "Customers", path: "/customers", icon: Users },
    { label: "Transactions", path: "/transactions", icon: Wallet },
  ]
  
  const monnaiNavItems = [
    { label: "Operations Dashboard", path: "/", icon: LayoutDashboard },
    { label: "AI Journeys", path: "/ai-journeys", icon: Workflow },
    { label: "AI Agents", path: "/ai-agents", icon: Bot },
    { label: "Models", path: "/models", icon: FileCode },
    { label: "Data", path: "/data", icon: Database },
    { label: "All Transactions", path: "/transactions", icon: Wallet },
  ]
  
  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(`${path}/`)
  }

  const navItems = viewMode === "customer" ? customerNavItems : monnaiNavItems

  const handleViewModeChange = (value: string) => {
    if (value === "customer" || value === "internal") {
      setViewMode(value);
      updateViewModeInURL(value);
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar variant="sidebar" collapsible="icon">
          <SidebarHeader className="flex flex-col p-4 gap-4">
            <div className="flex items-center justify-between">
              <MonnaiLogo variant="gradient" />
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    tooltip={item.label}
                    isActive={isActive(item.path)}
                    onClick={() => {
                      const params = new URLSearchParams();
                      params.set("viewMode", viewMode);
                      navigate({ pathname: item.path, search: params.toString() });
                    }}
                  >
                    <item.icon className="mr-2" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center">
                  <UserRound className={`h-4 w-4 mr-1 ${viewMode === "customer" ? "text-monnai-pink" : "text-gray-400"}`} />
                  Customer View
                </span>
                <span className="flex items-center">
                  <Building2 className={`h-4 w-4 ml-1 ${viewMode === "internal" ? "text-monnai-pink" : "text-gray-400"}`} />
                  Monnai View
                </span>
              </div>
              <ViewToggle viewMode={viewMode} onViewModeChange={handleViewModeChange} />
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className="p-6 w-full">
            {children}
          </div>
        </SidebarInset>
      </div>
      
      {/* AI Assistant component */}
      <AIAssistant />
    </SidebarProvider>
  )
}

export default DashboardLayout
