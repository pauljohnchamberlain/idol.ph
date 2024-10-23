"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  MapPin,
  Star,
  Book,
  Award,
  Video,
  User,
  BarChart as BarChartIcon,
  Play,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

const tabs = [
  { icon: Book, label: "Portfolio", count: null },
  { icon: Star, label: "Reviews", count: 53 },
  { icon: Award, label: "Features", count: null },
  { icon: Video, label: "Video & Audio", count: 6 },
  { icon: User, label: "Bio", count: null },
  { icon: BarChartIcon, label: "Analytics", count: null },
];

const reviews = [
  {
    title:
      "Male or Female Model Needed for 3D Body Scanner Product Photoshoot Aditi S",
    rating: 5,
    date: "11th Oct, 2024",
    content: "excellent work!",
  },
  {
    title: "FEMALE MODEL REQUIRED Aditi S",
    rating: 5,
    date: "12th Aug, 2024",
    content:
      "Aditi was an absolute pleasure to work with. Nothing was ever too difficult. Thanks Aditi.",
  },
  {
    title: 'Hair Campaign - "real" models required Aditi S',
    rating: 5,
    date: "2nd Sep, 2024",
    content: "",
  },
  {
    title:
      "(BRIS) Social content plus background of a video shoot - Includes Playing Free Roam VR! Thurs 6/6 Aditi S",
    rating: 5,
    date: "20th Jun, 2024",
    content: "",
  },
];

const features = [
  { label: "Hair Color", value: "Black" },
  { label: "Skin Tone", value: "Tan" },
  { label: "Ethnicity", value: "Indian / Pakistani" },
  { label: "Hair Type", value: "Wavy" },
  { label: "Build", value: "Average" },
  { label: "Skin Type", value: "Dry" },
  { label: "Eye Color", value: "Black" },
  { label: "Transgender", value: "No" },
  { label: "Sexuality", value: "Heterosexual/straight" },
  { label: "Children", value: "None" },
  { label: "Pets", value: "None" },
  { label: "Diet", value: "Vegetarian, Vegan" },
  { label: "Marital status", value: "Single" },
  { label: "Height", value: "172 cm" },
  { label: "Hair Length", value: "Medium (above shoulders)" },
  { label: "Chest", value: "84 cm" },
  { label: "Waist", value: "67 cm" },
  { label: "Hip Size", value: "95 cm" },
  { label: "Dress Size", value: "8" },
  { label: "Shoe Size", value: "9.5" },
  { label: "Bra Size", value: "12B" },
];

const videos = [
  {
    title: "Introduction Video",
    thumbnail: "/brand/search/profile/300x200.png",
  },
  { title: "Dermaveen", thumbnail: "/brand/search/profile/300x200.png" },
  {
    title: "Dsmile Campaign 2022",
    thumbnail: "/brand/search/profile/300x200.png",
  },
  { title: "Nude by Nature", thumbnail: "/brand/search/profile/300x200.png" },
  {
    title: "Brisbane City Council Campaign",
    thumbnail: "/brand/search/profile/300x200.png",
  },
  { title: "MCO Beauty 2023", thumbnail: "/brand/search/profile/300x200.png" },
];

const bio = `
Hello! I'm Aditi S, a passionate model, actor, and creator based in New South Wales, Australia. With over four years of experience in the industry, I've had the pleasure of working with both national and international brands, bringing their visions to life through my versatile skills and unique look.

My journey in the world of modeling and acting has been nothing short of extraordinary. From walking runways to starring in commercials, I've embraced every opportunity to grow and challenge myself. My ethnic ambiguity has been a great asset, allowing me to represent a wide range of characters and products.

When I'm not in front of the camera, you can find me practicing yoga, hiking through Australia's beautiful landscapes, or immersing myself in a good book. I'm also an advocate for healthy living, following a vegetarian and vegan lifestyle.

I believe in the power of authenticity and bringing genuine emotion to every project. Whether it's a high-fashion editorial or a heartwarming commercial, I strive to connect with the audience and tell a compelling story.

I'm always excited about new opportunities and collaborations. If you're looking for a dedicated, professional, and versatile talent for your next project, I'd love to hear from you!

Let's create something beautiful together!
`;

const followerTrendData = [
  { month: "Jan", followers: 3000 },
  { month: "Feb", followers: 3200 },
  { month: "Mar", followers: 3100 },
  { month: "Apr", followers: 3400 },
  { month: "May", followers: 3300 },
  { month: "Jun", followers: 3450 },
];

const genderSplitData = [
  { name: "Male", value: 45 },
  { name: "Female", value: 55 },
];

const ageDistributionData = [
  { age: "13-17", value: 5 },
  { age: "18-24", value: 25 },
  { age: "25-34", value: 35 },
  { age: "35-44", value: 20 },
  { age: "45-54", value: 10 },
  { age: "55+", value: 5 },
];

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--accent))",
  "hsl(var(--muted))",
  "hsl(var(--card))",
  "hsl(var(--popover))",
];

export default function InfluencerProfileComponent() {
  const [activeTab, setActiveTab] = useState("Portfolio");

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      <aside className="w-full md:w-1/3 p-4 border-r">
        <Card>
          <CardContent className="p-6">
            <div className="relative">
              <Avatar className="w-full h-auto aspect-square mb-4">
                <AvatarImage src="/brand/search/300x300.png" alt="Aditi S" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <Badge className="absolute top-2 right-2 bg-yellow-400 text-black">
                PRO
              </Badge>
            </div>
            <h1 className="text-2xl font-bold text-center mb-2">Aditi S</h1>
            <div className="flex justify-center items-center space-x-2 mb-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-semibold">5.0 (58 jobs completed)</span>
            </div>
            <div className="flex justify-center items-center text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span>New South Wales, Australia</span>
            </div>
            <div className="text-center text-muted-foreground mb-4">
              <p>Model, Actor, Creator</p>
              <p>3,446 Followers</p>
              <Badge variant="outline" className="mt-2">
                Active Talent
              </Badge>
            </div>
            <Button className="w-full mb-4">INVITE TO JOB</Button>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Heart className="h-5 w-5" />
              <span>3.4K</span>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <div>
                <h2 className="font-semibold mb-2">Aditi S Rates</h2>
                <h3 className="font-medium">Model</h3>
                <p className="text-sm">$120-250 per hour</p>
                <p className="text-sm">$1000-2000 per day</p>
                <p className="text-xs text-muted-foreground mt-1">
                  My rates are a guideline, they are flexible depending on
                  usage, hours, travel etc. :)
                </p>
              </div>
              <div>
                <h3 className="font-medium">Actor</h3>
                <p className="text-sm">$120-250 per hour</p>
                <p className="text-sm">$1500-3000 per day</p>
                <p className="text-xs text-muted-foreground mt-1">
                  My rates are a guideline, they are flexible depending on
                  usage, hours, location etc. :)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </aside>
      <main className="flex-1 p-4">
        <nav className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex flex-col items-center py-2 px-2 md:px-4 ${
                activeTab === tab.label ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              <tab.icon className="h-4 w-4 md:h-6 md:w-6 mb-1" />
              <span className="text-xs md:text-sm font-medium">
                {tab.label} {tab.count ? `(${tab.count})` : ""}
              </span>
            </button>
          ))}
        </nav>

        {activeTab === "Portfolio" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="relative group">
                <Image
                  src={`/brand/search/300x300.png`}
                  alt={`Portfolio image ${i + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                  <Heart className="text-white h-6 w-6" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Reviews" && (
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-semibold mb-2">{review.title}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <p>{review.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Features" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <td className="border-b border-gray-200 py-2 px-4 font-medium">
                      {feature.label}
                    </td>
                    <td className="border-b border-gray-200 py-2 px-4">
                      {feature.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "Video & Audio" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="relative group">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full aspect-video"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="text-white h-12 w-12" />
                </div>
                <p className="mt-2 text-sm font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Bio" && (
          <div className="prose max-w-none">
            {bio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {activeTab === "Analytics" && (
          <div className="space-y-8 p-8">
            <Card>
              <CardHeader>
                <CardTitle>Follower Trend</CardTitle>
                <CardDescription>
                  Monthly follower growth over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={followerTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="followers"
                        stroke={COLORS[0]}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Gender Split</CardTitle>
                  <CardDescription>
                    Distribution of followers by gender
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={genderSplitData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {genderSplitData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of followers by age group
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ageDistributionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="age" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="value" fill={COLORS[0]}>
                          {ageDistributionData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="font-semibold">{label}</p>
        {payload.map((pld, index) => (
          <p key={index} style={{ color: pld.color }}>
            {pld.name}: {pld.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};
