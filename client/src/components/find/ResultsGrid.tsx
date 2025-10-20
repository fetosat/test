import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Navigation } from "lucide-react";
import { Business, categories } from "@/lib/findMockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

interface ResultsGridProps {
  results: Business[];
}

export function ResultsGrid({ results }: ResultsGridProps) {
  const { language } = useLanguage();

  if (results.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">
          {language === "ar" ? "لم يتم العثور على نتائج" : "No results found"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((business, index) => {
        const category = categories.find(c => c.id === business.category);
        const Icon = category?.icon;
        
        return (
          <motion.div
            key={business.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full hover-elevate transition-all hover:scale-105" data-testid={`card-business-${business.id}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category?.color} flex items-center justify-center flex-shrink-0`}>
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-chart-3 text-chart-3" />
                    {business.rating}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg mb-2">
                  {language === "ar" ? business.nameAr : business.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "ar" ? business.subcategoryAr : business.subcategory}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{business.distance}</span>
                  <span className="mx-1">•</span>
                  <span className="truncate">{language === "ar" ? business.addressAr : business.address}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1" data-testid={`button-call-${business.id}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    {language === "ar" ? "اتصل" : "Call"}
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" data-testid={`button-directions-${business.id}`}>
                    <Navigation className="w-4 h-4 mr-2" />
                    {language === "ar" ? "اتجاهات" : "Directions"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
