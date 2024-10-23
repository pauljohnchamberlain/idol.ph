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
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Camera, Heart, HelpCircle } from "lucide-react";

export function OnboardingFlowComponent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    region: "",
    categories: [],
    socials: {
      instagram: false,
      tiktok: false,
      youtube: false,
    },
    profilePicture: null,
    paymentMethod: null,
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Personal Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  onValueChange={(value) => handleInputChange("gender", value)}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  onChange={(e) =>
                    handleInputChange("dateOfBirth", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  onValueChange={(value) => handleInputChange("country", value)}
                >
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="region">Region</Label>
                <Select
                  onValueChange={(value) => handleInputChange("region", value)}
                >
                  <SelectTrigger id="region">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north">North</SelectItem>
                    <SelectItem value="south">South</SelectItem>
                    <SelectItem value="east">East</SelectItem>
                    <SelectItem value="west">West</SelectItem>
                    {/* Add more regions as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Creator categories</h2>
            <p className="text-sm text-muted-foreground">
              Select the categories that best describe what you do
            </p>
            <div className="flex flex-wrap gap-2">
              {[
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
              ].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      categories: prev.categories.includes(category)
                        ? prev.categories.filter((c) => c !== category)
                        : [...prev.categories, category],
                    }));
                  }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Connect your socials</h2>
            <p className="text-sm text-muted-foreground">
              Your follower count will be displayed on your profile. Your
              analytics will integrate into the creator tools so you can better
              showcase yourself.
            </p>
            {["Instagram", "TikTok", "Youtube"].map((social) => (
              <Card key={social}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-8 h-8 rounded-full bg-${social.toLowerCase()}`}
                    ></div>
                    <span>{social}</span>
                  </div>
                  <Button
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        socials: {
                          ...prev.socials,
                          [social.toLowerCase()]:
                            !prev.socials[social.toLowerCase()],
                        },
                      }))
                    }
                  >
                    {formData.socials[social.toLowerCase()]
                      ? "Connected"
                      : "Connect"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Upload profile picture</h2>
            <p className="text-sm text-muted-foreground">
              This will be the first picture a client sees of you on the
              platform, so choose carefully.
            </p>
            <div className="flex items-center justify-center w-32 h-32 bg-muted rounded-lg">
              {formData.profilePicture ? (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <Camera className="w-8 h-8 text-muted-foreground" />
              )}
            </div>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  profilePicture: e.target.files[0],
                }))
              }
            />
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>A jpeg, or png file.</li>
              <li>Maximum size 10MB.</li>
              <li>Minimum dimension 300x300 pixels.</li>
              <li>Your best shot - no logos or branding.</li>
            </ul>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Connect a payment method</h2>
            <p className="text-sm text-muted-foreground">
              Connect now so you can be paid automatically after each campaign.
            </p>
            <Card>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#6772E5] rounded-full"></div>
                  <span>stripe</span>
                </div>
                <Button
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      paymentMethod: "stripe",
                    }))
                  }
                >
                  {formData.paymentMethod === "stripe"
                    ? "Connected"
                    : "Connect"}
                </Button>
              </CardContent>
            </Card>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold">What you should know</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Stripe is a payment gateway similar to PayPal.</li>
                <li>
                  We will redirect you to the Stripe sign up page which you will
                  need to complete.
                </li>
                <li>
                  Once you complete the sign up process you will be redirected
                  back here so you can continue completing your profile.
                </li>
                <li>
                  If you are having problems linking your bank account please
                  contact our support team on contact@theright.fit and we will
                  be happy to assist you.
                </li>
              </ul>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="relative w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <div className="absolute -top-1 -left-1 w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
                <HelpCircle className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold">
              Thanks for updating your profile!
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              Keeping your profile up-to-date helps us match you with the best
              jobs on theright.fit
            </p>
            <p className="text-sm text-muted-foreground">
              - why not apply for jobs now?
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {step < 6 && (
        <>
          <div className="flex items-center justify-between mb-6">
            {step > 1 && (
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <div className="text-sm">Step {step} of 5</div>
            {step < 5 && (
              <Button variant="ghost" onClick={handleNext}>
                Skip
              </Button>
            )}
          </div>
          <div className="w-full bg-gray-200 h-2 mb-6 rounded-full">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>
        </>
      )}
      {renderStep()}
      <div className="mt-6">
        <Button className="w-full" onClick={handleNext}>
          {step === 5 ? "Finish" : step === 6 ? "GET STARTED" : "Next"}
        </Button>
      </div>
    </div>
  );
}
