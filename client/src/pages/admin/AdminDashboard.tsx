import { Users, Store, Calendar, DollarSign, CheckCircle, TrendingUp, Activity, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const monthlyData = [
  { month: 'Jan', bookings: 65, revenue: 28000, users: 120 },
  { month: 'Feb', bookings: 78, revenue: 32000, users: 145 },
  { month: 'Mar', bookings: 90, revenue: 38000, users: 178 },
  { month: 'Apr', bookings: 81, revenue: 35000, users: 195 },
  { month: 'May', bookings: 95, revenue: 42000, users: 220 },
  { month: 'Jun', bookings: 112, revenue: 48000, users: 256 },
];

const categoryData = [
  { name: 'Medical', value: 30, color: '#3b82f6' },
  { name: 'Food', value: 25, color: '#8b5cf6' },
  { name: 'Automotive', value: 20, color: '#ec4899' },
  { name: 'Shopping', value: 15, color: '#f59e0b' },
  { name: 'Other', value: 10, color: '#10b981' },
];

const recentActivity = [
  { user: 'Ahmed Mohamed', action: 'New booking', time: '2 mins ago', type: 'booking' },
  { user: 'Sarah Ali', action: 'Provider registered', time: '15 mins ago', type: 'provider' },
  { user: 'Mohamed Hassan', action: 'Payment received', time: '1 hour ago', type: 'payment' },
  { user: 'Fatima Ibrahim', action: 'Review posted', time: '2 hours ago', type: 'review' },
  { user: 'Omar Khaled', action: 'New user signup', time: '3 hours ago', type: 'user' },
];

export default function AdminDashboard() {
  const { t } = useLanguage();

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t("dashboard.overview")}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Welcome back! Here's what's happening with your platform today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title={t("dashboard.totalUsers")}
            value="1,284"
            icon={Users}
            trend={{ value: 12.5, isPositive: true }}
            gradient="from-blue-500 to-cyan-600"
          />
          <KPICard
            title={t("dashboard.activeProviders")}
            value="342"
            icon={Store}
            trend={{ value: 8.2, isPositive: true }}
            gradient="from-purple-500 to-pink-600"
          />
          <KPICard
            title={t("dashboard.bookingsToday")}
            value="89"
            icon={Calendar}
            trend={{ value: 3.1, isPositive: false }}
            gradient="from-orange-500 to-red-600"
          />
          <KPICard
            title={t("dashboard.revenue")}
            value="EGP 48,250"
            icon={DollarSign}
            trend={{ value: 15.3, isPositive: true }}
            gradient="from-green-500 to-emerald-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t("dashboard.pendingVerifications")}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">23</p>
              </div>
              <CheckCircle className="w-8 h-8 text-yellow-500" />
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Avg. Rating</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">4.8</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Active Listings</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">856</p>
              </div>
              <Activity className="w-8 h-8 text-blue-500" />
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Growth Rate</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">+12%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Revenue & Bookings Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} />
                  <Line type="monotone" dataKey="bookings" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="users" fill="url(#colorGradient)" />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <div className="flex-1">
                      <p className="font-medium text-sm text-slate-900 dark:text-white">{activity.user}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{activity.action}</p>
                    </div>
                    <span className="text-xs text-slate-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
