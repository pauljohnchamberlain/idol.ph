"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import BackButton from "@/app/components/BackButton";

export default function TaxDetailsSettings() {
  const [understood, setUnderstood] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Settings</h1>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center mb-6">
            <BackButton />
            <div>
              <h2 className="text-xl font-semibold">Tax Details</h2>
              <p className="text-gray-500">Update your Tax Details</p>
            </div>
          </div>

          <p className="mb-6 text-gray-700">
            If you're earning money through theright.fit, it's your
            responsibility to understand your tax obligations in your country.
            Providing your tax details will allow theright.fit to include this
            information on any invoices or payment requests generated through
            the platform.
          </p>

          <form>
            <div className="space-y-6">
              <div>
                <Label htmlFor="businessName">Business or Brand Name</Label>
                <Input
                  id="businessName"
                  className="mt-1"
                  placeholder="Enter your business or brand name"
                />
                <p className="mt-1 text-sm text-gray-500">
                  This could be your name, your registered business name, your
                  brand, or your social media handle
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="businessNumber">Business Number</Label>
                  <Input
                    id="businessNumber"
                    className="mt-1"
                    placeholder="Enter your business number"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Your registered business number, if you have one
                  </p>
                </div>
                <div>
                  <Label htmlFor="taxNumber">Tax Number</Label>
                  <Input
                    id="taxNumber"
                    className="mt-1"
                    placeholder="00000000000"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Your registered number for tax purposes
                  </p>
                </div>
              </div>

              <div>
                <Label htmlFor="businessAddress">Business Address</Label>
                <Input
                  id="businessAddress"
                  className="mt-1"
                  placeholder="Enter your business address"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="understand"
                  checked={understood}
                  onCheckedChange={setUnderstood}
                />
                <Label htmlFor="understand">
                  I understand the responsibility I have for tax purpose
                </Label>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline">BACK</Button>
                <Button>SAVE DETAILS</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
