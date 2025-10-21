import { useState } from "react";
import { Plus, Edit, Eye, Pause, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const mockListings = [
  {
    id: 'L001',
    title: 'Cairo Medical Center',
    category: 'Medical',
    address: '123 Tahrir Square, Cairo',
    city: 'Cairo',
    phone: '+20 12 3456 7890',
    email: 'info@cairomedical.com',
    priceRange: 'EGP 500 - 2000',
    rating: 4.8,
    totalReviews: 127,
    status: 'active',
    featured: true,
    services: [
      { id: 'S001', name: 'General Checkup', price: 'EGP 500', duration: '30 min', status: 'active' },
      { id: 'S002', name: 'Specialist Consultation', price: 'EGP 1000', duration: '45 min', status: 'active' },
      { id: 'S003', name: 'Lab Tests Package', price: 'EGP 800', duration: '60 min', status: 'active' },
    ]
  },
  {
    id: 'L002',
    title: 'Premium Dental Clinic',
    category: 'Medical',
    address: '456 Nasr City, Cairo',
    city: 'Cairo',
    phone: '+20 12 9876 5432',
    email: 'contact@dentalclinic.com',
    priceRange: 'EGP 300 - 1500',
    rating: 4.9,
    totalReviews: 203,
    status: 'active',
    featured: false,
    services: [
      { id: 'S004', name: 'Teeth Cleaning', price: 'EGP 300', duration: '30 min', status: 'active' },
      { id: 'S005', name: 'Dental Filling', price: 'EGP 600', duration: '45 min', status: 'active' },
    ]
  },
];

export default function Listings() {
  const { t } = useLanguage();
  const [expandedListing, setExpandedListing] = useState<string | null>(null);

  return (
    <DashboardLayout role="provider">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {t("dashboard.myListings")}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Manage your business listings and services
            </p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add New Listing
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Listings</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">3</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Active Services</p>
              <p className="text-2xl font-bold text-green-600 mt-1">12</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Avg. Rating</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">4.8 ⭐</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {mockListings.map((listing) => (
            <Card key={listing.id} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{listing.title}</CardTitle>
                      {listing.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600">
                          Featured
                        </Badge>
                      )}
                      <StatusBadge status={listing.status} />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Category</p>
                        <p>{listing.category}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Location</p>
                        <p>{listing.city}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Price Range</p>
                        <p>{listing.priceRange}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Phone</p>
                        <p>{listing.phone}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Email</p>
                        <p>{listing.email}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Rating</p>
                        <p>⭐ {listing.rating} ({listing.totalReviews} reviews)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Pause className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Collapsible
                  open={expandedListing === listing.id}
                  onOpenChange={() => setExpandedListing(expandedListing === listing.id ? null : listing.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      <span className="font-medium">
                        Services ({listing.services.length})
                      </span>
                      {expandedListing === listing.id ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 space-y-2">
                      {listing.services.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50"
                        >
                          <div className="flex-1 grid grid-cols-4 gap-4">
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-400">Service Name</p>
                              <p className="font-medium text-slate-900 dark:text-white">{service.name}</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-400">Price</p>
                              <p className="font-medium text-slate-900 dark:text-white">{service.price}</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-400">Duration</p>
                              <p className="font-medium text-slate-900 dark:text-white">{service.duration}</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-400">Status</p>
                              <StatusBadge status={service.status} />
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full mt-2">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Service to this Listing
                      </Button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
