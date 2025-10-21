import { useState } from "react";
import { Calendar as CalendarIcon, List, CheckCircle, XCircle, Clock, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DataTable from "@/components/dashboard/DataTable";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
const mockBookings = [
  { id: 'B001', customer: 'Ahmed Mohamed', service: 'Medical Checkup', provider: 'Cairo Medical', date: '2025-01-22', time: '10:00 AM', status: 'confirmed', amount: 'EGP 500' },
  { id: 'B002', customer: 'Sarah Ali', service: 'Car Service', provider: 'Alex Car Service', date: '2025-01-22', time: '2:00 PM', status: 'pending', amount: 'EGP 800' },
  { id: 'B003', customer: 'Mohamed Hassan', service: 'Dinner Reservation', provider: 'Nile Restaurant', date: '2025-01-23', time: '7:00 PM', status: 'confirmed', amount: 'EGP 1200' },
  { id: 'B004', customer: 'Fatima Ibrahim', service: 'Laptop Repair', provider: 'Smart Fix', date: '2025-01-23', time: '11:00 AM', status: 'completed', amount: 'EGP 600' },
  { id: 'B005', customer: 'Omar Khaled', service: 'Math Tutoring', provider: 'Elite Tutoring', date: '2025-01-24', time: '4:00 PM', status: 'cancelled', amount: 'EGP 300' },
];

export default function Bookings() {
  const { t } = useLanguage();
  const [view, setView] = useState<'list' | 'calendar'>('list');

  const columns = [
    { key: 'id', label: t('dashboard.bookingId') },
    { key: 'customer', label: t('dashboard.customer') },
    { key: 'service', label: t('dashboard.service') },
    { key: 'provider', label: 'Provider' },
    { key: 'date', label: 'Date' },
    { key: 'time', label: t('dashboard.time') },
    {
      key: 'status',
      label: t('dashboard.status'),
      render: (booking: any) => <StatusBadge status={booking.status} />,
    },
    { key: 'amount', label: t('dashboard.amount') },
    {
      key: 'actions',
      label: t('dashboard.actions'),
      render: (booking: any) => (
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Eye className="w-4 h-4" />
          </Button>
          {booking.status === 'pending' && (
            <>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-green-600">
                <CheckCircle className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600">
                <XCircle className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {t("dashboard.bookings")}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Manage all bookings across the platform
            </p>
          </div>
          <Tabs value={view} onValueChange={(v) => setView(v as any)}>
            <TabsList>
              <TabsTrigger value="list" className="flex items-center gap-2">
                <List className="w-4 h-4" />
                List
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Calendar
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Total Bookings</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">1,247</p>
              </div>
              <CalendarIcon className="w-8 h-8 text-blue-500" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Pending</p>
                <p className="text-2xl font-bold text-yellow-600 mt-1">45</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Confirmed</p>
                <p className="text-2xl font-bold text-green-600 mt-1">1,089</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Cancelled</p>
                <p className="text-2xl font-bold text-red-600 mt-1">113</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500" />
            </CardContent>
          </Card>
        </div>

        {view === 'list' ? (
          <DataTable data={mockBookings} columns={columns} />
        ) : (
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardContent className="p-6">
              <div className="h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <CalendarIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Calendar View</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Visual calendar coming soon. Use list view to manage bookings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
