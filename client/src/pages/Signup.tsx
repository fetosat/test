import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Lock, User, Phone, ArrowRight, UserPlus } from "lucide-react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function Signup() {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br from-sky-500/10 via-emerald-500/5 to-purple-500/10">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Link href="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">Daleel Balady</span>
        </Link>

        <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20 shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              {isRTL ? "إنشاء حساب" : "Create Account"}
            </CardTitle>
            <CardDescription className="text-center">
              {isRTL ? "انضم إلى دليل بلدي اليوم" : "Join Daleel Balady today"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10">
                <FaGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10">
                <FaFacebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {isRTL ? "أو" : "Or"}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <Label htmlFor="name">
                  {isRTL ? "الاسم الكامل" : "Full Name"}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
                    value={formData.name}
                    onChange={handleChange("name")}
                    className="pl-10 backdrop-blur-xl bg-white/5 border-white/10"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="space-y-2"
              >
                <Label htmlFor="email">
                  {isRTL ? "البريد الإلكتروني" : "Email"}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={isRTL ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                    value={formData.email}
                    onChange={handleChange("email")}
                    className="pl-10 backdrop-blur-xl bg-white/5 border-white/10"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <Label htmlFor="phone">
                  {isRTL ? "رقم الهاتف" : "Phone Number"}
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={isRTL ? "أدخل رقم هاتفك" : "Enter your phone number"}
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    className="pl-10 backdrop-blur-xl bg-white/5 border-white/10"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="space-y-2"
              >
                <Label htmlFor="password">
                  {isRTL ? "كلمة المرور" : "Password"}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder={isRTL ? "أدخل كلمة المرور" : "Enter your password"}
                    value={formData.password}
                    onChange={handleChange("password")}
                    className="pl-10 backdrop-blur-xl bg-white/5 border-white/10"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <Label htmlFor="confirmPassword">
                  {isRTL ? "تأكيد كلمة المرور" : "Confirm Password"}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={isRTL ? "أعد إدخال كلمة المرور" : "Re-enter your password"}
                    value={formData.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    className="pl-10 backdrop-blur-xl bg-white/5 border-white/10"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-sky-400 to-emerald-400 text-white border-0 hover:opacity-90 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    isRTL ? "جاري إنشاء الحساب..." : "Creating account..."
                  ) : (
                    <>
                      {isRTL ? "إنشاء حساب" : "Create Account"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              {isRTL ? "لديك حساب بالفعل؟" : "Already have an account?"}{" "}
              <Link href="/login" className="text-sky-400 hover:text-sky-300 transition-colors font-medium">
                {isRTL ? "سجل الدخول" : "Sign in"}
              </Link>
            </div>
            <p className="text-xs text-center text-muted-foreground">
              {isRTL 
                ? "بالتسجيل، أنت توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا"
                : "By signing up, you agree to our Terms of Service and Privacy Policy"}
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
