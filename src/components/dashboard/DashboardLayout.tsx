
import { ReactNode } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import AIAssistant from "../ai-assistant/AIAssistant"
import SidebarNavigation from "./SidebarNavigation"
import SidebarHeaderContent from "./SidebarHeaderContent"

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen w-full bg-zinc-50">
        <Sidebar variant="sidebar" collapsible="icon" defaultCollapsed={true} className="bg-sidebar border-r border-sidebar-border">
          <SidebarHeader className="p-2">
            <SidebarHeaderContent />
          </SidebarHeader>
          <SidebarContent className="px-2">
            <SidebarNavigation />
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="bg-background">
          <div className="p-6 w-full">
            {children}
          </div>
        </SidebarInset>
      </div>
      
      <AIAssistant />
    </SidebarProvider>
  );
};

export default DashboardLayout;
