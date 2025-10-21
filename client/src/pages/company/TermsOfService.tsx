import { CompanyLayout } from "@/components/CompanyLayout";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsOfService() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const sections = [
    {
      titleEn: "Acceptance of Terms",
      titleAr: "قبول الشروط",
      contentEn: "By accessing and using Daleel Balady, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.",
      contentAr: "من خلال الوصول إلى واستخدام دليل بلدي، فإنك تقبل وتوافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام منصتنا.",
    },
    {
      titleEn: "User Accounts",
      titleAr: "حسابات المستخدم",
      contentEn: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.",
      contentAr: "أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تحدث تحت حسابك. يجب عليك إخطارنا على الفور بأي استخدام غير مصرح به لحسابك.",
    },
    {
      titleEn: "Service Transactions",
      titleAr: "معاملات الخدمة",
      contentEn: "Daleel Balady facilitates connections between users and service providers. We are not responsible for the quality, safety, or legality of services provided. All transactions are between you and the service provider.",
      contentAr: "يسهل دليل بلدي الاتصالات بين المستخدمين ومقدمي الخدمات. نحن لسنا مسؤولين عن جودة أو سلامة أو قانونية الخدمات المقدمة. جميع المعاملات تتم بينك وبين مقدم الخدمة.",
    },
    {
      titleEn: "Prohibited Activities",
      titleAr: "الأنشطة المحظورة",
      contentEn: "You may not use our platform for any illegal purpose, to transmit harmful content, to impersonate others, or to violate any applicable laws or regulations.",
      contentAr: "لا يجوز لك استخدام منصتنا لأي غرض غير قانوني، أو لنقل محتوى ضار، أو انتحال شخصية الآخرين، أو انتهاك أي قوانين أو لوائح سارية.",
    },
    {
      titleEn: "Intellectual Property",
      titleAr: "الملكية الفكرية",
      contentEn: "All content on Daleel Balady, including text, graphics, logos, and software, is the property of Daleel Balady or its licensors and is protected by copyright and other intellectual property laws.",
      contentAr: "جميع المحتويات على دليل بلدي، بما في ذلك النصوص والرسومات والشعارات والبرامج، هي ملك لدليل بلدي أو مرخصيها ومحمية بموجب حقوق النشر وقوانين الملكية الفكرية الأخرى.",
    },
    {
      titleEn: "Limitation of Liability",
      titleAr: "تحديد المسؤولية",
      contentEn: "Daleel Balady shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our platform or services.",
      contentAr: "لن يكون دليل بلدي مسؤولاً عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدامك لمنصتنا أو خدماتنا.",
    },
    {
      titleEn: "Changes to Terms",
      titleAr: "التغييرات على الشروط",
      contentEn: "We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes via email or through the platform.",
      contentAr: "نحتفظ بالحق في تعديل شروط الخدمة هذه في أي وقت. سنقوم بإخطار المستخدمين بالتغييرات المهمة عبر البريد الإلكتروني أو من خلال المنصة.",
    },
  ];

  return (
    <CompanyLayout
      title="Terms of Service"
      titleAr="شروط الخدمة"
      description="Terms and conditions for using Daleel Balady"
      descriptionAr="الشروط والأحكام لاستخدام دليل بلدي"
      breadcrumbs={[
        { label: "Company", labelAr: "الشركة", href: "/company/about" },
        { label: "Terms of Service", labelAr: "شروط الخدمة" }
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
                ? "مرحبًا بك في دليل بلدي. توضح شروط الخدمة هذه القواعد والأنظمة لاستخدام منصتنا."
                : "Welcome to Daleel Balady. These Terms of Service outline the rules and regulations for the use of our platform."}
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
