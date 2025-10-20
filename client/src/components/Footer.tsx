import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">د</span>
              </div>
              <span className="font-bold text-lg">Daleel Balady</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.description")}
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" data-testid="button-social-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block">{t("footer.about")}</a></li>
              <li><a href="#careers" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block">{t("footer.careers")}</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block">{t("footer.blog")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.support")}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#help" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block">{t("footer.help")}</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block">{t("footer.privacy")}</a></li>
              <li><a href="#terms" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block">{t("footer.terms")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Settings</h3>
            <div className="space-y-3">
              <Button
                size="sm"
                variant="outline"
                onClick={toggleLanguage}
                className="w-full justify-start"
                data-testid="button-footer-language"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === "en" ? "العربية" : "English"}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={toggleTheme}
                className="w-full justify-start"
                data-testid="button-footer-theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {theme === "dark" ? "Light" : "Dark"}
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
