import { motion } from "framer-motion";
import { categories } from "@/lib/findMockData";
import { useLanguage } from "@/contexts/LanguageContext";

interface CategoryCarouselProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export function CategoryCarousel({ selectedCategory, onSelectCategory }: CategoryCarouselProps) {
  const { language } = useLanguage();

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 px-6 py-4 min-w-max">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(category.id)}
              className={`flex flex-col items-center gap-2 px-6 py-3 rounded-2xl min-w-[120px] transition-all ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card hover-elevate border border-card-border"
              }`}
              data-testid={`button-category-${category.id}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${category.color} ${
                isSelected ? "opacity-100" : "opacity-70"
              }`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">
                {language === "ar" ? category.nameAr : category.nameEn}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
