import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { OffersSection } from "@/components/OffersSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { EcommerceSection } from "@/components/EcommerceSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProviderCTASection } from "@/components/ProviderCTASection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <OffersSection />
      <HowItWorksSection />
      <StatsSection />
      <WhyUsSection />
      <EcommerceSection />
      <TestimonialsSection />
      <ProviderCTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
