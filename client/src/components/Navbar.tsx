import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">د</span>
            </div>
            <span className="font-bold text-lg">Daleel Balady</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={`text-sm font-medium hover-elevate px-3 py-2 rounded-md ${location === "/" ? "text-primary" : ""}`} data-testid="link-home">
              {t("nav.home")}
            </Link>
            <Link href="/find" className={`text-sm font-medium hover-elevate px-3 py-2 rounded-md ${location === "/find" ? "text-primary" : ""}`} data-testid="link-find">
              {language === "ar" ? "ابحث" : "Find"}
            </Link>
            <a href="#categories" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-categories">
              {t("nav.categories")}
            </a>
            <a href="#offers" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-offers">
              {t("nav.offers")}
            </a>
            <a href="#contact" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-contact">
              {t("nav.contact")}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="default" size="sm" data-testid="button-join-provider">
              {t("nav.joinProvider")}
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
