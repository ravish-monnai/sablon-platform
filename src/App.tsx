
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
import DashboardLayout from "./components/dashboard/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />
          <Route path="/ai-journeys" element={
            <DashboardLayout>
              <AIJourneys />
            </DashboardLayout>
          } />
          <Route path="/ai-agents" element={
            <DashboardLayout>
              <AIAgents />
            </DashboardLayout>
          } />
          <Route path="/models" element={
            <DashboardLayout>
              <Models />
            </DashboardLayout>
          } />
          <Route path="/data" element={
            <DashboardLayout>
              <Data />
            </DashboardLayout>
          } />
          <Route path="/cases" element={
            <DashboardLayout>
              <Cases />
            </DashboardLayout>
          } />
          <Route path="/transactions" element={
            <DashboardLayout>
              <Transactions />
            </DashboardLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
