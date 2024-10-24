import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Globe, MapPin } from "lucide-react";

export default function CreatorStep({ formData, updateFormData }) {
  // Add missing audienceSizes array
  const audienceSizes = [
    {
      label: "Nano Influencers",
      value: "nano",
      description: "Less than 10,000 followers",
    },
    {
      label: "Micro Influencers",
      value: "micro",
      description: "10,001-60,000 followers",
    },
    {
      label: "Mid-tier Influencers",
      value: "midTier",
      description: "60,001-200,000 followers",
    },
    {
      label: "Macro Influencers",
      value: "macro",
      description: "More than 200,000 followers",
    },
  ];

  return (
    <CardContent className="space-y-6">
      <div>
        <CardTitle className="text-2xl mb-2">
          Tell us about your ideal creator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Add details here about what you want your creator to be like
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label htmlFor="platform" className="text-base font-semibold">
            Social platform
          </Label>
          <Select
            value={formData.platform}
            onValueChange={(value) => updateFormData("platform", value)}
          >
            <SelectTrigger id="platform">
              <SelectValue placeholder="Select a platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Instagram">Instagram</SelectItem>
              <SelectItem value="TikTok">TikTok</SelectItem>
              <SelectItem value="YouTube">YouTube</SelectItem>
              <SelectItem value="Facebook">Facebook</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-base font-semibold">
            What size audience should your creator have on this platform?
          </Label>
          <p className="text-sm text-muted-foreground mb-2">
            You can select multiple
          </p>
          {audienceSizes.map((size) => (
            <div key={size.value} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={size.value}
                checked={formData.audienceSize.includes(size.value)}
                onCheckedChange={(checked) => {
                  const newSizes = checked
                    ? [...formData.audienceSize, size.value]
                    : formData.audienceSize.filter((s) => s !== size.value);
                  updateFormData("audienceSize", newSizes);
                }}
              />
              <Label htmlFor={size.value}>
                <span className="font-medium">{size.label}</span>
                <span className="text-sm text-muted-foreground ml-2">
                  {size.description}
                </span>
              </Label>
            </div>
          ))}
        </div>
        <div>
          <Label className="text-base font-semibold mb-2 block">
            Engagement
          </Label>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Max Engagement</span>
            <span>Max Reach</span>
          </div>
          <Slider
            value={[formData.engagement]}
            onValueChange={(value) => updateFormData("engagement", value[0])}
            max={100}
            step={1}
          />
        </div>
        <div>
          <Label className="text-base font-semibold mb-2 block">Location</Label>
          <RadioGroup
            value={formData.location}
            onValueChange={(value) => updateFormData("location", value)}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2 border rounded-md p-4 flex-1">
              <RadioGroupItem value="anywhere" id="anywhere" />
              <Label htmlFor="anywhere">
                <Globe className="w-4 h-4 inline-block mr-2" />
                Create from anywhere
              </Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-4 flex-1">
              <RadioGroupItem value="specific" id="specific" />
              <Label htmlFor="specific">
                <MapPin className="w-4 h-4 inline-block mr-2" />
                Specific Location
              </Label>
            </div>
          </RadioGroup>
        </div>
        {formData.location === "specific" && (
          <div>
            <Checkbox
              id="specificAddress"
              checked={!!formData.specificAddress}
              onCheckedChange={(checked) =>
                updateFormData("specificAddress", checked ? " " : "")
              }
            />
            <Label htmlFor="specificAddress" className="ml-2">
              I need the creator to visit a specific address
            </Label>
            {formData.specificAddress && (
              <Input
                placeholder="Enter Address"
                value={formData.specificAddress}
                onChange={(e) =>
                  updateFormData("specificAddress", e.target.value)
                }
                className="mt-2"
              />
            )}
          </div>
        )}
        <div>
          <Label className="text-base font-semibold mb-2 block">
            Creator Persona
          </Label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="creatorGender">Gender (optional)</Label>
              <Select
                value={formData.creatorPersona.gender}
                onValueChange={(value) =>
                  updateFormData("creatorPersona", {
                    ...formData.creatorPersona,
                    gender: value,
                  })
                }
              >
                <SelectTrigger id="creatorGender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any">Any</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Non-binary">Non-binary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="creatorAgeMin">Age (optional)</Label>
              <div className="flex items-center space-x-2">
                <Select
                  value={formData.creatorPersona.ageRange[0]}
                  onValueChange={(value) =>
                    updateFormData("creatorPersona", {
                      ...formData.creatorPersona,
                      ageRange: [value, formData.creatorPersona.ageRange[1]],
                    })
                  }
                >
                  <SelectTrigger id="creatorAgeMin">
                    <SelectValue placeholder="Min" />
                  </SelectTrigger>
                  <SelectContent>
                    {["18", "25", "35", "45", "55", "65+"].map((age) => (
                      <SelectItem key={age} value={age}>
                        {age}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span>to</span>
                <Select
                  value={formData.creatorPersona.ageRange[1]}
                  onValueChange={(value) =>
                    updateFormData("creatorPersona", {
                      ...formData.creatorPersona,
                      ageRange: [formData.creatorPersona.ageRange[0], value],
                    })
                  }
                >
                  <SelectTrigger id="creatorAgeMax">
                    <SelectValue placeholder="Max" />
                  </SelectTrigger>
                  <SelectContent>
                    {["18", "25", "35", "45", "55", "65+"].map((age) => (
                      <SelectItem key={age} value={age}>
                        {age}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="creatorLanguage">Language (optional)</Label>
              <Select
                value={formData.creatorPersona.language}
                onValueChange={(value) =>
                  updateFormData("creatorPersona", {
                    ...formData.creatorPersona,
                    language: value,
                  })
                }
              >
                <SelectTrigger id="creatorLanguage">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="Chinese">Chinese</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div>
          <Label className="text-base font-semibold mb-2 block">
            Target Audience
          </Label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="targetCountry">Country (optional)</Label>
              <Select
                value={formData.targetAudience.country}
                onValueChange={(value) =>
                  updateFormData("targetAudience", {
                    ...formData.targetAudience,
                    country: value,
                  })
                }
              >
                <SelectTrigger id="targetCountry">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                  <SelectItem value="AU">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="targetState">State (optional)</Label>
              <Select
                value={formData.targetAudience.state}
                onValueChange={(value) =>
                  updateFormData("targetAudience", {
                    ...formData.targetAudience,
                    state: value,
                  })
                }
              >
                <SelectTrigger id="targetState">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NY">New York</SelectItem>
                  <SelectItem value="CA">California</SelectItem>
                  <SelectItem value="TX">Texas</SelectItem>
                  <SelectItem value="FL">Florida</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <Label htmlFor="targetGender">Gender (optional)</Label>
              <Select
                value={formData.targetAudience.gender}
                onValueChange={(value) =>
                  updateFormData("targetAudience", {
                    ...formData.targetAudience,
                    gender: value,
                  })
                }
              >
                <SelectTrigger id="targetGender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any">Any</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Non-binary">Non-binary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="targetAgeMin">Age (optional)</Label>
              <div className="flex items-center space-x-2">
                <Select
                  value={formData.targetAudience.ageRange[0]}
                  onValueChange={(value) =>
                    updateFormData("targetAudience", {
                      ...formData.targetAudience,
                      ageRange: [value, formData.targetAudience.ageRange[1]],
                    })
                  }
                >
                  <SelectTrigger id="targetAgeMin">
                    <SelectValue placeholder="Min" />
                  </SelectTrigger>
                  <SelectContent>
                    {["18", "25", "35", "45", "55", "65+"].map((age) => (
                      <SelectItem key={age} value={age}>
                        {age}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span>to</span>
                <Select
                  value={formData.targetAudience.ageRange[1]}
                  onValueChange={(value) =>
                    updateFormData("targetAudience", {
                      ...formData.targetAudience,
                      ageRange: [formData.targetAudience.ageRange[0], value],
                    })
                  }
                >
                  <SelectTrigger id="targetAgeMax">
                    <SelectValue placeholder="Max" />
                  </SelectTrigger>
                  <SelectContent>
                    {["18", "25", "35", "45", "55", "65+"].map((age) => (
                      <SelectItem key={age} value={age}>
                        {age}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="targetLanguage">Language (optional)</Label>
              <Select
                value={formData.targetAudience.language}
                onValueChange={(value) =>
                  updateFormData("targetAudience", {
                    ...formData.targetAudience,
                    language: value,
                  })
                }
              >
                <SelectTrigger id="targetLanguage">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="Chinese">Chinese</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  );
}
