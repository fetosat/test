import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { ReactNode } from "react";

interface CompanyLayoutProps {
  children: ReactNode;
  title: string;
  titleAr: string;
  description?: string;
  descriptionAr?: string;
  breadcrumbs?: { label: string; labelAr: string; href?: string }[];
}

export function CompanyLayout({ 
  children, 
  title, 
  titleAr, 
  description, 
  descriptionAr,
  breadcrumbs = []
}: CompanyLayoutProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

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

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {breadcrumbs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      {isRTL ? "الرئيسية" : "Home"}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <BreadcrumbItem>
                        {crumb.href ? (
                          <BreadcrumbLink href={crumb.href}>
                            {isRTL ? crumb.labelAr : crumb.label}
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>
                            {isRTL ? crumb.labelAr : crumb.label}
                          </BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                    </div>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              {isRTL ? titleAr : title}
            </h1>
            {description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {isRTL ? (descriptionAr || description) : description}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {children}
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
