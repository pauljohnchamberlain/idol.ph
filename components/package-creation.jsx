"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Info } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export function PackageCreation() {
  const [step, setStep] = useState(1);
  const [uploads, setUploads] = useState([]);
  const [otherInclusions, setOtherInclusions] = useState(["", "", ""]);
  const [contentUsage, setContentUsage] = useState("with-rights");
  const [boostingOption, setBoostingOption] = useState("offer-boosting");
  const [usageRights, setUsageRights] = useState({
    social: false,
    online: false,
    offline: false,
  });
  const [additionalInfoOpen, setAdditionalInfoOpen] = useState(false);
  const [additionalPromotionOpen, setAdditionalPromotionOpen] = useState(false);
  const [contentPromotion, setContentPromotion] = useState("will-post");
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");
  const [deliverable, setDeliverable] = useState("");
  const [packageDescription, setPackageDescription] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploads((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeUpload = (index) => {
    setUploads((prev) => prev.filter((_, i) => i !== index));
  };

  const handleOtherInclusionChange = (index, value) => {
    setOtherInclusions((prev) =>
      prev.map((item, i) => (i === index ? value : item)),
    );
  };

  const platformOptions = {
    Instagram: [
      "Reel",
      "Story (Video)",
      "Story (Image)",
      "Post (Video)",
      "Post (Image)",
      "Carousel (Video)",
      "Carousel (Image)",
    ],
    Facebook: [
      "Reel",
      "Story (Video)",
      "Story (Image)",
      "Post (Video)",
      "Post (Image)",
      "Carousel (Video)",
      "Carousel (Image)",
    ],
    TikTok: ["Video", "Carousel", "Story", "Live"],
    Youtube: ["Video", "Live", "Shorts"],
    Other: [],
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {step === 1 && "Describe your package"}
          {step === 2 && "Upload work samples"}
          {step === 3 && "Now let's define your package terms"}
        </CardTitle>
        <Progress value={(step / 3) * 100} className="w-full" />
        <p className="text-sm text-muted-foreground">Step {step} of 3</p>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Describe your package
                </h2>
                <Label htmlFor="package-description">Package Description</Label>
                <Textarea
                  id="package-description"
                  value={packageDescription}
                  onChange={(e) => setPackageDescription(e.target.value)}
                  placeholder="Enter your package description"
                  className="mt-1"
                />
                <div className="text-right text-sm text-muted-foreground">
                  {packageDescription.length}/200
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">
                  What's included in your package?
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-700">
                      Keep it short and simple
                    </h4>
                    <p className="text-sm text-blue-600">
                      By keeping your package simple and targeted to one
                      platform, you can refine your message and cater to
                      specific brands. Start strong with a focused package, then
                      impress the brand with your expertise.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Content promotion
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`p-4 border rounded-md cursor-pointer ${
                      contentPromotion === "will-post"
                        ? "bg-blue-50 border-blue-500"
                        : "bg-white"
                    }`}
                    onClick={() => setContentPromotion("will-post")}
                  >
                    <h4 className="font-semibold">You will post content</h4>
                    <p className="text-sm text-gray-600">
                      You will post on chosen platform/s
                    </p>
                  </div>
                  <div
                    className={`p-4 border rounded-md cursor-pointer ${
                      contentPromotion === "wont-post"
                        ? "bg-blue-50 border-blue-500"
                        : "bg-white"
                    }`}
                    onClick={() => setContentPromotion("wont-post")}
                  >
                    <h4 className="font-semibold">You won't post content</h4>
                    <p className="text-sm text-gray-600">
                      The brand will receive the assets
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Platform</h3>
              <div className="flex space-x-4">
                {["Instagram", "Facebook", "TikTok", "Youtube", "Other"].map(
                  (platform) => (
                    <div
                      key={platform}
                      className={`p-4 border rounded-md cursor-pointer ${
                        selectedPlatform === platform
                          ? "bg-blue-50 border-blue-500"
                          : "bg-white"
                      }`}
                      onClick={() => {
                        setSelectedPlatform(platform);
                        setDeliverable("");
                      }}
                    >
                      {platform === "Instagram" && (
                        <FaInstagram className="w-8 h-8 mb-2 mx-auto" />
                      )}
                      {platform === "Facebook" && (
                        <FaFacebookF className="w-8 h-8 mb-2 mx-auto" />
                      )}
                      {platform === "TikTok" && (
                        <FaTiktok className="w-8 h-8 mb-2 mx-auto" />
                      )}
                      {platform === "Youtube" && (
                        <FaYoutube className="w-8 h-8 mb-2 mx-auto" />
                      )}
                      {platform === "Other" && (
                        <BsThreeDots className="w-8 h-8 mb-2 mx-auto" />
                      )}
                      <p className="text-sm text-center">{platform}</p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Deliverable</h3>
              {selectedPlatform !== "Other" ? (
                <Select value={deliverable} onValueChange={setDeliverable}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select post type" />
                  </SelectTrigger>
                  <SelectContent>
                    {platformOptions[selectedPlatform].map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <div>
                  <Input
                    placeholder="Describe the platform and post type"
                    value={deliverable}
                    onChange={(e) => setDeliverable(e.target.value)}
                  />
                  <Button
                    className="mt-2"
                    onClick={() =>
                      console.log("Deliverable confirmed:", deliverable)
                    }
                  >
                    CONFIRM DELIVERABLE
                  </Button>
                </div>
              )}
              <p className="text-sm text-muted-foreground mt-2">
                You can specify detailed content requirements once the campaign
                has been submitted
              </p>
            </div>

            {/* Rest of the component remains unchanged */}
          </div>
        )}
        {/* Step 2 and 3 remain unchanged */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={() => {
            if (step < 3) {
              setStep((prev) => prev + 1);
            } else {
              // Handle form submission
              console.log("Form submitted");
            }
          }}
        >
          {step === 3 ? "Publish" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
}
