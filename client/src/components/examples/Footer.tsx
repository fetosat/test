import { Footer } from "../Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function FooterExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
