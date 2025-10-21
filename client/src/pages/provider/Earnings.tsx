import { useLanguage } from "@/contexts/LanguageContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DataTable from "@/components/dashboard/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { DollarSign, TrendingUp, CreditCard, Clock } from "lucide-react";
import StatusBadge from "@/components/dashboard/StatusBadge";

const monthlyEarnings = [
  { month: 'Jan', earnings: 12000, bookings: 45 },
  { month: 'Feb', earnings: 15000, bookings: 52 },
  { month: 'Mar', earnings: 18000, bookings: 61 },
  { month: 'Apr', earnings: 16500, bookings: 58 },
  { month: 'May', earnings: 21000, bookings: 70 },
  { month: 'Jun', earnings: 24500, bookings: 78 },
];

const transactions = [
  { id: 'T001', bookingId: 'B001', date: '2025-01-22', customer: 'Ahmed Mohamed', service: 'Medical Checkup', amount: 'EGP 500', status: 'completed' },
  { id: 'T002', bookingId: 'B002', date: '2025-01-22', customer: 'Sarah Ali', service: 'Follow-up Visit', amount: 'EGP 400', status: 'pending' },
  { id: 'T003', bookingId: 'B003', date: '2025-01-23', customer: 'Mohamed Hassan', service: 'Lab Tests', amount: 'EGP 800', status: 'completed' },
  { id: 'T004', bookingId: 'B004', date: '2025-01-23', customer: 'Fatima Ibrahim', service: 'Consultation', amount: 'EGP 600', status: 'completed' },
  { id: 'T005', bookingId: 'B005', date: '2025-01-21', customer: 'Omar Khaled', service: 'Specialist Visit', amount: 'EGP 1000', status: 'completed' },
];

export default function Earnings() {
  const { t } = useLanguage();

  const columns = [
    { key: 'id', label: 'Transaction ID' },
    { key: 'date', label: 'Date' },
    { key: 'customer', label: t('dashboard.customer') },
    { key: 'service', label: t('dashboard.service') },
    { key: 'amount', label: t('dashboard.amount') },
    {
      key: 'status',
      label: t('dashboard.status'),
      render: (transaction: any) => <StatusBadge status={transaction.status} />,
    },
  ];

  return (
    <DashboardLayout role="provider">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t("dashboard.earnings")}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Track your income and financial performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Total Earnings</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">EGP 107,000</p>
                <p className="text-xs text-green-600 mt-1">+28% vs last period</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">This Month</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">EGP 24,500</p>
                <p className="text-xs text-green-600 mt-1">+17% vs last month</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Pending Payout</p>
                <p className="text-2xl font-bold text-yellow-600 mt-1">EGP 1,200</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Avg per Booking</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">EGP 314</p>
              </div>
              <CreditCard className="w-8 h-8 text-purple-500" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Earnings Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyEarnings}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Line type="monotone" dataKey="earnings" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Bookings vs Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyEarnings}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:border-slate-800" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable data={transactions} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
