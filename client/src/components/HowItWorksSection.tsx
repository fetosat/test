import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, Coins } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, title: t("howItWorks.step1"), desc: t("howItWorks.step1Desc"), animation: "animate-pulse-glow" },
    { icon: Calendar, title: t("howItWorks.step2"), desc: t("howItWorks.step2Desc"), animation: "animate-pulse" },
    { icon: Coins, title: t("howItWorks.step3"), desc: t("howItWorks.step3Desc"), animation: "animate-float" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          {t("howItWorks.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover-elevate transition-transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className={`w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center ${step.animation}`}>
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-primary text-primary-foreground">{index + 1}</Badge>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${className}`}>
      {children}
    </span>
  );
}
