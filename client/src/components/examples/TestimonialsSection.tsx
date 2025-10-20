import { TestimonialsSection } from "../TestimonialsSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function TestimonialsSectionExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TestimonialsSection />
      </LanguageProvider>
    </ThemeProvider>
  );
}
