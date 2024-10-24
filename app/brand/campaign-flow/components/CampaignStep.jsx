import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardTitle } from "@/components/ui/card";
import FileUpload from "@/components/FileUpload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CampaignStep({ formData, updateFormData }) {
  return (
    <CardContent className="space-y-6">
      <div>
        <CardTitle className="text-2xl mb-2">Campaign details</CardTitle>
        <p className="text-sm text-muted-foreground">
          This is what creators will see before they apply for the job.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label htmlFor="headline" className="text-base font-semibold">
            What's the headline of your campaign?
          </Label>
          <Input
            id="headline"
            value={formData.headline}
            onChange={(e) => updateFormData("headline", e.target.value)}
            placeholder="Enter campaign headline"
          />
        </div>
        <div>
          <Label className="text-base font-semibold">Upload Cover Image</Label>
          <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      updateFormData("coverImage", file);
                    }}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor="description" className="text-base font-semibold">
            Add a description
          </Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => updateFormData("description", e.target.value)}
            placeholder="Enter campaign description"
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-base font-semibold">
            Reference media, mood boards, or scripts you can upload them here
            (optional)
          </Label>
          {/* Add file upload functionality here */}
        </div>
        <div>
          <Label htmlFor="referenceLink" className="text-base font-semibold">
            Reference link (optional)
          </Label>
          <Input
            id="referenceLink"
            value={formData.referenceLinks[0] || ""}
            onChange={(e) => updateFormData("referenceLinks", [e.target.value])}
            placeholder="https://"
          />
        </div>
        <div>
          <Label
            htmlFor="applicationCloseDate"
            className="text-base font-semibold"
          >
            Application close date
          </Label>
          <Input
            id="applicationCloseDate"
            type="date"
            value={formData.applicationCloseDate}
            onChange={(e) =>
              updateFormData("applicationCloseDate", e.target.value)
            }
          />
        </div>
        <div>
          <Label className="text-base font-semibold">Brand information</Label>
          <p className="text-sm text-muted-foreground mb-2">
            Add in details about your brand that are important for creators to
            know
          </p>
          <div className="space-y-4">
            <div>
              <Label htmlFor="companyName">Company name</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => updateFormData("companyName", e.target.value)}
                placeholder="Enter company name"
              />
            </div>
            <div>
              <Label htmlFor="websiteOrSocialLink">
                Website or social link
              </Label>
              <Input
                id="websiteOrSocialLink"
                value={formData.websiteOrSocialLink}
                onChange={(e) =>
                  updateFormData("websiteOrSocialLink", e.target.value)
                }
                placeholder="https://"
              />
            </div>
            <div>
              <Label>Logo (optional)</Label>
              {/* Add logo upload functionality here */}
            </div>
            <div>
              <Label htmlFor="brandInformation">
                Brand information (optional)
              </Label>
              <Textarea
                id="brandInformation"
                value={formData.brandInformation}
                onChange={(e) =>
                  updateFormData("brandInformation", e.target.value)
                }
                placeholder="Give your creators some more details about your brand"
              />
            </div>
            <div>
              <Label htmlFor="industry">Industry (optional)</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => updateFormData("industry", value)}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="food">Food & Beverage</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  {/* Add more industries as needed */}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  );
}
