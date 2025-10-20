import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from "@assets/generated_images/Egyptian_business_owner_testimonial_40c8881c.png";
import testimonial2 from "@assets/generated_images/Egyptian_customer_testimonial_portrait_aa8a8cf4.png";
import testimonial3 from "@assets/generated_images/Egyptian_restaurant_owner_portrait_12753f1b.png";

export function TestimonialsSection() {
  const { t, language } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: language === "ar" ? "أحمد محمد" : "Ahmed Mohamed",
      role: language === "ar" ? "صاحب متجر" : "Shop Owner",
      text: language === "ar" 
        ? "دليل بلدي ساعدني في الوصول لعملاء جدد وزيادة مبيعاتي بنسبة 40٪ في 3 أشهر فقط"
        : "Daleel Balady helped me reach new customers and increase my sales by 40% in just 3 months",
      image: testimonial1,
    },
    {
      name: language === "ar" ? "سارة علي" : "Sara Ali",
      role: language === "ar" ? "عميلة" : "Customer",
      text: language === "ar"
        ? "أفضل منصة للعثور على خدمات موثوقة في منطقتي. استخدمها يوميًا!"
        : "The best platform to find trusted services in my area. I use it daily!",
      image: testimonial2,
    },
    {
      name: language === "ar" ? "محمود حسن" : "Mahmoud Hassan",
      role: language === "ar" ? "صاحب مطعم" : "Restaurant Owner",
      text: language === "ar"
        ? "المنصة سهلة الاستخدام وعملاؤنا يحبون نظام الحجز والتوصيل"
        : "The platform is easy to use and our customers love the booking and delivery system",
      image: testimonial3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          {t("testimonials.title")}
        </motion.h2>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <Avatar className="w-20 h-20 flex-shrink-0">
                      <AvatarImage src={testimonials[current].image} alt={testimonials[current].name} />
                      <AvatarFallback>{testimonials[current].name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-center md:text-start">
                      <div className="flex gap-1 mb-3 justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-chart-3 text-chart-3" />
                        ))}
                      </div>
                      <p className="text-lg mb-4 italic">&ldquo;{testimonials[current].text}&rdquo;</p>
                      <div>
                        <p className="font-semibold">{testimonials[current].name}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                data-testid={`button-testimonial-${index}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
