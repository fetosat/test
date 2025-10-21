import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  LayoutDashboard,
  Users,
  Store,
  List,
  Calendar,
  CreditCard,
  Star,
  Settings,
  BarChart3,
  MessageSquare,
  Package,
  UserCog,
  DollarSign,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
  role: "admin" | "provider";
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const adminMenuItems = [
  { icon: LayoutDashboard, label: "dashboard.overview", path: "/admin" },
  { icon: Users, label: "dashboard.users", path: "/admin/users" },
  { icon: Store, label: "dashboard.providers", path: "/admin/providers" },
  { icon: List, label: "dashboard.listings", path: "/admin/listings" },
  { icon: Package, label: "dashboard.services", path: "/admin/services" },
  { icon: Calendar, label: "dashboard.bookings", path: "/admin/bookings" },
  { icon: CreditCard, label: "dashboard.payments", path: "/admin/payments" },
  { icon: Star, label: "dashboard.reviews", path: "/admin/reviews" },
  { icon: BarChart3, label: "dashboard.analytics", path: "/admin/analytics" },
  { icon: Settings, label: "dashboard.settings", path: "/admin/settings" },
];

const providerMenuItems = [
  { icon: LayoutDashboard, label: "dashboard.overview", path: "/provider" },
  { icon: List, label: "dashboard.myListings", path: "/provider/listings" },
  { icon: Package, label: "dashboard.services", path: "/provider/services" },
  { icon: Calendar, label: "dashboard.bookings", path: "/provider/bookings" },
  { icon: Users, label: "dashboard.customers", path: "/provider/customers" },
  { icon: DollarSign, label: "dashboard.earnings", path: "/provider/earnings" },
  { icon: Star, label: "dashboard.reviews", path: "/provider/reviews" },
  { icon: MessageSquare, label: "dashboard.messages", path: "/provider/messages" },
  { icon: Settings, label: "dashboard.settings", path: "/provider/settings" },
];

export default function Sidebar({ role, collapsed, onToggleCollapse }: SidebarProps) {
  const [location] = useLocation();
  const { t } = useLanguage();
  const menuItems = role === "admin" ? adminMenuItems : providerMenuItems;

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 256 }}
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 flex flex-col"
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="font-semibold text-slate-900 dark:text-white">
              {role === "admin" ? "Admin" : "Provider"}
            </span>
          </motion.div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {collapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </Button>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path || (item.path !== `/${role}` && location.startsWith(item.path));
          
          const linkContent = (
            <Link href={item.path}>
              <motion.a
                whileHover={{ x: 2 }}
                className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="text-sm font-medium">{t(item.label)}</span>
                )}
              </motion.a>
            </Link>
          );

          if (collapsed) {
            return (
              <Tooltip key={item.path}>
                <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                <TooltipContent side="right">{t(item.label)}</TooltipContent>
              </Tooltip>
            );
          }

          return <div key={item.path}>{linkContent}</div>;
        })}
      </nav>
    </motion.aside>
  );
}
