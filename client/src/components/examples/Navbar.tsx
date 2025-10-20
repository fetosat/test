import { Navbar } from "../Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="h-20">
          <Navbar />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
