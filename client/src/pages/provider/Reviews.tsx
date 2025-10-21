import { useState } from "react";
import { Star, Reply } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const mockReviews = [
  {
    id: '1',
    customer: 'Ahmed Mohamed',
    avatar: 'AM',
    rating: 5,
    comment: 'Excellent service! Very professional and thorough. Highly recommended.',
    date: '2025-01-20',
    service: 'Medical Checkup',
    reply: null
  },
  {
    id: '2',
    customer: 'Sarah Ali',
    avatar: 'SA',
    rating: 4,
    comment: 'Good experience overall. The doctor was very patient and explained everything clearly.',
    date: '2025-01-18',
    service: 'Consultation',
    reply: 'Thank you for your feedback! We appreciate your visit.'
  },
  {
    id: '3',
    customer: 'Mohamed Hassan',
    avatar: 'MH',
    rating: 5,
    comment: 'Outstanding! Best medical center in Cairo. Will definitely come back.',
    date: '2025-01-15',
    service: 'Lab Tests',
    reply: null
  },
  {
    id: '4',
    customer: 'Fatima Ibrahim',
    avatar: 'FI',
    rating: 4,
    comment: 'Professional staff and clean facility. Only minor wait time.',
    date: '2025-01-12',
    service: 'Follow-up Visit',
    reply: 'We appreciate your patience and feedback. We\'re working on reducing wait times.'
  },
];

export default function Reviews() {
  const { t } = useLanguage();
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const avgRating = (mockReviews.reduce((acc, review) => acc + review.rating, 0) / mockReviews.length).toFixed(1);

  return (
    <DashboardLayout role="provider">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t("dashboard.reviews")}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Manage customer feedback and reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Average Rating</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">{avgRating}</p>
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Reviews</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">127</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Pending Replies</p>
              <p className="text-3xl font-bold text-yellow-600 mt-1">2</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Rating Distribution</h3>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-20">
                    {stars} <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-yellow-500 h-3 rounded-full"
                      style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400 w-12">
                    {stars === 5 ? '89' : stars === 4 ? '25' : stars === 3 ? '7' : stars === 2 ? '4' : '2'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {mockReviews.map((review) => (
            <Card key={review.id} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{review.customer}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{review.service}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="text-xs text-slate-500">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">{review.comment}</p>
                    
                    {review.reply ? (
                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 mt-3">
                        <p className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-1">Your Reply:</p>
                        <p className="text-sm text-blue-800 dark:text-blue-300">{review.reply}</p>
                      </div>
                    ) : replyingTo === review.id ? (
                      <div className="mt-3">
                        <Textarea
                          placeholder="Write your reply..."
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          className="mb-2"
                        />
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => setReplyingTo(null)}>
                            Post Reply
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => setReplyingTo(null)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setReplyingTo(review.id)}
                        className="mt-2"
                      >
                        <Reply className="w-4 h-4 mr-2" />
                        {t('dashboard.reply')}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
