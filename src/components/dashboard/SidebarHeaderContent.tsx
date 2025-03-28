
import MonnaiLogo from "../branding/MonnaiLogo";
import { SidebarTrigger } from "@/components/ui/sidebar";

const SidebarHeaderContent = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MonnaiLogo variant="gradient" />
      </div>
      <SidebarTrigger />
    </div>
  );
};

export default SidebarHeaderContent;
