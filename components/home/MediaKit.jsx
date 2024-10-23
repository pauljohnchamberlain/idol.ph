import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Instagram, Tiktok, ChevronDown, Check } from "lucide-react";

export default function MediaKit() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-xl max-w-6xl mx-auto">
      <Image src="/media-kit.png" alt="Media Kit" width={500} height={500} />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-500 mb-2">
            MEDIA KIT
          </h3>
          <h1 className="text-3xl font-bold mb-4">
            Pitch like a pro with Media Kits
          </h1>
          <p className="mb-6">
            Customise the content you want to showcase, to the brands you want
            to work with. Create and send unlimited media kits to reach more
            brands.
          </p>
          <Button variant="outline" className="mb-6">
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
}
