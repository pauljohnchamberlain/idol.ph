import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardContent, CardTitle } from "@/components/ui/card";
import { GiftIcon, CameraIcon } from "lucide-react";

export default function OfferStep({ formData, updateFormData }) {
  return (
    <CardContent className="space-y-6">
      <div>
        <CardTitle className="text-2xl mb-2">
          What are you offering creators?
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Remember you can select more than one incentive and you will have an
          opportunity to negotiate unique collab with each creator.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <Checkbox
            id="payFee"
            checked={formData.payFee}
            onCheckedChange={(checked) => updateFormData("payFee", checked)}
          />
          <div>
            <Label htmlFor="payFee" className="text-base font-semibold">
              <CameraIcon className="inline-block mr-2 h-5 w-5" />I will pay the
              creator a fee
            </Label>
            <p className="text-sm text-muted-foreground">
              Creators will specify their fee in their proposal.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <Checkbox
            id="giftProduct"
            checked={formData.giftProduct}
            onCheckedChange={(checked) =>
              updateFormData("giftProduct", checked)
            }
          />
          <div>
            <Label htmlFor="giftProduct" className="text-base font-semibold">
              <GiftIcon className="inline-block mr-2 h-5 w-5" />I will gift the
              creator a product or service
            </Label>
            <p className="text-sm text-muted-foreground">
              You collaborate with creators in exchange of one of your products
              or services.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <Checkbox
            id="paidAndGift"
            checked={formData.paidAndGift}
            onCheckedChange={(checked) =>
              updateFormData("paidAndGift", checked)
            }
          />
          <div>
            <Label htmlFor="paidAndGift" className="text-base font-semibold">
              <CameraIcon className="inline-block mr-2 h-5 w-5" />
              <GiftIcon className="inline-block mr-2 h-5 w-5" />
              I'm offering a paid collaboration and gift
            </Label>
            <p className="text-sm text-muted-foreground">
              You pay the creator a fee and also gift your products or services.
            </p>
          </div>
        </div>
      </div>
      {(formData.giftProduct || formData.paidAndGift) && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="productValue" className="text-sm font-medium">
              What is the value of the product or service?
            </Label>
            <div className="flex mt-1.5">
              <Select
                value={formData.productValue.currency}
                onValueChange={(value) =>
                  updateFormData("productValue", {
                    ...formData.productValue,
                    currency: value,
                  })
                }
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AUD">AUD</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="productValue"
                type="number"
                placeholder="0.00"
                value={formData.productValue.amount}
                onChange={(e) =>
                  updateFormData("productValue", {
                    ...formData.productValue,
                    amount: e.target.value,
                  })
                }
                className="flex-1 ml-2"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="productDescription" className="text-sm font-medium">
              Product description (optional)
            </Label>
            <Textarea
              id="productDescription"
              placeholder="Add a product description and/or link"
              value={formData.productDescription}
              onChange={(e) =>
                updateFormData("productDescription", e.target.value)
              }
              className="mt-1.5"
            />
            <div className="text-xs text-right text-muted-foreground mt-1">
              {formData.productDescription.length}/200
            </div>
          </div>
          <div>
            <Label className="text-sm font-medium">
              How will the creator get the product?
            </Label>
            <RadioGroup
              value={formData.deliveryMethod}
              onValueChange={(value) => updateFormData("deliveryMethod", value)}
              className="flex space-x-4 mt-1.5"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="receive" id="receive" />
                <Label htmlFor="receive">Creator will receive product</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup">Pick up at specific location</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      )}
    </CardContent>
  );
}
