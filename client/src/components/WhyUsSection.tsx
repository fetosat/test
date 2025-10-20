import { Card, CardContent } from "@/components/ui/card";
import { Brain, ShieldCheck, Truck, MapPinned } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function WhyUsSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Brain, title: t("whyUs.feature1"), desc: t("whyUs.feature1Desc") },
    { icon: ShieldCheck, title: t("whyUs.feature2"), desc: t("whyUs.feature2Desc") },
    { icon: Truck, title: t("whyUs.feature3"), desc: t("whyUs.feature3Desc") },
    { icon: MapPinned, title: t("whyUs.feature4"), desc: t("whyUs.feature4Desc") },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          {t("whyUs.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
