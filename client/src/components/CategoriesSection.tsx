import { Card } from "@/components/ui/card";
import { Stethoscope, Utensils, Car, ShoppingBag, Hammer, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import medicalBg from "@assets/generated_images/Medical_services_category_background_f1fbf406.png";
import foodBg from "@assets/generated_images/Food_category_background_image_b51f1997.png";
import autoBg from "@assets/generated_images/Automotive_services_category_background_f7d19086.png";
import shopBg from "@assets/generated_images/Shopping_category_background_image_ccf0d2ec.png";

export function CategoriesSection() {
  const { t } = useLanguage();

  const categories = [
    { icon: Stethoscope, name: t("category.medical"), image: medicalBg, color: "from-blue-500/80 to-blue-600/80" },
    { icon: Utensils, name: t("category.food"), image: foodBg, color: "from-orange-500/80 to-red-500/80" },
    { icon: Car, name: t("category.automotive"), image: autoBg, color: "from-gray-500/80 to-gray-700/80" },
    { icon: ShoppingBag, name: t("category.shopping"), image: shopBg, color: "from-purple-500/80 to-pink-500/80" },
    { icon: Hammer, name: t("category.engineering"), image: autoBg, color: "from-yellow-500/80 to-orange-600/80" },
    { icon: GraduationCap, name: t("category.education"), image: medicalBg, color: "from-green-500/80 to-teal-500/80" },
  ];

  return (
    <section className="py-20 px-6" id="categories">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          {t("categories.title")}
        </motion.h2>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="snap-start"
            >
              <Card
                className="min-w-[280px] h-[200px] relative overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-transform hover:scale-105"
                data-testid={`card-category-${index}`}
              >
                <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <category.icon className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-semibold text-center">{category.name}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
