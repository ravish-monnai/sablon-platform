
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import AIJourneys from "./pages/AIJourneys";
import AIAgents from "./pages/AIAgents";
import Models from "./pages/Models";
import Data from "./pages/Data";
import Cases from "./pages/Cases";
import Transactions from "./pages/Transactions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai-journeys" element={<AIJourneys />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/models" element={<Models />} />
          <Route path="/data" element={<Data />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/transactions" element={<Transactions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
