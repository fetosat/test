import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { CategoryCarousel } from "@/components/find/CategoryCarousel";
import { SubcategoryFilter } from "@/components/find/SubcategoryFilter";
import { ViewToggle } from "@/components/find/ViewToggle";
import { ResultsGrid } from "@/components/find/ResultsGrid";
import { ResultsList } from "@/components/find/ResultsList";
import { LeafletMap } from "@/components/find/LeafletMap";
import { SearchBar } from "@/components/find/SearchBar";
import { AdvancedFilters, type FilterState } from "@/components/find/AdvancedFilters";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { mockBusinesses, categories } from "@/lib/findMockData";

export type ViewMode = "grid" | "list" | "map";

function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function Find() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    searchType: "normal",
    radius: 10,
    priceRange: [0, 1000],
    timeRange: "all",
    orderBy: "recent",
  });
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const filteredResults = useMemo(() => {
    let results = mockBusinesses.filter((business) => {
      const matchesCategory = selectedCategory === "all" || business.category === selectedCategory;
      const matchesSubcategory = !selectedSubcategory || business.subcategory === selectedSubcategory;
      const matchesSearch = !searchQuery || 
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesRadius = true;
      if (filters.searchType === "location" && userLocation) {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          business.lat,
          business.lng
        );
        matchesRadius = distance <= filters.radius;
      }
      
      return matchesCategory && matchesSubcategory && matchesSearch && matchesRadius;
    });

    if (filters.orderBy === "rating") {
      results.sort((a, b) => b.rating - a.rating);
    } else if (filters.orderBy === "distance" && userLocation) {
      results.sort((a, b) => {
        const distA = calculateDistance(userLocation.lat, userLocation.lng, a.lat, a.lng);
        const distB = calculateDistance(userLocation.lat, userLocation.lng, b.lat, b.lng);
        return distA - distB;
      });
    }

    return results;
  }, [selectedCategory, selectedSubcategory, searchQuery, filters, userLocation]);

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
            <div className="hidden lg:block w-72 flex-shrink-0 space-y-6">
              <AdvancedFilters filters={filters} onFiltersChange={setFilters} />
              
              {selectedCategory !== "all" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <SubcategoryFilter
                    category={selectedCategory}
                    selectedSubcategory={selectedSubcategory}
                    onSelectSubcategory={setSelectedSubcategory}
                  />
                </motion.div>
              )}
            </div>

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

              <motion.div
                key={viewMode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {viewMode === "grid" && <ResultsGrid results={filteredResults} />}
                {viewMode === "list" && <ResultsList results={filteredResults} />}
                {viewMode === "map" && <LeafletMap results={filteredResults} userLocation={userLocation} />}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
