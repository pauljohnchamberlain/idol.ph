"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BackButton from "@/app/components/BackButton";

export default function Component() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "Fashion",
    "Mummy & Parenting",
    "Food",
    "Beauty",
    "Luxury",
    "Business & Technology",
    "Travel",
    "Health & Fitness",
    "Home & Garden",
    "Eco & Sustainability",
    "Music",
    "Content Creation",
    "General Lifestyle",
    "Celebrity",
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : prev.length < 4
          ? [...prev, category]
          : prev,
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-serif mb-8">Settings</h1>
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <BackButton />
            <div>
              <h2 className="text-xl font-semibold">Creator Categories</h2>
              <p className="text-sm text-gray-500">
                Set your creator categories so we can match you to campaigns
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">
              Select the categories that best describe what you do
            </h3>
            <p className="text-sm text-gray-500 mb-4">Select up to four</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategories.includes(category)
                      ? "default"
                      : "outline"
                  }
                  onClick={() => toggleCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline">BACK</Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
              SAVE DETAILS
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
