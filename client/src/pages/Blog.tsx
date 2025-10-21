import { motion } from "framer-motion";
import { CompanyLayout } from "@/components/CompanyLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const blogPosts = [
  {
    id: 1,
    titleEn: "How to Find the Best Local Services in Egypt",
    titleAr: "كيفية العثور على أفضل الخدمات المحلية في مصر",
    descriptionEn: "Discover tips and tricks for finding reliable local service providers in your area.",
    descriptionAr: "اكتشف النصائح والحيل للعثور على مقدمي خدمات محليين موثوقين في منطقتك.",
    date: "2025-10-15",
    author: "Ahmed Hassan",
    authorAr: "أحمد حسن",
    category: "Tips & Guides",
    categoryAr: "نصائح وإرشادات",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    readTime: "5 min",
    readTimeAr: "5 دقائق",
  },
  {
    id: 2,
    titleEn: "The Rise of Digital Service Platforms in Egypt",
    titleAr: "صعود منصات الخدمات الرقمية في مصر",
    descriptionEn: "Explore how digital platforms are transforming the service industry in Egypt.",
    descriptionAr: "استكشف كيف تحول المنصات الرقمية صناعة الخدمات في مصر.",
    date: "2025-10-10",
    author: "Fatma Ali",
    authorAr: "فاطمة علي",
    category: "Industry News",
    categoryAr: "أخبار الصناعة",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    readTime: "7 min",
    readTimeAr: "7 دقائق",
  },
  {
    id: 3,
    titleEn: "Top 10 Home Maintenance Services You Should Know",
    titleAr: "أفضل 10 خدمات صيانة منزلية يجب أن تعرفها",
    descriptionEn: "A comprehensive guide to essential home maintenance services every homeowner needs.",
    descriptionAr: "دليل شامل لخدمات الصيانة المنزلية الأساسية التي يحتاجها كل مالك منزل.",
    date: "2025-10-05",
    author: "Mohamed Samir",
    authorAr: "محمد سمير",
    category: "Home & Living",
    categoryAr: "المنزل والمعيشة",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=400&fit=crop",
    readTime: "8 min",
    readTimeAr: "8 دقائق",
  },
  {
    id: 4,
    titleEn: "Success Stories: Local Businesses Thriving on Daleel Balady",
    titleAr: "قصص نجاح: الأعمال المحلية المزدهرة على دليل بلدي",
    descriptionEn: "Read inspiring stories of local businesses that grew their customer base through our platform.",
    descriptionAr: "اقرأ قصصًا ملهمة عن الشركات المحلية التي نمت قاعدة عملائها من خلال منصتنا.",
    date: "2025-09-28",
    author: "Sara Ibrahim",
    authorAr: "سارة إبراهيم",
    category: "Success Stories",
    categoryAr: "قصص النجاح",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
    readTime: "6 min",
    readTimeAr: "6 دقائق",
  },
  {
    id: 5,
    titleEn: "Understanding Service Reviews and Ratings",
    titleAr: "فهم مراجعات وتقييمات الخدمات",
    descriptionEn: "Learn how to make the most of customer reviews when choosing a service provider.",
    descriptionAr: "تعلم كيفية الاستفادة القصوى من تقييمات العملاء عند اختيار مقدم خدمة.",
    date: "2025-09-20",
    author: "Omar Khaled",
    authorAr: "عمر خالد",
    category: "Tips & Guides",
    categoryAr: "نصائح وإرشادات",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&h=400&fit=crop",
    readTime: "4 min",
    readTimeAr: "4 دقائق",
  },
  {
    id: 6,
    titleEn: "The Future of Local Services: Trends to Watch in 2025",
    titleAr: "مستقبل الخدمات المحلية: اتجاهات يجب مراقبتها في 2025",
    descriptionEn: "Discover the emerging trends that will shape the local services industry this year.",
    descriptionAr: "اكتشف الاتجاهات الناشئة التي ستشكل صناعة الخدمات المحلية هذا العام.",
    date: "2025-09-15",
    author: "Nour El-Din",
    authorAr: "نور الدين",
    category: "Industry News",
    categoryAr: "أخبار الصناعة",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    readTime: "9 min",
    readTimeAr: "9 دقائق",
  },
];

export default function Blog() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <CompanyLayout
      title="Blog"
      titleAr="المدونة"
      description="Insights, tips, and stories from the Daleel Balady community"
      descriptionAr="رؤى ونصائح وقصص من مجتمع دليل بلدي"
      breadcrumbs={[{ label: "Blog", labelAr: "المدونة" }]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20 shadow-lg hover-elevate overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={isRTL ? post.titleAr : post.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-sky-400 to-emerald-400 text-white border-0">
                    {isRTL ? post.categoryAr : post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-sky-400 transition-colors">
                  {isRTL ? post.titleAr : post.titleEn}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {isRTL ? post.descriptionAr : post.descriptionEn}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{isRTL ? post.authorAr : post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString(isRTL ? "ar-EG" : "en-US")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{isRTL ? post.readTimeAr : post.readTime}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="ghost" className="w-full group">
                  {isRTL ? "اقرأ المزيد" : "Read More"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </CompanyLayout>
  );
}
