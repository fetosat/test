import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation } from "lucide-react";
import { Business, categories } from "@/lib/findMockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

interface MapPlaceholderProps {
  results: Business[];
}

export function MapPlaceholder({ results }: MapPlaceholderProps) {
  const { language } = useLanguage();

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div className="relative h-[500px] bg-gradient-to-br from-primary/10 via-chart-2/10 to-background">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {language === "ar" ? "عرض الخريطة" : "Map View"}
                </h3>
                <p className="text-muted-foreground max-w-md">
                  {language === "ar" 
                    ? "عرض تفاعلي للخريطة قريبًا. اعرض النتائج أدناه."
                    : "Interactive map view coming soon. View results below."}
                </p>
              </div>
            </div>
          </div>
          
          {results.slice(0, 5).map((business, index) => {
            const category = categories.find(c => c.id === business.category);
            const positions = [
              { top: "20%", left: "30%" },
              { top: "40%", left: "60%" },
              { top: "60%", left: "25%" },
              { top: "30%", left: "70%" },
              { top: "70%", left: "50%" },
            ];
            
            return (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="absolute"
                style={positions[index]}
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${category?.color} border-4 border-background shadow-lg flex items-center justify-center animate-pulse`}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>

      <div className="space-y-3">
        <h3 className="font-semibold text-lg">
          {language === "ar" ? "المواقع القريبة" : "Nearby Locations"}
        </h3>
        {results.map((business) => (
          <Card key={business.id} className="hover-elevate">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      {language === "ar" ? business.nameAr : business.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {business.distance} • {language === "ar" ? business.addressAr : business.address}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">
                  <Navigation className="w-3 h-3 mr-1" />
                  {language === "ar" ? "اذهب" : "Go"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
