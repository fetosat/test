import { Calendar, MessageSquare, DollarSign, Star, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const bookingTrend = [
  { month: 'Jan', bookings: 45 },
  { month: 'Feb', bookings: 52 },
  { month: 'Mar', bookings: 61 },
  { month: 'Apr', bookings: 58 },
  { month: 'May', bookings: 70 },
  { month: 'Jun', bookings: 78 },
];

const earningsTrend = [
  { month: 'Jan', earnings: 12000 },
  { month: 'Feb', earnings: 15000 },
  { month: 'Mar', earnings: 18000 },
  { month: 'Apr', earnings: 16500 },
  { month: 'May', earnings: 21000 },
  { month: 'Jun', earnings: 24500 },
];

const upcomingBookings = [
  { customer: 'Ahmed Ali', service: 'Medical Checkup', time: 'Today, 10:00 AM', status: 'confirmed' },
  { customer: 'Sara Hassan', service: 'Follow-up Visit', time: 'Today, 2:00 PM', status: 'confirmed' },
  { customer: 'Mohamed Ibrahim', service: 'Consultation', time: 'Tomorrow, 11:00 AM', status: 'pending' },
  { customer: 'Fatima Mahmoud', service: 'Lab Tests', time: 'Tomorrow, 3:00 PM', status: 'confirmed' },
];

export default function ProviderDashboard() {
  const { t } = useLanguage();

  return (
    <DashboardLayout role="provider">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t("dashboard.overview")}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Welcome back! Here's how your business is performing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title={t("dashboard.bookingsToday")}
            value="12"
            icon={Calendar}
            trend={{ value: 8.5, isPositive: true }}
            gradient="from-blue-500 to-cyan-600"
          />
          <KPICard
            title={t("dashboard.pendingReviews")}
            value="3"
            icon={Star}
            gradient="from-yellow-500 to-orange-600"
          />
          <KPICard
            title={t("dashboard.earningsThisMonth")}
            value="EGP 24,500"
            icon={DollarSign}
            trend={{ value: 12.3, isPositive: true }}
            gradient="from-green-500 to-emerald-600"
          />
          <KPICard
            title={t("dashboard.newMessages")}
            value="8"
            icon={MessageSquare}
            gradient="from-purple-500 to-pink-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">Business Rating</h3>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">4.8</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Based on 127 reviews</p>
              <div className="mt-4 space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="text-sm w-12">{stars} stars</span>
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${Math.random() * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Total Customers</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">342</p>
                  <p className="text-xs text-green-600 mt-1">↑ 23 this month</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Repeat Rate</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">68%</p>
                  <p className="text-xs text-green-600 mt-1">↑ 5% vs last month</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Active Listings</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">3</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Active Services</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Booking Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={bookingTrend}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Line type="monotone" dataKey="bookings" stroke="#8b5cf6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Monthly Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={earningsTrend}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="earnings" fill="url(#earningsGradient)" />
                  <defs>
                    <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBookings.map((booking, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-white">{booking.customer}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{booking.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{booking.time}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
