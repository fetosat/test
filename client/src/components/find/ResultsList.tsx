import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Navigation } from "lucide-react";
import { Business, categories } from "@/lib/findMockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

interface ResultsListProps {
  results: Business[];
}

export function ResultsList({ results }: ResultsListProps) {
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
    <div className="space-y-4">
      {results.map((business, index) => {
        const category = categories.find(c => c.id === business.category);
        const Icon = category?.icon;
        
        return (
          <motion.div
            key={business.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.03 }}
          >
            <Card className="hover-elevate" data-testid={`card-list-business-${business.id}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category?.color} flex items-center justify-center flex-shrink-0`}>
                    {Icon && <Icon className="w-8 h-8 text-white" />}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {language === "ar" ? business.nameAr : business.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "ar" ? business.subcategoryAr : business.subcategory}
                        </p>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1 flex-shrink-0">
                        <Star className="w-3 h-3 fill-chart-3 text-chart-3" />
                        {business.rating}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{business.distance}</span>
                      </div>
                      <span>{language === "ar" ? business.addressAr : business.address}</span>
                      <span>{business.phone}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" data-testid={`button-list-call-${business.id}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        {language === "ar" ? "اتصل" : "Call"}
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-list-directions-${business.id}`}>
                        <Navigation className="w-4 h-4 mr-2" />
                        {language === "ar" ? "اتجاهات" : "Directions"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
