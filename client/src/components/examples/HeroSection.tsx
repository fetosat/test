import { HeroSection } from "../HeroSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function HeroSectionExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HeroSection />
      </LanguageProvider>
    </ThemeProvider>
  );
}
