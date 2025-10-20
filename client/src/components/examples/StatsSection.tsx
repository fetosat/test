import { StatsSection } from "../StatsSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function StatsSectionExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <StatsSection />
      </LanguageProvider>
    </ThemeProvider>
  );
}
