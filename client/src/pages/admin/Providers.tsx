import { useState } from "react";
import { CheckCircle, XCircle, Eye, Plus, Search, Filter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DataTable from "@/components/dashboard/DataTable";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const mockProviders = [
  { id: '1', businessName: 'Cairo Medical Center', ownerName: 'Dr. Ahmed Hassan', category: 'Medical', status: 'active', rating: 4.8, totalReviews: 127, verified: true, joinedDate: '2025-01-15' },
  { id: '2', businessName: 'Alex Car Service', ownerName: 'Omar Mahmoud', category: 'Automotive', status: 'pending', rating: 4.5, totalReviews: 89, verified: false, joinedDate: '2025-01-18' },
  { id: '3', businessName: 'Nile Restaurant', ownerName: 'Fatima Ali', category: 'Food', status: 'active', rating: 4.9, totalReviews: 203, verified: true, joinedDate: '2025-01-10' },
  { id: '4', businessName: 'Smart Fix Electronics', ownerName: 'Mohamed Saeed', category: 'Engineering', status: 'active', rating: 4.6, totalReviews: 156, verified: true, joinedDate: '2025-01-12' },
  { id: '5', businessName: 'Elite Tutoring', ownerName: 'Sarah Ibrahim', category: 'Education', status: 'pending', rating: 4.7, totalReviews: 45, verified: false, joinedDate: '2025-01-20' },
];

export default function Providers() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredProviders = mockProviders.filter(provider => {
    const matchesSearch = provider.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.ownerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || provider.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || provider.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const columns = [
    {
      key: 'businessName',
      label: t('dashboard.businessName'),
      render: (provider: any) => (
        <div>
          <p className="font-medium text-slate-900 dark:text-white">{provider.businessName}</p>
          {provider.verified && (
            <Badge className="bg-blue-500 hover:bg-blue-600 text-xs mt-1">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          )}
        </div>
      ),
    },
    { key: 'ownerName', label: t('dashboard.owner') },
    { key: 'category', label: t('dashboard.category') },
    {
      key: 'rating',
      label: t('dashboard.rating'),
      render: (provider: any) => (
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{provider.rating}</span>
          <span className="text-xs text-slate-500">({provider.totalReviews})</span>
        </div>
      ),
    },
    {
      key: 'status',
      label: t('dashboard.status'),
      render: (provider: any) => <StatusBadge status={provider.status} />,
    },
    { key: 'joinedDate', label: t('dashboard.joinedDate') },
    {
      key: 'actions',
      label: t('dashboard.actions'),
      render: (provider: any) => (
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Eye className="w-4 h-4" />
          </Button>
          {provider.status === 'pending' && (
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
              {t("dashboard.providers")}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Manage service providers and verify businesses
            </p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Provider
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Providers</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">342</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Pending Approval</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">23</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Verified</p>
              <p className="text-2xl font-bold text-green-600 mt-1">298</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Avg. Rating</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">4.7 ⭐</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search providers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Medical">Medical</SelectItem>
                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Automotive">Automotive</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <DataTable data={filteredProviders} columns={columns} />
      </div>
    </DashboardLayout>
  );
}
