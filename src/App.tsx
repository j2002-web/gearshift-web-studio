
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import ReturnPolicy from "./pages/ReturnPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import NotFound from "./pages/NotFound";
import NewParts from "./pages/leads/NewParts";
import UsedParts from "./pages/leads/UsedParts";
import OEMParts from "./pages/leads/OEMParts";
import AftermarketParts from "./pages/leads/AftermarketParts";
import PerformanceParts from "./pages/leads/PerformanceParts";
import BulkPackages from "./pages/leads/BulkPackages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leads/new-parts" element={<NewParts />} />
          <Route path="/leads/used-parts" element={<UsedParts />} />
          <Route path="/leads/oem-parts" element={<OEMParts />} />
          <Route path="/leads/aftermarket" element={<AftermarketParts />} />
          <Route path="/leads/performance" element={<PerformanceParts />} />
          <Route path="/leads/bulk-packages" element={<BulkPackages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
