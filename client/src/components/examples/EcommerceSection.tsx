import { EcommerceSection } from "../EcommerceSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function EcommerceSectionExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <EcommerceSection />
      </LanguageProvider>
    </ThemeProvider>
  );
}
