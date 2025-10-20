import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function ProviderCTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-chart-2 p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjItMnptLTItMmgyLTJ6bS0yIDBoMi0yem0tMi0yaDItMnptLTIgMGgyLTJ6bS0yIDBoMi0yem0tMi0yaDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("providerCTA.title")}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("providerCTA.subtitle")}
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 border-white"
              data-testid="button-provider-registration"
            >
              {t("providerCTA.button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
