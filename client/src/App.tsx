import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import Find from "@/pages/Find";
import Pricing from "@/pages/Pricing";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Blog from "@/pages/Blog";
import AboutUs from "@/pages/company/AboutUs";
import PrivacyPolicy from "@/pages/company/PrivacyPolicy";
import TermsOfService from "@/pages/company/TermsOfService";
import NotFound from "@/pages/not-found";

import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminUsers from "@/pages/admin/Users";
import AdminProviders from "@/pages/admin/Providers";
import AdminBookings from "@/pages/admin/Bookings";
import AdminAnalytics from "@/pages/admin/Analytics";

import ProviderDashboard from "@/pages/provider/ProviderDashboard";
import ProviderListings from "@/pages/provider/Listings";
import ProviderBookings from "@/pages/provider/ProviderBookings";
import ProviderMessages from "@/pages/provider/Messages";
import ProviderEarnings from "@/pages/provider/Earnings";
import ProviderReviews from "@/pages/provider/Reviews";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/find" component={Find} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/blog" component={Blog} />
      <Route path="/company/about" component={AboutUs} />
      <Route path="/company/privacy" component={PrivacyPolicy} />
      <Route path="/company/terms" component={TermsOfService} />
      
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/users" component={AdminUsers} />
      <Route path="/admin/providers" component={AdminProviders} />
      <Route path="/admin/bookings" component={AdminBookings} />
      <Route path="/admin/analytics" component={AdminAnalytics} />
      
      <Route path="/provider" component={ProviderDashboard} />
      <Route path="/provider/listings" component={ProviderListings} />
      <Route path="/provider/bookings" component={ProviderBookings} />
      <Route path="/provider/messages" component={ProviderMessages} />
      <Route path="/provider/earnings" component={ProviderEarnings} />
      <Route path="/provider/reviews" component={ProviderReviews} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Toaster />
            <Router />
          </LanguageProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
