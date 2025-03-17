
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigate, useLocation } from "react-router-dom"

interface DashboardTabsProps {
  className?: string
}

const DashboardTabs = ({ className }: DashboardTabsProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  
  // Function to determine if tab is active based on path
  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(`${path}/`)
  }

  return (
    <Tabs
      defaultValue={isActive("/") ? "/" : currentPath}
      className={className}
      onValueChange={(value) => navigate(value)}
    >
      <TabsList className="grid grid-cols-7 w-full">
        <TabsTrigger value="/" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="/ai-journeys" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          AI Journeys
        </TabsTrigger>
        <TabsTrigger value="/ai-agents" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          AI Agents
        </TabsTrigger>
        <TabsTrigger value="/models" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Models
        </TabsTrigger>
        <TabsTrigger value="/data" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Data
        </TabsTrigger>
        <TabsTrigger value="/cases" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Cases
        </TabsTrigger>
        <TabsTrigger value="/transactions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Transactions
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default DashboardTabs
