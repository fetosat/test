import { HowItWorksSection } from "../HowItWorksSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function HowItWorksSectionExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HowItWorksSection />
      </LanguageProvider>
    </ThemeProvider>
  );
}
