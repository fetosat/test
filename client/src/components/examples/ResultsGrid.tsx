import { ResultsGrid } from "../find/ResultsGrid";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { mockBusinesses } from "@/lib/findMockData";

export default function ResultsGridExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ResultsGrid results={mockBusinesses.slice(0, 6)} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
