import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ContentStep({ formData, updateFormData }) {
  // Add missing platforms array
  const platforms = [
    { name: "Generic", icon: () => <span className="text-2xl">...</span> },
    { name: "Instagram", icon: Instagram },
    { name: "Facebook", icon: Facebook },
    {
      name: "TikTok",
      icon: () => (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            fill="currentColor"
            d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
          />
        </svg>
      ),
    },
    { name: "Youtube", icon: Youtube },
  ];

  return (
    <CardContent className="space-y-6">
      <div>
        <CardTitle className="text-2xl mb-2">
          Tell us about the content you want created
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          This allows the creator to understand the scope of work and give an
          estimate.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label className="text-base font-semibold">Content promotion</Label>
          <RadioGroup
            value={formData.contentPromotion}
            onValueChange={(value) => updateFormData("contentPromotion", value)}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2 border rounded-md p-4 flex-1">
              <RadioGroupItem value="post" id="post" />
              <Label htmlFor="post">
                <div className="font-medium">The creator will post content</div>
                <div className="text-sm text-muted-foreground">
                  To post on chosen platform/s
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-4 flex-1">
              <RadioGroupItem value="noPost" id="noPost" />
              <Label htmlFor="noPost">
                <div className="font-medium">
                  The creator won't post content
                </div>
                <div className="text-sm text-muted-foreground">
                  You will receive the assets
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label className="text-base font-semibold">Deliverables</Label>
          <p className="text-sm text-muted-foreground mb-2">
            These deliverables can be adjusted based on your conversation with
            each creator.
          </p>
          <div className="flex space-x-2 mb-4">
            {platforms.map((platform) => (
              <Button
                key={platform.name}
                variant={
                  formData.platform === platform.name ? "default" : "outline"
                }
                className="flex-1"
                onClick={() => updateFormData("platform", platform.name)}
              >
                <platform.icon className="mr-2 h-4 w-4" />
                {platform.name}
              </Button>
            ))}
          </div>
          <div className="flex space-x-2 mb-4">
            <Button
              variant={formData.contentType === "Image" ? "default" : "outline"}
              className="flex-1"
              onClick={() => updateFormData("contentType", "Image")}
            >
              Image
            </Button>
            <Button
              variant={formData.contentType === "Video" ? "default" : "outline"}
              className="flex-1"
              onClick={() => updateFormData("contentType", "Video")}
            >
              Video
            </Button>
          </div>
          <Select
            value={formData.deliverables}
            onValueChange={(value) => updateFormData("deliverables", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select post type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="story-image">Story (Image)</SelectItem>
              <SelectItem value="story-video">Story (Video)</SelectItem>
              <SelectItem value="post-image">Post (Image)</SelectItem>
              <SelectItem value="post-video">Post (Video)</SelectItem>
              <SelectItem value="reel">Reel</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="description" className="text-sm font-medium">
            Description (optional)
          </Label>
          <Textarea
            id="description"
            placeholder="Add short description"
            value={formData.description}
            onChange={(e) => updateFormData("description", e.target.value)}
            className="mt-1.5"
          />
          <div className="text-xs text-right text-muted-foreground mt-1">
            {formData.description.length}/100
          </div>
        </div>
        <div>
          <Label htmlFor="additionalPromotion" className="text-sm font-medium">
            Additional Promotion (optional)
          </Label>
          <Textarea
            id="additionalPromotion"
            placeholder="Describe additional platform and post type"
            value={formData.additionalPromotion}
            onChange={(e) =>
              updateFormData("additionalPromotion", e.target.value)
            }
            className="mt-1.5"
          />
          <div className="text-xs text-right text-muted-foreground mt-1">
            {formData.additionalPromotion.length}/150
          </div>
        </div>
        <Button className="w-full">Confirm Deliverable</Button>
      </div>
    </CardContent>
  );
}
