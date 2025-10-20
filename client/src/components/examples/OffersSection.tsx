import { OffersSection } from "../OffersSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function OffersSectionExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <OffersSection />
      </LanguageProvider>
    </ThemeProvider>
  );
}
