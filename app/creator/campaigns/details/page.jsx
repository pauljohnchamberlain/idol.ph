"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
import { MoreVertical, ArrowLeft, Heart, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This would typically come from your API or props
const campaignData = {
  id: "1",
  title: "Make It Bearable!",
  brand: "Bearable",
  paymentMethod: "Off-platform",
  website: "https://bearable.shop/",
  instagram: "https://www.instagram.com/shop_bearable/",
  image: "/placeholder.svg?height=300&width=600&text=Bearable+%26+WIN+BIG!",
  productValue: 40.0,
  currency: "AUD",
  minFollowers: 2000,
  applicationCloseDate: "November 15, 2024",
  idealCreator: {
    location: "Australia",
    platforms: ["Instagram: Nano"],
    categories: [
      "Fashion",
      "Mummy & Parenting",
      "Beauty",
      "Business & Technology",
      "Health & Fitness",
      "Content Creation",
      "General Lifestyle",
      "Celebrity",
    ],
    ageRange: "18 - 65",
    gender: "Any",
    language: "English",
  },
  contentNeeded: {
    type: "Reel",
    description:
      "Show us how using the Bearable Twig, will make your most unbearable moments in life, bearable!",
  },
  creatorResponsibilities: ["Creator will post deliverables"],
  usage: ["Social", "Online"],
  description:
    "This campaign is designed to highlight the use of the bearable twig, a premium back scratcher. We want YOU to post videos of your most Unbearable moments! Feel free to be creative here, maybe its the mother-in-law at family dinner, or being stuck in traffic!",
};

export default function CampaignDetails() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveCampaign = () => {
    setIsSaved(!isSaved);
    // Add logic to save the campaign
  };

  const handleReportCampaign = () => {
    // Add logic to report the campaign
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-4">
        <Link href="/creator/campaigns">
          <Button variant="ghost" className="">
            <ArrowLeft className="mr-2 h-4 w-4" />
            CAMPAIGNS
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader className="relative p-0">
          <img
            src={campaignData.image}
            alt={campaignData.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              onClick={handleSaveCampaign}
              className="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
            >
              <Heart
                className={`h-4 w-4 ${isSaved ? "fill-current text-red-500" : ""}`}
              />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <CardTitle className="text-2xl mb-2">
                {campaignData.title}
              </CardTitle>
              <CardDescription className="text-lg mb-2">
                {campaignData.brand}
              </CardDescription>
              <p className="text-sm font-medium">
                Product valued at {campaignData.currency}{" "}
                {campaignData.productValue.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">
                Payment Method: {campaignData.paymentMethod}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleReportCampaign}>
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Report Campaign
                  </DropdownMenuItem>
                  <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                  <DropdownMenuItem>Delete Campaign</DropdownMenuItem>
                  <DropdownMenuItem>View Analytics</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold mb-2">Brand</h3>
              <p>{campaignData.brand}</p>
              <Link
                href={campaignData.website}
                className="text-blue-600 hover:underline block mt-1"
              >
                {campaignData.website}
              </Link>
              <div className="flex space-x-4 mt-2">
                <Link
                  href={campaignData.instagram || "#"}
                  className="text-gray-400 hover:text-gray-800"
                >
                  <FaInstagram className="w-7 h-7" />
                </Link>
                <Link
                  href={campaignData.facebook || "#"}
                  className="text-gray-400 hover:text-gray-800"
                >
                  <FaFacebookF className="w-7 h-7" />
                </Link>
                <Link
                  href={campaignData.tiktok || "#"}
                  className="text-gray-400 hover:text-gray-800"
                >
                  <FaTiktok className="w-7 h-7" />
                </Link>
                <Link
                  href={campaignData.youtube || "#"}
                  className="text-gray-400 hover:text-gray-800"
                >
                  <FaYoutube className="w-7 h-7" />
                </Link>
                <Link
                  href={campaignData.linkedin || "#"}
                  className="text-gray-400 hover:text-gray-800"
                >
                  <FaLinkedinIn className="w-7 h-7" />
                </Link>
                <Link
                  href={campaignData.snapchat || "#"}
                  className="text-gray-400 hover:text-gray-800"
                >
                  <FaSnapchatGhost className="w-7 h-7" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Campaign Details</h3>
              <p className="font-bold text-lg text-primary">
                Min followers: {campaignData.minFollowers.toLocaleString()}
              </p>
              <p>Application close date: {campaignData.applicationCloseDate}</p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Campaign Description</h3>
            <p>{campaignData.description}</p>
          </div>

          <Separator className="my-4" />

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Our ideal creator</h3>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Location</TableCell>
                  <TableCell>{campaignData.idealCreator.location}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Platforms</TableCell>
                  <TableCell>
                    {campaignData.idealCreator.platforms.join(", ")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Categories</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {campaignData.idealCreator.categories.map(
                        (category, index) => (
                          <Badge key={index} variant="outline">
                            {category}
                          </Badge>
                        ),
                      )}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Age Range</TableCell>
                  <TableCell>{campaignData.idealCreator.ageRange}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gender</TableCell>
                  <TableCell>{campaignData.idealCreator.gender}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Language</TableCell>
                  <TableCell>{campaignData.idealCreator.language}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <Separator className="my-4" />

          <div className="mb-4">
            <h3 className="font-semibold mb-2">The content we need</h3>
            <Badge className="mb-2">{campaignData.contentNeeded.type}</Badge>
            <p>{campaignData.contentNeeded.description}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Creator responsibilities</h3>
            <ul className="list-disc pl-5">
              {campaignData.creatorResponsibilities.map(
                (responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ),
              )}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Usage</h3>
            <div className="flex gap-2">
              {campaignData.usage.map((use, index) => (
                <Badge key={index} variant="outline">
                  {use}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handleSaveCampaign}
            className="flex items-center"
          >
            <Heart
              className={`mr-2 h-4 w-4 ${isSaved ? "fill-current text-red-500" : ""}`}
            />
            {isSaved ? "Saved" : "Save Campaign"}
          </Button>
          <Button>VIEW TERMS AND APPLY</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
