import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function Login() {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
            <LogIn className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">Daleel Balady</span>
        </Link>

        <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20 shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              {isRTL ? "تسجيل الدخول" : "Sign In"}
            </CardTitle>
            <CardDescription className="text-center">
              {isRTL ? "أدخل بياناتك للوصول إلى حسابك" : "Enter your credentials to access your account"}
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
                <Label htmlFor="email">
                  {isRTL ? "البريد الإلكتروني" : "Email"}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={isRTL ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <Label htmlFor="password">
                  {isRTL ? "كلمة المرور" : "Password"}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder={isRTL ? "أدخل كلمة المرور" : "Enter your password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 backdrop-blur-xl bg-white/5 border-white/10"
                    required
                  />
                </div>
              </motion.div>

              <div className="flex items-center justify-between text-sm">
                <Link href="/forgot-password" className="text-sky-400 hover:text-sky-300 transition-colors">
                  {isRTL ? "نسيت كلمة المرور؟" : "Forgot password?"}
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-sky-400 to-emerald-400 text-white border-0 hover:opacity-90 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    isRTL ? "جاري تسجيل الدخول..." : "Signing in..."
                  ) : (
                    <>
                      {isRTL ? "تسجيل الدخول" : "Sign In"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              {isRTL ? "ليس لديك حساب؟" : "Don't have an account?"}{" "}
              <Link href="/signup" className="text-sky-400 hover:text-sky-300 transition-colors font-medium">
                {isRTL ? "سجل الآن" : "Sign up"}
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
