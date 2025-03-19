
import { UserRound, Building2 } from "lucide-react";
import ViewToggle from "../agents/ViewToggle";

interface SidebarFooterContentProps {
  viewMode: "customer" | "internal";
  onViewModeChange: (value: string) => void;
}

const SidebarFooterContent = ({ viewMode, onViewModeChange }: SidebarFooterContentProps) => {
  return (
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
      <ViewToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
    </div>
  );
};

export default SidebarFooterContent;
