import { CompanyLayout } from "@/components/CompanyLayout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutUs() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const values = [
    {
      icon: Target,
      titleEn: "Our Mission",
      titleAr: "مهمتنا",
      descEn: "To connect communities with trusted local service providers, making everyday life easier and more convenient.",
      descAr: "ربط المجتمعات بمقدمي الخدمات المحليين الموثوقين، مما يجعل الحياة اليومية أسهل وأكثر ملاءمة.",
      color: "from-sky-400 to-blue-500",
    },
    {
      icon: Eye,
      titleEn: "Our Vision",
      titleAr: "رؤيتنا",
      descEn: "To become Egypt's leading platform for local services, empowering businesses and enriching communities.",
      descAr: "أن نصبح المنصة الرائدة في مصر للخدمات المحلية، وتمكين الشركات وإثراء المجتمعات.",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: Heart,
      titleEn: "Our Values",
      titleAr: "قيمنا",
      descEn: "Trust, transparency, and community are at the heart of everything we do.",
      descAr: "الثقة والشفافية والمجتمع هي في صميم كل ما نقوم به.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Users,
      titleEn: "Our Community",
      titleAr: "مجتمعنا",
      descEn: "Over 10,000 service providers and 50,000 satisfied customers across Egypt.",
      descAr: "أكثر من 10,000 مقدم خدمة و 50,000 عميل راضٍ في جميع أنحاء مصر.",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <CompanyLayout
      title="About Us"
      titleAr="من نحن"
      description="Learn more about Daleel Balady and our mission to transform local services"
      descriptionAr="تعرف على المزيد عن دليل بلدي ومهمتنا لتحويل الخدمات المحلية"
      breadcrumbs={[
        { label: "Company", labelAr: "الشركة", href: "/company/about" },
        { label: "About Us", labelAr: "من نحن" }
      ]}
    >
      <div className="space-y-12 not-prose">
        <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              {isRTL ? "قصتنا" : "Our Story"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isRTL 
                ? "بدأ دليل بلدي بفكرة بسيطة: جعل العثور على خدمات محلية موثوقة أمرًا سهلاً مثل البحث على الإنترنت. في عام 2023، أطلقنا منصتنا بهدف ربط المجتمعات المصرية بمقدمي الخدمات المحليين الموثوقين."
                : "Daleel Balady started with a simple idea: making it as easy to find reliable local services as it is to search the internet. In 2023, we launched our platform with the goal of connecting Egyptian communities with trusted local service providers."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isRTL 
                ? "اليوم، نفخر بخدمة الآلاف من المستخدمين ومقدمي الخدمات في جميع أنحاء مصر، ونساعدهم في العثور على بعضهم البعض وبناء علاقات دائمة مبنية على الثقة والجودة."
                : "Today, we're proud to serve thousands of users and service providers across Egypt, helping them find each other and build lasting relationships based on trust and quality."}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20 h-full hover-elevate">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {isRTL ? value.titleAr : value.titleEn}
                    </h3>
                    <p className="text-muted-foreground">
                      {isRTL ? value.descAr : value.descEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              {isRTL ? "فريقنا" : "Our Team"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isRTL 
                ? "فريقنا من المهنيين المتفانين ملتزم ببناء أفضل منصة للخدمات المحلية في مصر. نحن نجمع بين الخبرة التقنية وفهم عميق للأسواق المحلية لإنشاء تجربة استثنائية لمستخدمينا ومقدمي الخدمات."
                : "Our team of dedicated professionals is committed to building the best local services platform in Egypt. We combine technical expertise with a deep understanding of local markets to create an exceptional experience for our users and service providers."}
            </p>
          </CardContent>
        </Card>
      </div>
    </CompanyLayout>
  );
}
