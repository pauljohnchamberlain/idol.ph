"use client";

import { useState, useEffect } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Plus, X, Info, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { DialogTitle } from "@/components/ui/dialog";

export default function PackageCreationModal() {
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

  useEffect(() => {
    setDeliverable("");
  }, [selectedPlatform]);

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

  return (
    <>
      <DialogTitle className="sr-only">Create Package</DialogTitle>
      <Card className="w-full mx-auto max-h-[90vh] overflow-y-auto bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {step === 1 && "Describe your package"}
            {step === 2 && "Upload work samples"}
            {step === 3 && "Now let's define your package terms"}
          </CardTitle>
          <Progress value={(step / 3) * 100} className="w-full" />
          <p className="text-sm text-muted-foreground">Step {step} of 3</p>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          {step === 1 && (
            <div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Describe your package
                  </h2>
                  <Label htmlFor="package-description">
                    Package Description
                  </Label>
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
                        specific brands. Start strong with a focused package,
                        then impress the brand with your expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Platform</h3>
                <div className="flex space-x-4">
                  {[
                    { name: "Instagram", icon: FaInstagram },
                    { name: "Facebook", icon: FaFacebookF },
                    { name: "TikTok", icon: FaTiktok },
                    { name: "Youtube", icon: FaYoutube },
                    { name: "Other", icon: BsThreeDots },
                  ].map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className={`p-4 border rounded-md cursor-pointer ${
                        selectedPlatform === name
                          ? "bg-blue-50 border-blue-500"
                          : "bg-white"
                      }`}
                      onClick={() => setSelectedPlatform(name)}
                    >
                      <Icon className="w-8 h-8 mb-2 mx-auto" />
                      <p className="text-sm text-center">{name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Deliverable</h3>
                {selectedPlatform !== "Other" ? (
                  <Select value={deliverable} onValueChange={setDeliverable}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select deliverable" />
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
                  </div>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  You can specify detailed content requirements once the
                  campaign has been submitted
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Content usage</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Content usage includes any use of content by the brand
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`p-4 border rounded-md cursor-pointer ${
                      contentUsage === "with-rights"
                        ? "bg-blue-50 border-blue-500"
                        : "bg-white"
                    }`}
                    onClick={() => setContentUsage("with-rights")}
                  >
                    <h4 className="font-semibold">With usage rights</h4>
                    <p className="text-sm text-gray-600">
                      Content will be used by the brand
                    </p>
                  </div>
                  <div
                    className={`p-4 border rounded-md cursor-pointer ${
                      contentUsage === "no-rights"
                        ? "bg-blue-50 border-blue-500"
                        : "bg-white"
                    }`}
                    onClick={() => setContentUsage("no-rights")}
                  >
                    <h4 className="font-semibold">
                      Brand will not have usage rights
                    </h4>
                    <p className="text-sm text-gray-600">
                      You will have usage rights
                    </p>
                  </div>
                </div>
                {contentUsage === "with-rights" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label>Term</Label>
                      <Select defaultValue="1-week">
                        <SelectTrigger>
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-week">1 Week</SelectItem>
                          <SelectItem value="2-weeks">2 Weeks</SelectItem>
                          <SelectItem value="1-month">1 Month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Where do you want to use the content?</Label>
                      <p className="text-sm text-gray-600 mb-2">
                        You can select multiple
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="social"
                            checked={usageRights.social}
                            onCheckedChange={(checked) =>
                              setUsageRights((prev) => ({
                                ...prev,
                                social: checked,
                              }))
                            }
                          />
                          <Label htmlFor="social">Social</Label>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">
                          This includes but is not limited to Instagram, TikTok
                          etc...
                        </p>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="online"
                            checked={usageRights.online}
                            onCheckedChange={(checked) =>
                              setUsageRights((prev) => ({
                                ...prev,
                                online: checked,
                              }))
                            }
                          />
                          <Label htmlFor="online">Online</Label>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">
                          This could be on websites etc...
                        </p>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="offline"
                            checked={usageRights.offline}
                            onCheckedChange={(checked) =>
                              setUsageRights((prev) => ({
                                ...prev,
                                offline: checked,
                              }))
                            }
                          />
                          <Label htmlFor="offline">Offline</Label>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">
                          This includes but is not limited to billboards, train
                          ads etc...
                        </p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="usage-details">
                        Usage details (optional)
                      </Label>
                      <Textarea
                        id="usage-details"
                        placeholder="Enter usage details"
                      />
                      <div className="text-right text-sm text-gray-600">
                        0/250
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Boosting</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Boosting includes any paid amplification of a creator's post
                  by a brand
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`p-4 border rounded-md cursor-pointer ${
                      boostingOption === "offer-boosting"
                        ? "bg-blue-50 border-blue-500"
                        : "bg-white"
                    }`}
                    onClick={() => setBoostingOption("offer-boosting")}
                  >
                    <h4 className="font-semibold">Offer boosting option</h4>
                    <p className="text-sm text-gray-600">
                      Client can boost content
                    </p>
                  </div>
                  <div
                    className={`p-4 border rounded-md cursor-pointer ${
                      boostingOption === "no-boosting"
                        ? "bg-blue-50 border-blue-500"
                        : "bg-white"
                    }`}
                    onClick={() => setBoostingOption("no-boosting")}
                  >
                    <h4 className="font-semibold">
                      Don't offer boosting option
                    </h4>
                    <p className="text-sm text-gray-600">
                      Client cannot boost content
                    </p>
                  </div>
                </div>
                {boostingOption === "offer-boosting" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label>Boost window</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Please select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-week">1 Week</SelectItem>
                          <SelectItem value="2-weeks">2 Weeks</SelectItem>
                          <SelectItem value="1-month">1 Month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="boosting-details">
                        Boosting details (optional)
                      </Label>
                      <Textarea
                        id="boosting-details"
                        placeholder="On what platforms and for how long will content be boosted?"
                      />
                      <div className="text-right text-sm text-gray-600">
                        0/250
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="mb-4">
                You can upload up to three contents. Minimum 1 required. (
                {uploads.length}/3)
              </p>
              <div className="grid grid-cols-2 gap-4">
                {uploads.map((upload, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={upload}
                      alt={`Upload ${index + 1}`}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => removeUpload(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {uploads.length < 3 && (
                  <label className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                      accept="image/*"
                    />
                    <Plus className="h-6 w-6 text-gray-400" />
                  </label>
                )}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Price and Payment
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Select defaultValue="AUD">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AUD">AUD</SelectItem>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="number" placeholder="0" className="flex-grow" />
                </div>
                <p className="mb-2">What payment methods do you accept?</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="bank-transfer">Bank transfer</Label>
                    <Switch id="bank-transfer" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="stripe">Payment on idol.ph (Stripe)</Label>
                    <Switch id="stripe" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Delivery and Revisions
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="delivery-days">
                      How many days can you deliver the content?
                    </Label>
                    <Select defaultValue="1">
                      <SelectTrigger id="delivery-days">
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                          <SelectItem key={day} value={day.toString()}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="revisions">
                      Allowed number of Revisions
                    </Label>
                    <Select defaultValue="1">
                      <SelectTrigger id="revisions">
                        <SelectValue placeholder="Select revisions" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((revision) => (
                          <SelectItem
                            key={revision}
                            value={revision.toString()}
                          >
                            {revision}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="allowed" />
                    <Label htmlFor="allowed">Or display "Allowed"</Label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Other Inclusions</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Add services that are not defined in the deliverables such as
                  pre production processes (script writing etc.)
                </p>
                {otherInclusions.map((inclusion, index) => (
                  <div key={index} className="mb-2">
                    <Input
                      value={inclusion}
                      onChange={(e) =>
                        handleOtherInclusionChange(index, e.target.value)
                      }
                      placeholder="Add inclusion here"
                      className="w-full"
                    />
                    <p className="text-xs text-right text-muted-foreground">
                      {inclusion.length}/30
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
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
    </>
  );
}
