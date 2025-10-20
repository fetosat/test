import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/findMockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Filter } from "lucide-react";

interface SubcategoryFilterProps {
  category: string;
  selectedSubcategory: string | null;
  onSelectSubcategory: (id: string | null) => void;
}

export function SubcategoryFilter({ category, selectedSubcategory, onSelectSubcategory }: SubcategoryFilterProps) {
  const { language } = useLanguage();
  const categoryData = categories.find(c => c.id === category);

  if (!categoryData || categoryData.subcategories.length === 0) {
    return null;
  }

  return (
    <Card className="sticky top-44">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Filter className="w-4 h-4" />
          {language === "ar" ? "الفئات الفرعية" : "Subcategories"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <button
          onClick={() => onSelectSubcategory(null)}
          className={`w-full text-start px-3 py-2 rounded-md text-sm transition-colors hover-elevate ${
            selectedSubcategory === null
              ? "bg-primary text-primary-foreground"
              : "text-foreground"
          }`}
          data-testid="button-subcategory-all"
        >
          {language === "ar" ? "الكل" : "All"}
        </button>
        {categoryData.subcategories.map((sub) => (
          <button
            key={sub.id}
            onClick={() => onSelectSubcategory(sub.id)}
            className={`w-full text-start px-3 py-2 rounded-md text-sm transition-colors hover-elevate ${
              selectedSubcategory === sub.id
                ? "bg-primary text-primary-foreground"
                : "text-foreground"
            }`}
            data-testid={`button-subcategory-${sub.id}`}
          >
            {language === "ar" ? sub.nameAr : sub.nameEn}
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
