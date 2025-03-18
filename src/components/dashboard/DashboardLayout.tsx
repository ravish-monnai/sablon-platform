
import { ReactNode, useState } from "react"
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
  CircleDollarSign,
  Users,
  UserRound,
  Building2
} from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import MonnaiLogo from "../branding/MonnaiLogo"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname
  const [viewMode, setViewMode] = useState<"customer" | "internal">("customer")
  
  // Navigation items with routes and icons
  const navItems = [
    { label: "Dashboard", path: "/", icon: LayoutDashboard },
    { label: "AI Journeys", path: "/ai-journeys", icon: Workflow },
    { label: "AI Agents", path: "/ai-agents", icon: Bot },
    { label: "Models", path: "/models", icon: FileCode },
    { label: "Data", path: "/data", icon: Database },
    { label: "Cases", path: "/cases", icon: FileText },
    { label: "Customers", path: "/customers", icon: Users },
    { label: "Transactions", path: "/transactions", icon: CircleDollarSign },
  ]
  
  // Function to determine if a nav item is active
  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(`${path}/`)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar variant="sidebar" collapsible="icon">
          <SidebarHeader className="flex flex-col p-4 gap-4">
            <div className="flex items-center justify-between">
              <MonnaiLogo variant="gradient" />
              <SidebarTrigger />
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <UserRound className={`h-4 w-4 ${viewMode === "customer" ? "text-monnai-pink" : "text-gray-400"}`} />
                <Label htmlFor="view-mode-toggle" className="text-sm">Customer</Label>
              </div>
              <Switch 
                id="view-mode-toggle" 
                checked={viewMode === "internal"}
                onCheckedChange={(checked) => setViewMode(checked ? "internal" : "customer")}
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
                    onClick={() => navigate(item.path)}
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
    </SidebarProvider>
  )
}

export default DashboardLayout
