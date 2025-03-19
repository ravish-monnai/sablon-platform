
import AIAgentsContent from "@/components/agents/AIAgentsContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";
import LiveJourneys from "@/components/ai-journeys/LiveJourneys";

const AIAgents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab") || "builder";
  
  const handleTabChange = (value: string) => {
    searchParams.set("tab", value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="builder">Agent Builder</TabsTrigger>
        <TabsTrigger value="live">Live Agents</TabsTrigger>
      </TabsList>
      <TabsContent value="builder">
        <AIAgentsContent />
      </TabsContent>
      <TabsContent value="live">
        <LiveJourneys />
      </TabsContent>
    </Tabs>
  );
};

export default AIAgents;
