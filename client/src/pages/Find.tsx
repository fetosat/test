import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CategoryCarousel } from "@/components/find/CategoryCarousel";
import { SubcategoryFilter } from "@/components/find/SubcategoryFilter";
import { ViewToggle } from "@/components/find/ViewToggle";
import { ResultsGrid } from "@/components/find/ResultsGrid";
import { ResultsList } from "@/components/find/ResultsList";
import { MapPlaceholder } from "@/components/find/MapPlaceholder";
import { SearchBar } from "@/components/find/SearchBar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { mockBusinesses, categories } from "@/lib/findMockData";

export type ViewMode = "grid" | "list" | "map";

export default function Find() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResults = mockBusinesses.filter((business) => {
    const matchesCategory = selectedCategory === "all" || business.category === selectedCategory;
    const matchesSubcategory = !selectedSubcategory || business.subcategory === selectedSubcategory;
    const matchesSearch = !searchQuery || 
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border py-4"
        >
          <div className="max-w-7xl mx-auto px-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </motion.div>

        <div className="sticky top-32 z-30 bg-background/95 backdrop-blur-lg border-b border-border">
          <CategoryCarousel
            selectedCategory={selectedCategory}
            onSelectCategory={(id) => {
              setSelectedCategory(id);
              setSelectedSubcategory(null);
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex gap-6">
            {selectedCategory !== "all" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:block w-64 flex-shrink-0"
              >
                <SubcategoryFilter
                  category={selectedCategory}
                  selectedSubcategory={selectedSubcategory}
                  onSelectSubcategory={setSelectedSubcategory}
                />
              </motion.div>
            )}

            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-1">
                    {selectedCategoryData?.nameEn || "All Services"}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {filteredResults.length} results found
                  </p>
                </div>
                <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
              </div>

              {viewMode === "grid" && <ResultsGrid results={filteredResults} />}
              {viewMode === "list" && <ResultsList results={filteredResults} />}
              {viewMode === "map" && <MapPlaceholder results={filteredResults} />}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
