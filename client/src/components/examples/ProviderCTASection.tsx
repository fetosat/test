import { ProviderCTASection } from "../ProviderCTASection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ProviderCTASectionExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProviderCTASection />
      </LanguageProvider>
    </ThemeProvider>
  );
}
