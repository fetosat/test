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
  { id: 'B001', customer: 'Ahmed Mohamed', service: 'Medical Checkup', date: '2025-01-22', time: '10:00 AM', status: 'confirmed', amount: 'EGP 500', notes: 'First visit' },
  { id: 'B002', customer: 'Sarah Ali', service: 'Follow-up Visit', date: '2025-01-22', time: '2:00 PM', status: 'pending', amount: 'EGP 400', notes: '' },
  { id: 'B003', customer: 'Mohamed Hassan', service: 'Lab Tests', date: '2025-01-23', time: '11:00 AM', status: 'confirmed', amount: 'EGP 800', notes: 'Fasting required' },
  { id: 'B004', customer: 'Fatima Ibrahim', service: 'Consultation', date: '2025-01-23', time: '3:00 PM', status: 'completed', amount: 'EGP 600', notes: '' },
  { id: 'B005', customer: 'Omar Khaled', service: 'Specialist Visit', date: '2025-01-24', time: '4:00 PM', status: 'cancelled', amount: 'EGP 1000', notes: 'Customer cancelled' },
];

export default function ProviderBookings() {
  const { t } = useLanguage();
  const [view, setView] = useState<'list' | 'calendar'>('calendar');

  const columns = [
    { key: 'id', label: t('dashboard.bookingId') },
    { key: 'customer', label: t('dashboard.customer') },
    { key: 'service', label: t('dashboard.service') },
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
    <DashboardLayout role="provider">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {t("dashboard.bookings")}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Manage your appointments and bookings
            </p>
          </div>
          <Tabs value={view} onValueChange={(v) => setView(v as any)}>
            <TabsList>
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Calendar
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center gap-2">
                <List className="w-4 h-4" />
                List
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Today's Bookings</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">12</p>
              </div>
              <CalendarIcon className="w-8 h-8 text-blue-500" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Pending</p>
                <p className="text-2xl font-bold text-yellow-600 mt-1">3</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Confirmed</p>
                <p className="text-2xl font-bold text-green-600 mt-1">8</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">This Month</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">78</p>
              </div>
              <CalendarIcon className="w-8 h-8 text-purple-500" />
            </CardContent>
          </Card>
        </div>

        {view === 'calendar' ? (
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
        ) : (
          <DataTable data={mockBookings} columns={columns} />
        )}
      </div>
    </DashboardLayout>
  );
}
