import React from "react";
import Link from "next/link";
import { Bell, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Work with creators</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Work with creators and influencers to create content & reach
              audiences
            </p>
            <Button>CREATE A CAMPAIGN</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Work with talent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Work with talent including models, actors, photographers and more
            </p>
            <Link href="/brand/post-job">
              <Button>POST A JOB</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Communicate in real time with real talent.
            </p>
            <div className="flex -space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Avatar key={i}>
                  <AvatarImage src={`/placeholder.svg?${i}`} />
                  <AvatarFallback>{i}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button variant="secondary">GO TO MESSAGES</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Search for Talent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Find the perfect talent for your projects quickly and easily.
            </p>
            <Link href="/brand/search">
              <Button>SEARCH TALENT</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-yellow-100 p-6 rounded-lg mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Get started and post your first campaign
          </h2>
          <p className="text-muted-foreground">
            It's FREE to post a campaign and connect with the right talent,
            fast.
          </p>
        </div>
        <Button>POST A CAMPAIGN</Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>My Jobs</CardTitle>
          <Button variant="outline">VIEW ALL</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Model for Candle Photoshoot",
                new: 1,
                shortlist: 0,
                booked: 0,
              },
              {
                title: "Photographer for Jewellery Candles",
                new: 38,
                shortlist: 1,
                booked: 1,
              },
              {
                title:
                  "Adelaide-Based Presenter for Facebook Live Events - Royal Essence",
                new: 5,
                shortlist: 0,
                booked: 0,
              },
              {
                title:
                  "Youtuber who loves self-care and sparkly jewellery worth $90 to $5000",
                new: 6,
                shortlist: 0,
                booked: 0,
              },
              { title: "TikTok Influencers", new: 26, shortlist: 1, booked: 1 },
            ].map((job, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                      CLOSED
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="font-bold">{job.new}</div>
                      <div className="text-xs text-muted-foreground">New</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold">{job.shortlist}</div>
                      <div className="text-xs text-muted-foreground">
                        Shortlist
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold">{job.booked}</div>
                      <div className="text-xs text-muted-foreground">
                        Booked
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  REPOST JOB
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
