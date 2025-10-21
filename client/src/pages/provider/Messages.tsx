import { useState } from "react";
import { Send, Search, Phone, Video, MoreVertical } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const conversations = [
  { id: 1, name: 'Ahmed Mohamed', lastMessage: 'When is my next appointment?', time: '2 mins ago', unread: 2, avatar: 'AM' },
  { id: 2, name: 'Sarah Ali', lastMessage: 'Thank you for the great service!', time: '1 hour ago', unread: 0, avatar: 'SA' },
  { id: 3, name: 'Mohamed Hassan', lastMessage: 'Can I reschedule for tomorrow?', time: '3 hours ago', unread: 1, avatar: 'MH' },
  { id: 4, name: 'Fatima Ibrahim', lastMessage: 'What documents do I need to bring?', time: '1 day ago', unread: 0, avatar: 'FI' },
];

const messages = [
  { id: 1, sender: 'customer', text: 'Hello! I have a question about my appointment.', time: '10:00 AM' },
  { id: 2, sender: 'provider', text: 'Hi Ahmed! How can I help you today?', time: '10:02 AM' },
  { id: 3, sender: 'customer', text: 'When is my next appointment scheduled?', time: '10:03 AM' },
  { id: 4, sender: 'provider', text: 'Your next appointment is on January 25th at 10:00 AM.', time: '10:05 AM' },
  { id: 5, sender: 'customer', text: 'Perfect! Thank you for the quick response.', time: '10:06 AM' },
];

export default function Messages() {
  const { t } = useLanguage();
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');

  return (
    <DashboardLayout role="provider">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t("dashboard.messages")}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Chat with your customers in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <CardContent className="p-4">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-10"
                  />
                </div>
              </div>
              <ScrollArea className="h-[calc(100vh-350px)]">
                <div className="space-y-2">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedConversation(conv)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedConversation.id === conv.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className={selectedConversation.id === conv.id ? 'bg-white text-blue-600' : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'}>
                            {conv.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium truncate">{conv.name}</p>
                            <span className={`text-xs ${selectedConversation.id === conv.id ? 'text-white/80' : 'text-slate-500'}`}>
                              {conv.time}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className={`text-sm truncate ${selectedConversation.id === conv.id ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
                              {conv.lastMessage}
                            </p>
                            {conv.unread > 0 && (
                              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {conv.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                      {selectedConversation.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{selectedConversation.name}</p>
                    <p className="text-xs text-green-600">Online</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'provider' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        message.sender === 'provider'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'provider' ? 'text-white/70' : 'text-slate-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setMessageText('');
                    }
                  }}
                />
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
