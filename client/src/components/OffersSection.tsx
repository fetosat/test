import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import medicalBg from "@assets/generated_images/Medical_services_category_background_f1fbf406.png";
import foodBg from "@assets/generated_images/Food_category_background_image_b51f1997.png";
import autoBg from "@assets/generated_images/Automotive_services_category_background_f7d19086.png";

export function OffersSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    { title: "20% Off Medical Checkup", location: "Cairo Medical Center", image: medicalBg },
    { title: "Buy 1 Get 1 Free", location: "Al-Nile Restaurant", image: foodBg },
    { title: "Free Car Wash", location: "Premium Auto Service", image: autoBg },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [offers.length]);

  return (
    <section className="py-20 px-6 bg-muted/30" id="offers">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          {t("offers.title")}
        </motion.h2>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <motion.div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {offers.map((offer, index) => (
                <div key={index} className="min-w-full">
                  <Card className="overflow-hidden">
                    <div className="relative h-[400px]">
                      <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <CardContent className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <Badge className="mb-4 bg-chart-3 text-black">Featured Offer</Badge>
                        <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                        <div className="flex items-center gap-2 mb-6 text-white/90">
                          <MapPin className="w-4 h-4" />
                          <span>{offer.location}</span>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="default" data-testid={`button-book-${index}`}>
                            {t("offers.book")}
                          </Button>
                          <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" data-testid={`button-call-${index}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            {t("offers.call")}
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                data-testid={`button-slide-${index}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
