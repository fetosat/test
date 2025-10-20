import { CategoriesSection } from "../CategoriesSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function CategoriesSectionExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CategoriesSection />
      </LanguageProvider>
    </ThemeProvider>
  );
}
