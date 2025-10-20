import { FloatingCTA } from "../FloatingCTA";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function FloatingCTAExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="h-screen">
          <FloatingCTA />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
