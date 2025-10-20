import { useState } from "react";
import { CategoryCarousel } from "../find/CategoryCarousel";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function CategoryCarouselExample() {
  const [selected, setSelected] = useState("all");
  
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CategoryCarousel selectedCategory={selected} onSelectCategory={setSelected} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
