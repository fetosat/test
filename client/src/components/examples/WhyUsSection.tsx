import { WhyUsSection } from "../WhyUsSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function WhyUsSectionExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <WhyUsSection />
      </LanguageProvider>
    </ThemeProvider>
  );
}
