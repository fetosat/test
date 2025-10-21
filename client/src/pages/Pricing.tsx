import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Sparkles, Zap, Crown, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const userPlans = [
  {
    id: "free",
    nameEn: "Basic",
    nameAr: "أساسي",
    price: 0,
    period: "month",
    periodAr: "شهر",
    icon: Users,
    color: "from-gray-400 to-gray-600",
    features: [
      { en: "Search all services", ar: "البحث عن جميع الخدمات" },
      { en: "View provider profiles", ar: "عرض ملفات مقدمي الخدمات" },
      { en: "Basic filters", ar: "فلاتر أساسية" },
      { en: "Save up to 5 favorites", ar: "حفظ ما يصل إلى 5 مفضلات" },
    ],
  },
  {
    id: "premium",
    nameEn: "Premium",
    nameAr: "مميز",
    price: 49,
    period: "month",
    periodAr: "شهر",
    icon: Sparkles,
    color: "from-sky-400 to-emerald-400",
    recommended: true,
    features: [
      { en: "Everything in Basic", ar: "كل ما في الأساسي" },
      { en: "Advanced filters & search", ar: "فلاتر وبحث متقدمة" },
      { en: "Unlimited favorites", ar: "مفضلات غير محدودة" },
      { en: "Priority support", ar: "دعم ذو أولوية" },
      { en: "Exclusive deals & offers", ar: "عروض وصفقات حصرية" },
      { en: "No ads", ar: "بدون إعلانات" },
    ],
  },
  {
    id: "family",
    nameEn: "Family",
    nameAr: "عائلي",
    price: 99,
    period: "month",
    periodAr: "شهر",
    icon: Crown,
    color: "from-purple-400 to-pink-400",
    features: [
      { en: "Everything in Premium", ar: "كل ما في المميز" },
      { en: "Up to 5 family members", ar: "حتى 5 أفراد من العائلة" },
      { en: "Shared favorites & history", ar: "مفضلات وسجل مشترك" },
      { en: "Family-exclusive services", ar: "خدمات حصرية للعائلة" },
      { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
    ],
  },
];

const providerPlans = [
  {
    id: "starter",
    nameEn: "Starter",
    nameAr: "مبتدئ",
    price: 199,
    period: "month",
    periodAr: "شهر",
    icon: Zap,
    color: "from-orange-400 to-red-400",
    features: [
      { en: "Basic business profile", ar: "ملف عمل أساسي" },
      { en: "Up to 10 photos", ar: "حتى 10 صور" },
      { en: "Customer reviews", ar: "تقييمات العملاء" },
      { en: "Contact information display", ar: "عرض معلومات الاتصال" },
      { en: "Basic analytics", ar: "تحليلات أساسية" },
    ],
  },
  {
    id: "professional",
    nameEn: "Professional",
    nameAr: "محترف",
    price: 499,
    period: "month",
    periodAr: "شهر",
    icon: Sparkles,
    color: "from-sky-400 to-emerald-400",
    recommended: true,
    features: [
      { en: "Everything in Starter", ar: "كل ما في المبتدئ" },
      { en: "Featured listing", ar: "قائمة مميزة" },
      { en: "Unlimited photos & videos", ar: "صور وفيديوهات غير محدودة" },
      { en: "Advanced analytics dashboard", ar: "لوحة تحليلات متقدمة" },
      { en: "Priority in search results", ar: "أولوية في نتائج البحث" },
      { en: "24/7 customer support", ar: "دعم عملاء 24/7" },
      { en: "Social media integration", ar: "تكامل وسائل التواصل" },
    ],
  },
  {
    id: "enterprise",
    nameEn: "Enterprise",
    nameAr: "مؤسسة",
    price: 999,
    period: "month",
    periodAr: "شهر",
    icon: Crown,
    color: "from-purple-400 to-pink-400",
    features: [
      { en: "Everything in Professional", ar: "كل ما في المحترف" },
      { en: "Multiple locations support", ar: "دعم مواقع متعددة" },
      { en: "API access", ar: "وصول API" },
      { en: "Custom branding", ar: "علامة تجارية مخصصة" },
      { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
      { en: "Marketing campaign support", ar: "دعم حملات تسويقية" },
      { en: "White-label solutions", ar: "حلول بعلامة تجارية خاصة" },
    ],
  },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"users" | "providers">("users");
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const currentPlans = activeTab === "users" ? userPlans : providerPlans;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-emerald-500/5 to-purple-500/10 pointer-events-none" />
        
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              {isRTL ? "خطط الأسعار" : "Pricing Plans"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? "اختر الخطة المثالية لاحتياجاتك واحصل على أفضل الخدمات المحلية"
                : "Choose the perfect plan for your needs and get the best local services"}
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "users" | "providers")} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12 bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20">
              <TabsTrigger value="users" className="text-base">
                {isRTL ? "خطط المستخدمين" : "User Plans"}
              </TabsTrigger>
              <TabsTrigger value="providers" className="text-base">
                {isRTL ? "خطط مقدمي الخدمات" : "Provider Plans"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPlans.map((plan, index) => {
                  const Icon = plan.icon;
                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                      <Card className={`relative h-full backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20 shadow-lg ${
                        plan.recommended ? 'ring-2 ring-sky-400 shadow-sky-400/20' : ''
                      }`}>
                        {plan.recommended && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-sky-400 to-emerald-400 text-white border-0 px-4 py-1 shadow-lg animate-pulse">
                              {isRTL ? "موصى به" : "Recommended"}
                            </Badge>
                          </div>
                        )}
                        
                        <CardHeader>
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-2xl">{isRTL ? plan.nameAr : plan.nameEn}</CardTitle>
                          <CardDescription>
                            <div className="flex items-baseline gap-2 mt-4">
                              <span className="text-4xl font-bold text-foreground">
                                {plan.price === 0 ? (isRTL ? "مجاني" : "Free") : `${plan.price} EGP`}
                              </span>
                              {plan.price > 0 && (
                                <span className="text-muted-foreground">/ {isRTL ? plan.periodAr : plan.period}</span>
                              )}
                            </div>
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="flex-1">
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <div className="mt-0.5">
                                  <Check className="w-5 h-5 text-emerald-400" />
                                </div>
                                <span className="text-sm">{isRTL ? feature.ar : feature.en}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>

                        <CardFooter>
                          <Button className={`w-full bg-gradient-to-r ${plan.color} text-white border-0 hover:opacity-90 transition-opacity`}>
                            {isRTL ? "اشترك الآن" : "Subscribe"}
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="providers">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPlans.map((plan, index) => {
                  const Icon = plan.icon;
                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                      <Card className={`relative h-full backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20 shadow-lg ${
                        plan.recommended ? 'ring-2 ring-sky-400 shadow-sky-400/20' : ''
                      }`}>
                        {plan.recommended && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-sky-400 to-emerald-400 text-white border-0 px-4 py-1 shadow-lg animate-pulse">
                              {isRTL ? "موصى به" : "Recommended"}
                            </Badge>
                          </div>
                        )}
                        
                        <CardHeader>
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-2xl">{isRTL ? plan.nameAr : plan.nameEn}</CardTitle>
                          <CardDescription>
                            <div className="flex items-baseline gap-2 mt-4">
                              <span className="text-4xl font-bold text-foreground">{plan.price} EGP</span>
                              <span className="text-muted-foreground">/ {isRTL ? plan.periodAr : plan.period}</span>
                            </div>
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="flex-1">
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <div className="mt-0.5">
                                  <Check className="w-5 h-5 text-emerald-400" />
                                </div>
                                <span className="text-sm">{isRTL ? feature.ar : feature.en}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>

                        <CardFooter>
                          <Button className={`w-full bg-gradient-to-r ${plan.color} text-white border-0 hover:opacity-90 transition-opacity`}>
                            {isRTL ? "ابدأ الآن" : "Get Started"}
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {isRTL ? "هل تحتاج إلى خطة مخصصة؟" : "Need a Custom Plan?"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {isRTL 
                    ? "تواصل معنا للحصول على حل مخصص يناسب احتياجاتك الفريدة"
                    : "Contact us for a tailored solution that fits your unique needs"}
                </p>
                <Button size="lg" variant="outline" className="backdrop-blur-xl bg-white/10 border-white/20">
                  {isRTL ? "تواصل معنا" : "Contact Sales"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
