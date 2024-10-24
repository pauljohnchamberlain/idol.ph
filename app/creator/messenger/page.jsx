"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  MessageCircle,
  Paperclip,
  Send,
  Settings,
} from "lucide-react";

export default function Component() {
  const [message, setMessage] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(null);

  const conversations = [
    {
      id: 1,
      name: `India R`,
      job: `Model for Candle Photoshoot`,
      message: `Hi India! It's a shoot for our ...`,
      time: `3 years ago`,
    },
    {
      id: 2,
      name: `Tuesday R`,
      job: `Photographer for Jewellery ...`,
      message: `Hi Tuesday, no rush! Have a...`,
      time: `4 years ago`,
    },
    {
      id: 3,
      name: `Stacey C`,
      job: `Look for a few photographer...`,
      message: `Thank you so much!:) How ...`,
      time: `6 years ago`,
    },
    {
      id: 4,
      name: `Inna I`,
      job: `Look for a few photographer...`,
      message: `Sorry for the long message ...`,
      time: `6 years ago`,
    },
    {
      id: 5,
      name: `Amy Rose H`,
      job: `Adelaide-Based Presenter f...`,
      message: `Hi Amy! We're actually look...`,
      time: `4 years ago`,
    },
    {
      id: 6,
      name: `Justine G`,
      job: `Adelaide-Based Presenter f...`,
      message: `Thank you! ❤️ We'll contact...`,
      time: `4 years ago`,
    },
    {
      id: 7,
      name: `Clio C`,
      job: `Adelaide-Based Presenter f...`,
      message: `Royal Essence is looking for...`,
      time: `4 years ago`,
    },
    {
      id: 8,
      name: `Megan V`,
      job: `Youtuber who loves self-care...`,
      message: `Hi paul sorry I must have m...`,
      time: `4 years ago`,
    },
  ];

  const ConversationList = () => (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      {conversations.map((conv) => (
        <div
          key={conv.id}
          className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
          onClick={() => setSelectedConversation(conv)}
        >
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
              <AvatarFallback>
                {conv.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {conv.name}
              </p>
              <p className="text-xs text-gray-500 truncate">{conv.job}</p>
              <p className="text-xs text-gray-500 truncate">{conv.message}</p>
            </div>
            <div className="text-xs text-gray-400">{conv.time}</div>
          </div>
        </div>
      ))}
    </ScrollArea>
  );

  const ConversationView = ({ conversation }) => (
    <div className="flex flex-col h-[calc(100vh-65px)]">
      <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSelectedConversation(null)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold truncate">{conversation.job}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">Book</Button>
          <Button size="icon" variant="ghost">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <ScrollArea className="flex-1 p-4">
        <Card className="mb-4 bg-gray-100">
          <CardContent className="p-4">
            <p className="text-sm">
              To protect your payment, always communicate and pay through
              theright.fit. All bookings include legal contracts and insurance
              for your protection, and payments are held in escrow until the job
              is successfully complete
            </p>
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardHeader className="pb-2">
            <CardTitle>Application</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              Yeh I'm keen! Is this a shoot or for socials x ignore the price I
              entered
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=24&width=24`} />
                <AvatarFallback>IR</AvatarFallback>
              </Avatar>
              <span className="font-medium">India R</span>
            </div>
            <Button variant="outline" size="sm" className="mb-2">
              <Paperclip className="h-4 w-4 mr-2" />
              Attachment
            </Button>
            <div className="bg-gray-100 p-2 rounded">
              <p className="font-semibold">Quote:</p>
              <p className="text-2xl font-bold">A$444.00</p>
              <p className="text-sm text-gray-600">
                = A$541.68 (including 20% TRF Fees)
              </p>
            </div>
          </CardContent>
        </Card>
        <p className="text-xs text-gray-400 mb-1">June 3, 2021 11:38 AM</p>
        <p className="text-xs text-green-500 mb-4">Seen</p>
        <Card className="mb-4 bg-blue-900 text-white">
          <CardContent className="p-4">
            <p>
              Hi India! It's a shoot for our new products! It will be posted on
              socials as well :)
            </p>
          </CardContent>
        </Card>
        <p className="text-xs text-gray-400 mb-4">June 3, 2021 12:40 PM</p>
      </ScrollArea>
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button>
            <Send className="h-4 w-4 mr-2" /> Send
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`w-full md:w-1/3 lg:w-1/4 bg-white border-r border-gray-200 ${selectedConversation ? "hidden md:block" : ""}`}
      >
        <ConversationList />
      </div>
      <div
        className={`flex-1 ${!selectedConversation ? "hidden md:block" : ""}`}
      >
        {selectedConversation ? (
          <ConversationView conversation={selectedConversation} />
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500">
              Select a conversation to view messages
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
