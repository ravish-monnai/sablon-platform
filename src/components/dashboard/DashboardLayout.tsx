
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

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar variant="sidebar" collapsible="icon">
          <SidebarHeader className="flex flex-col p-4 gap-4">
            <div className="flex items-center justify-between">
              <MonnaiLogo variant="gradient" />
              <SidebarTrigger />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <UserRound className={`h-4 w-4 ${viewMode === "customer" ? "text-monnai-pink" : "text-gray-400"}`} />
                <Label htmlFor="view-mode-toggle" className="text-sm">Customer</Label>
              </div>
              <Switch 
                id="view-mode-toggle" 
                checked={viewMode === "internal"}
                onCheckedChange={(checked) => {
                  const newMode = checked ? "internal" : "customer";
                  setViewMode(newMode);
                  updateViewModeInURL(newMode);
                }}
              />
              <div className="flex items-center space-x-2">
                <Building2 className={`h-4 w-4 ${viewMode === "internal" ? "text-monnai-pink" : "text-gray-400"}`} />
                <Label htmlFor="view-mode-toggle" className="text-sm">Monnai</Label>
              </div>
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
