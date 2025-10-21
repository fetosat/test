import { CompanyLayout } from "@/components/CompanyLayout";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const sections = [
    {
      titleEn: "Information We Collect",
      titleAr: "المعلومات التي نجمعها",
      contentEn: "We collect information you provide directly to us, including name, email address, phone number, and location data when you use our services. We also collect information about your interactions with our platform.",
      contentAr: "نقوم بجمع المعلومات التي تقدمها لنا مباشرة، بما في ذلك الاسم والبريد الإلكتروني ورقم الهاتف وبيانات الموقع عند استخدام خدماتنا. كما نجمع معلومات حول تفاعلاتك مع منصتنا.",
    },
    {
      titleEn: "How We Use Your Information",
      titleAr: "كيف نستخدم معلوماتك",
      contentEn: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to personalize your experience, and to protect our platform and users.",
      contentAr: "نستخدم المعلومات التي نجمعها لتوفير خدماتنا وصيانتها وتحسينها، للتواصل معك، لتخصيص تجربتك، ولحماية منصتنا ومستخدمينا.",
    },
    {
      titleEn: "Information Sharing",
      titleAr: "مشاركة المعلومات",
      contentEn: "We do not sell your personal information. We may share information with service providers, business partners, and when required by law. Your contact information is shared with service providers only when you initiate contact through our platform.",
      contentAr: "نحن لا نبيع معلوماتك الشخصية. قد نشارك المعلومات مع مقدمي الخدمات وشركاء الأعمال وعند الضرورة القانونية. يتم مشاركة معلومات الاتصال الخاصة بك مع مقدمي الخدمات فقط عند بدء الاتصال من خلال منصتنا.",
    },
    {
      titleEn: "Data Security",
      titleAr: "أمن البيانات",
      contentEn: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      contentAr: "نقوم بتنفيذ التدابير التقنية والتنظيمية المناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو التدمير.",
    },
    {
      titleEn: "Your Rights",
      titleAr: "حقوقك",
      contentEn: "You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications and request a copy of your data at any time.",
      contentAr: "لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. يمكنك أيضًا إلغاء الاشتراك في الاتصالات التسويقية وطلب نسخة من بياناتك في أي وقت.",
    },
    {
      titleEn: "Contact Us",
      titleAr: "اتصل بنا",
      contentEn: "If you have any questions about this Privacy Policy, please contact us at privacy@daleelbalady.com",
      contentAr: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على privacy@daleelbalady.com",
    },
  ];

  return (
    <CompanyLayout
      title="Privacy Policy"
      titleAr="سياسة الخصوصية"
      description="How we collect, use, and protect your information"
      descriptionAr="كيف نجمع معلوماتك ونستخدمها ونحميها"
      breadcrumbs={[
        { label: "Company", labelAr: "الشركة", href: "/company/about" },
        { label: "Privacy Policy", labelAr: "سياسة الخصوصية" }
      ]}
    >
      <div className="space-y-6 not-prose">
        <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20">
          <CardContent className="p-8">
            <p className="text-muted-foreground mb-6">
              {isRTL 
                ? "آخر تحديث: 21 أكتوبر 2025"
                : "Last updated: October 21, 2025"}
            </p>
            <p className="text-muted-foreground">
              {isRTL 
                ? "في دليل بلدي، نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها."
                : "At Daleel Balady, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information."}
            </p>
          </CardContent>
        </Card>

        {sections.map((section, index) => (
          <Card key={index} className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                {isRTL ? section.titleAr : section.titleEn}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isRTL ? section.contentAr : section.contentEn}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </CompanyLayout>
  );
}
