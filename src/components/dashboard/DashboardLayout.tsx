
import { ReactNode, useState, useEffect } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { useLocation, useNavigate } from "react-router-dom"
import AIAssistant from "../ai-assistant/AIAssistant"
import { MarketProvider } from "@/contexts/MarketContext"
import SidebarNavigation from "./SidebarNavigation"
import SidebarHeaderContent from "./SidebarHeaderContent"
import SidebarFooterContent from "./SidebarFooterContent"

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  
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
  
  const handleViewModeChange = (value: string) => {
    if (value === "customer" || value === "internal") {
      setViewMode(value);
      updateViewModeInURL(value);
    }
  };

  return (
    <MarketProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-zinc-50">
          <Sidebar variant="sidebar" collapsible="icon" className="bg-sidebar border-r border-sidebar-border">
            <SidebarHeader className="p-4">
              <SidebarHeaderContent />
            </SidebarHeader>
            <SidebarContent className="px-2">
              <SidebarNavigation viewMode={viewMode} />
            </SidebarContent>
            <SidebarFooter className="p-4">
              <SidebarFooterContent 
                viewMode={viewMode} 
                onViewModeChange={handleViewModeChange} 
              />
            </SidebarFooter>
          </Sidebar>
          
          <SidebarInset className="bg-background">
            <div className="p-6 w-full">
              {children}
            </div>
          </SidebarInset>
        </div>
        
        <AIAssistant />
      </SidebarProvider>
    </MarketProvider>
  );
};

export default DashboardLayout;
