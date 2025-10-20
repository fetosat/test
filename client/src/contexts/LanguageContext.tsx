import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    "nav.home": "Home",
    "nav.categories": "Categories",
    "nav.offers": "Offers",
    "nav.join": "Join Us",
    "nav.contact": "Contact",
    "nav.joinProvider": "Join as Provider",
    "hero.title": "All Your Local Services in One Place",
    "hero.subtitle": "Search, discover, and connect with trusted providers near you",
    "hero.searchPlaceholder": "Search for services, businesses, or providers...",
    "hero.ctaSearch": "Start Searching",
    "hero.ctaJoin": "Join Now",
    "categories.title": "Explore by Category",
    "offers.title": "Top Offers",
    "offers.book": "Book Now",
    "offers.call": "Call",
    "howItWorks.title": "How It Works",
    "howItWorks.step1": "Search",
    "howItWorks.step1Desc": "Find exactly what you need with our smart search",
    "howItWorks.step2": "Book",
    "howItWorks.step2Desc": "Connect with trusted providers instantly",
    "howItWorks.step3": "Save",
    "howItWorks.step3Desc": "Get the best deals and exclusive offers",
    "whyUs.title": "Why Choose Daleel Balady",
    "whyUs.feature1": "AI-Powered Search",
    "whyUs.feature1Desc": "Smart matching to find the perfect service for you",
    "whyUs.feature2": "Verified Providers",
    "whyUs.feature2Desc": "All businesses are verified and trusted",
    "whyUs.feature3": "Delivery Integration",
    "whyUs.feature3Desc": "Seamless delivery and logistics support",
    "whyUs.feature4": "Nationwide Coverage",
    "whyUs.feature4Desc": "Services available across all of Egypt",
    "ecommerce.title": "Shop Smart · Deliver Fast",
    "ecommerce.subtitle": "Browse thousands of products from local businesses",
    "testimonials.title": "What Our Users Say",
    "providerCTA.title": "Join Daleel Balady and grow your business today",
    "providerCTA.subtitle": "Reach millions of customers across Egypt",
    "providerCTA.button": "Start Registration",
    "footer.description": "Egypt's premier platform connecting customers with local services, businesses, and delivery",
    "footer.quickLinks": "Quick Links",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.about": "About Us",
    "footer.careers": "Careers",
    "footer.blog": "Blog",
    "footer.help": "Help Center",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2025 Daleel Balady. All rights reserved.",
    "stats.businesses": "Businesses",
    "stats.users": "Active Users",
    "stats.cities": "Cities Covered",
    "stats.reviews": "Reviews",
    "category.medical": "Medical",
    "category.food": "Food & Dining",
    "category.automotive": "Automotive",
    "category.shopping": "Shopping",
    "category.engineering": "Engineering",
    "category.education": "Education",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.categories": "الفئات",
    "nav.offers": "العروض",
    "nav.join": "انضم إلينا",
    "nav.contact": "اتصل بنا",
    "nav.joinProvider": "انضم كمقدم خدمة",
    "hero.title": "كل خدمات بلدك في مكان واحد",
    "hero.subtitle": "ابحث واكتشف وتواصل مع مقدمي الخدمات الموثوقين بالقرب منك",
    "hero.searchPlaceholder": "ابحث عن خدمات أو أعمال أو مقدمي خدمات...",
    "hero.ctaSearch": "ابدأ البحث",
    "hero.ctaJoin": "انضم الآن",
    "categories.title": "استكشف حسب الفئة",
    "offers.title": "أفضل العروض",
    "offers.book": "احجز الآن",
    "offers.call": "اتصل",
    "howItWorks.title": "كيف يعمل",
    "howItWorks.step1": "ابحث",
    "howItWorks.step1Desc": "اعثر على ما تحتاجه بالضبط من خلال بحثنا الذكي",
    "howItWorks.step2": "احجز",
    "howItWorks.step2Desc": "تواصل مع مقدمي الخدمات الموثوقين على الفور",
    "howItWorks.step3": "وفر",
    "howItWorks.step3Desc": "احصل على أفضل الصفقات والعروض الحصرية",
    "whyUs.title": "لماذا تختار دليل بلدي",
    "whyUs.feature1": "بحث مدعوم بالذكاء الاصطناعي",
    "whyUs.feature1Desc": "مطابقة ذكية للعثور على الخدمة المثالية لك",
    "whyUs.feature2": "مقدمو خدمات موثقون",
    "whyUs.feature2Desc": "جميع الأعمال موثقة وموثوقة",
    "whyUs.feature3": "تكامل التوصيل",
    "whyUs.feature3Desc": "دعم توصيل ولوجستيات سلس",
    "whyUs.feature4": "تغطية على مستوى البلاد",
    "whyUs.feature4Desc": "خدمات متاحة في جميع أنحاء مصر",
    "ecommerce.title": "تسوق بذكاء · توصيل سريع",
    "ecommerce.subtitle": "تصفح آلاف المنتجات من الشركات المحلية",
    "testimonials.title": "ماذا يقول مستخدمونا",
    "providerCTA.title": "انضم إلى دليل بلدي ووسع نطاق عملك اليوم",
    "providerCTA.subtitle": "اوصل لملايين العملاء في جميع أنحاء مصر",
    "providerCTA.button": "ابدأ التسجيل",
    "footer.description": "المنصة الرائدة في مصر لربط العملاء بالخدمات المحلية والشركات والتوصيل",
    "footer.quickLinks": "روابط سريعة",
    "footer.company": "الشركة",
    "footer.support": "الدعم",
    "footer.about": "من نحن",
    "footer.careers": "الوظائف",
    "footer.blog": "المدونة",
    "footer.help": "مركز المساعدة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.copyright": "© 2025 دليل بلدي. جميع الحقوق محفوظة.",
    "stats.businesses": "الأعمال",
    "stats.users": "المستخدمون النشطون",
    "stats.cities": "المدن المغطاة",
    "stats.reviews": "التقييمات",
    "category.medical": "طبي",
    "category.food": "طعام ومطاعم",
    "category.automotive": "سيارات",
    "category.shopping": "تسوق",
    "category.engineering": "هندسة",
    "category.education": "تعليم",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.className = language === "ar" ? "font-arabic" : "font-english";
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
