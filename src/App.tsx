
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";

// Pages
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

// Customer App Pages
import CustomerApp from "./pages/customer/CustomerApp";
import CustomerLogin from "./pages/customer/CustomerLogin";
import CustomerSignup from "./pages/customer/CustomerSignup";

// Vendor App Pages
import VendorApp from "./pages/vendor/VendorApp";
import VendorLogin from "./pages/vendor/VendorLogin";
import VendorSignup from "./pages/vendor/VendorSignup";

// Driver App Pages
import DriverApp from "./pages/driver/DriverApp";
import DriverLogin from "./pages/driver/DriverLogin";
import DriverSignup from "./pages/driver/DriverSignup";

// Admin Dashboard Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Customer App Routes */}
              <Route path="/customer" element={<CustomerApp />} />
              <Route path="/customer/login" element={<CustomerLogin />} />
              <Route path="/customer/signup" element={<CustomerSignup />} />
              
              {/* Vendor App Routes */}
              <Route path="/vendor" element={<VendorApp />} />
              <Route path="/vendor/login" element={<VendorLogin />} />
              <Route path="/vendor/signup" element={<VendorSignup />} />
              
              {/* Driver App Routes */}
              <Route path="/driver" element={<DriverApp />} />
              <Route path="/driver/login" element={<DriverLogin />} />
              <Route path="/driver/signup" element={<DriverSignup />} />
              
              {/* Admin Dashboard Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
