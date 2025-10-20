import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function EcommerceSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("ecommerce.title")}</h2>
          <p className="text-xl text-muted-foreground">{t("ecommerce.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-chart-2" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Premium Headphones</h3>
                    <p className="text-sm text-muted-foreground mb-2">High-quality audio equipment</p>
                    <p className="text-lg font-bold text-primary">EGP 1,299</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-chart-2 to-chart-3" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Smartphone Accessories</h3>
                    <p className="text-sm text-muted-foreground mb-2">Cases, chargers, and more</p>
                    <p className="text-lg font-bold text-primary">EGP 499</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Order Tracking</h3>
                    <Badge className="bg-chart-2 text-white">In Transit</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Order Confirmed</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Out for Delivery</p>
                        <p className="text-xs text-muted-foreground">30 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Estimated Delivery</p>
                        <p className="text-xs text-muted-foreground">Today, 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6" data-testid="button-track-order">
                    Track in Real-Time
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
