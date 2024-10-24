"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BackButton from "@/app/components/BackButton";

export default function SettingsPage() {
  const [email, setEmail] = useState("pauljohnchamberlain@gmail.com");
  const [dateOfBirth, setDateOfBirth] = useState("27-10-1985");
  const [gender, setGender] = useState("Male");

  return (
    <div className="min-h-screen bg-white p-6">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="flex items-center mb-6">
            <BackButton />
            <h2 className="text-xl font-semibold">Personal Info</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Edit your email and personal info
          </p>

          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <Button variant="secondary" className="mb-6">
              UPDATE
            </Button>

            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date of Birth<span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                id="dob"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                Date of Birth will not be displayed publicly
              </p>
            </div>

            <div className="mb-6">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Gender<span className="text-red-500">*</span>
              </label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500 mt-1">
                Gender will not be displayed publicly
              </p>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              <span className="text-red-500">*</span> Indicates required field
            </p>

            <div className="flex justify-between">
              <Button variant="outline">BACK</Button>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                SAVE DETAILS
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
