import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Package, Stethoscope, Car, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Egyptian_cityscape_hero_illustration_1a0b2a47.png";

export function HeroSection() {
  const { t } = useLanguage();

  const floatingIcons = [
    { Icon: MapPin, delay: 0, x: "10%", y: "20%" },
    { Icon: Package, delay: 0.2, x: "80%", y: "30%" },
    { Icon: Stethoscope, delay: 0.4, x: "15%", y: "70%" },
    { Icon: Car, delay: 0.6, x: "85%", y: "65%" },
    { Icon: ShoppingBag, delay: 0.8, x: "50%", y: "15%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
      
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="Egyptian cityscape" className="w-full h-full object-cover" />
      </div>

      {floatingIcons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
          className="absolute"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay }}
          >
            <Icon className="w-12 h-12 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          {t("hero.title")}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="flex gap-2 bg-card p-2 rounded-lg border border-card-border shadow-lg">
            <Select defaultValue="all">
              <SelectTrigger className="w-40 border-0" data-testid="select-category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="auto">Automotive</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder={t("hero.searchPlaceholder")}
              className="flex-1 border-0"
              data-testid="input-search"
            />
            <Button size="icon" data-testid="button-search">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" variant="default" data-testid="button-start-searching">
            {t("hero.ctaSearch")}
          </Button>
          <Button size="lg" variant="outline" data-testid="button-join-now">
            {t("hero.ctaJoin")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
