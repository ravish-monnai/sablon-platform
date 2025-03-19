
import MonnaiLogo from "../branding/MonnaiLogo";
import MarketFilter from "@/components/common/MarketFilter";
import { SidebarTrigger } from "@/components/ui/sidebar";

const SidebarHeaderContent = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MonnaiLogo variant="gradient" />
        <MarketFilter compact={true} />
      </div>
      <SidebarTrigger />
    </div>
  );
};

export default SidebarHeaderContent;
