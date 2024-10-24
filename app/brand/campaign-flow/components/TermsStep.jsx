import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardTitle } from "@/components/ui/card";

export default function TermsStep({ formData, updateFormData }) {
  // Add missing payment method options
  const paymentMethods = [
    { id: "platform", label: "Our platform" },
    { id: "direct", label: "Pay creator directly (Stripe)" },
  ];

  return (
    <CardContent className="space-y-6">
      <div>
        <CardTitle className="text-2xl mb-2">
          Now let's confirm the collab details
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          This is an opportunity for you to clarify some details that will be
          essential for any creator to provide an accurate quote.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label className="text-base font-semibold">Deliverables</Label>
          <p className="text-sm text-muted-foreground mb-2">
            These deliverables can be adjusted based on your conversation with
            each creator.
          </p>
          {/* Add functionality to display and edit deliverables */}
        </div>
        <div>
          <Label htmlFor="schedule" className="text-base font-semibold">
            Schedule
          </Label>
          <p className="text-sm text-muted-foreground mb-2">
            You will have an opportunity to change these dates if needed
          </p>
          <Input
            id="schedule"
            type="date"
            value={formData.schedule}
            onChange={(e) => updateFormData("schedule", e.target.value)}
          />
        </div>
        <div>
          <Label className="text-base font-semibold">Content usage</Label>
          <RadioGroup
            value={formData.contentUsage}
            onValueChange={(value) => updateFormData("contentUsage", value)}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2 border rounded-md p-4 flex-1">
              <RadioGroupItem value="usage" id="usage" />
              <Label htmlFor="usage">I want usage rights</Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-4 flex-1">
              <RadioGroupItem value="noUsage" id="noUsage" />
              <Label htmlFor="noUsage">I don't want usage rights</Label>
            </div>
          </RadioGroup>
        </div>
        {formData.contentUsage === "usage" && (
          <>
            <div>
              <Label htmlFor="usageTerm" className="text-base font-semibold">
                Term
              </Label>
              <Select
                value={formData.usageTerm}
                onValueChange={(value) => updateFormData("usageTerm", value)}
              >
                <SelectTrigger id="usageTerm">
                  <SelectValue placeholder="Select usage term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">3 Months</SelectItem>
                  <SelectItem value="6months">6 Months</SelectItem>
                  <SelectItem value="1year">1 Year</SelectItem>
                  <SelectItem value="unlimited">Unlimited</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="usageDetails" className="text-base font-semibold">
                Usage details (optional)
              </Label>
              <Textarea
                id="usageDetails"
                value={formData.usageDetails}
                onChange={(e) => updateFormData("usageDetails", e.target.value)}
                placeholder="Enter usage details"
              />
            </div>
          </>
        )}
        <div>
          <Label className="text-base font-semibold">Boosting</Label>
          <p className="text-sm text-muted-foreground mb-2">
            Boosting includes any paid amplification of a creator's post by a
            brand
          </p>
          <RadioGroup
            value={formData.boosting}
            onValueChange={(value) => updateFormData("boosting", value)}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2 border rounded-md p-4 flex-1">
              <RadioGroupItem value="boost" id="boost" />
              <Label htmlFor="boost">I want the option to boost</Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-4 flex-1">
              <RadioGroupItem value="noBoost" id="noBoost" />
              <Label htmlFor="noBoost">I don't want to boost</Label>
            </div>
          </RadioGroup>
        </div>
        {formData.boosting === "boost" && (
          <>
            <div>
              <Label htmlFor="boostWindow" className="text-base font-semibold">
                Boost window
              </Label>
              <Select
                value={formData.boostWindow}
                onValueChange={(value) => updateFormData("boostWindow", value)}
              >
                <SelectTrigger id="boostWindow">
                  <SelectValue placeholder="Select boost window" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1week">1 Week</SelectItem>
                  <SelectItem value="2weeks">2 Weeks</SelectItem>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="3months">3 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="boostingDetails"
                className="text-base font-semibold"
              >
                Boosting details (optional)
              </Label>
              <Textarea
                id="boostingDetails"
                value={formData.boostingDetails}
                onChange={(e) =>
                  updateFormData("boostingDetails", e.target.value)
                }
                placeholder="Enter boosting details"
              />
            </div>
          </>
        )}
        <div>
          <Label className="text-base font-semibold">Exclusivity</Label>
          <p className="text-sm text-muted-foreground mb-2">
            Do you require the creator to enter into an agreement exclusive to
            your brand within a certain period?
          </p>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="exclusivity"
              checked={formData.exclusivity}
              onCheckedChange={(checked) =>
                updateFormData("exclusivity", checked)
              }
            />
            <Label htmlFor="exclusivity">Yes, I require exclusivity</Label>
          </div>
        </div>
        <div>
          <Label className="text-base font-semibold">Payment method</Label>
          <p className="text-sm text-muted-foreground mb-2">
            How will you be paying the creator?
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="paymentPlatform"
                checked={formData.paymentMethod.includes("platform")}
                onCheckedChange={(checked) => {
                  const newMethods = checked
                    ? [...formData.paymentMethod, "platform"]
                    : formData.paymentMethod.filter((m) => m !== "platform");
                  updateFormData("paymentMethod", newMethods);
                }}
              />
              <Label htmlFor="paymentPlatform">Our platform</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="paymentDirect"
                checked={formData.paymentMethod.includes("direct")}
                onCheckedChange={(checked) => {
                  const newMethods = checked
                    ? [...formData.paymentMethod, "direct"]
                    : formData.paymentMethod.filter((m) => m !== "direct");
                  updateFormData("paymentMethod", newMethods);
                }}
              />
              <Label htmlFor="paymentDirect">
                Pay creator directly (Stripe)
              </Label>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  );
}
