
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClientDashboard from "./pages/ClientDashboard";
import ArtisanDashboard from "./pages/ArtisanDashboard";
import BrowseArtisans from "./pages/BrowseArtisans";
import PostProject from "./pages/PostProject";
import Community from "./pages/Community";
import ArtisanProfile from "./pages/ArtisanProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/artisan-dashboard" element={<ArtisanDashboard />} />
          <Route path="/browse-artisans" element={<BrowseArtisans />} />
          <Route path="/post-project" element={<PostProject />} />
          <Route path="/community" element={<Community />} />
          <Route path="/artisan/:id" element={<ArtisanProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
