import React from "react";
import { Button } from "@/components/ui/button";

export default function MediaKitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Media Kits</h1>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          CREATE MEDIA KIT
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Views</h3>
          <p className="text-4xl font-bold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Interactions</h3>
          <p className="text-4xl font-bold">0</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Media Kits</h2>
      <p className="text-gray-600">
        You haven't created a Media Kit yet. Create a Media Kit to start
        sharing.
      </p>
    </div>
  );
}
