"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BackButton from "@/app/components/BackButton";
import Loading from "@/components/Loading";
export default function PersonalInfoForm() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (status === "authenticated" && session) {
      fetchCreatorData();
    }
  }, [status, session]);

  const fetchCreatorData = async () => {
    try {
      const response = await fetch("/api/creator/getcreator", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch creator data");
      }

      const data = await response.json();
      if (data.success && data.creator) {
        setEmail(data.creator.email);
        setDateOfBirth(
          data.creator.dateOfBirth
            ? new Date(data.creator.dateOfBirth).toISOString().split("T")[0]
            : "",
        );
        setGender(data.creator.gender || "");
      }
    } catch (error) {
      console.error("Error fetching creator data:", error);
      setNotification({
        type: "error",
        message: "Failed to fetch creator data",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = { dateOfBirth, gender };
      console.log("Sending request data:", requestData);

      const response = await fetch("/api/creator/profileupdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      if (data.success) {
        setNotification({
          type: "success",
          message: "Personal info updated successfully",
        });
      } else {
        throw new Error(data.message || "Failed to update personal info");
      }
    } catch (error) {
      console.error("Error updating personal info:", error);
      setNotification({
        type: "error",
        message: error.message || "Failed to update personal info",
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-[calc(100vh-65px)] bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center mb-6">
          <BackButton />
          <div>
            <h1 className="text-xl font-semibold">Personal Info</h1>
            <p className="text-sm text-gray-500">
              Edit your email and personal info
            </p>
          </div>
        </div>
        {notification && (
          <div
            className={`mb-4 p-2 rounded ${notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {notification.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center mt-1">
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="dateOfBirth">
                Date of Birth <span className="text-red-500">*</span>
              </Label>
              <Input
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Date of Birth will not be displayed publicly
              </p>
            </div>
            <div>
              <Label htmlFor="gender">
                Gender <span className="text-red-500">*</span>
              </Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500 mt-1">
                Gender will not be displayed publicly
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <span className="text-red-500">*</span> Indicates required field
          </p>
          <div className="flex justify-between mt-6">
            <Button type="button" variant="outline">
              BACK
            </Button>
            <Button
              type="submit"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              SAVE DETAILS
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
