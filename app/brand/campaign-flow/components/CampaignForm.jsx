"use client";

import { useState } from "react";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CampaignSteps from "./CampaignSteps";
import OfferStep from "./OfferStep";
import ContentStep from "./ContentStep";
import CreatorStep from "./CreatorStep";
import CampaignStep from "./CampaignStep";
import TermsStep from "./TermsStep";

export default function CampaignForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    offer: {
      payFee: false,
      giftProduct: false,
      paidAndGift: false,
      productValue: { currency: "AUD", amount: "" },
      productDescription: "",
      deliveryMethod: "",
    },
    content: {
      contentPromotion: "post",
      deliverables: [],
      platform: "",
      contentType: "",
      description: "",
      additionalPromotion: "",
    },
    creator: {
      platform: "Instagram",
      audienceSize: [],
      engagement: 50,
      location: "anywhere",
      specificAddress: "",
      creatorPersona: {
        gender: "Any",
        ageRange: ["18", "65+"],
        language: "English",
      },
      targetAudience: {
        country: "",
        state: "",
        gender: "Any",
        ageRange: ["18", "65+"],
        language: "English",
      },
    },
    campaign: {
      headline: "",
      coverImage: null,
      description: "",
      referenceMedia: [],
      referenceLinks: [],
      applicationCloseDate: "",
      companyName: "",
      websiteOrSocialLink: "",
      logo: null,
      brandInformation: "",
      industry: "",
    },
    terms: {
      deliverables: [],
      schedule: "",
      contentUsage: "usage",
      usageTerm: "",
      usageDetails: "",
      boosting: "boost",
      boostWindow: "",
      boostingDetails: "",
      exclusivity: false,
      paymentMethod: [],
    },
  });

  const updateFormData = (step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <OfferStep
            formData={formData.offer}
            updateFormData={(field, value) =>
              updateFormData("offer", field, value)
            }
          />
        );
      case 2:
        return (
          <ContentStep
            formData={formData.content}
            updateFormData={(field, value) =>
              updateFormData("content", field, value)
            }
          />
        );
      case 3:
        return (
          <CreatorStep
            formData={formData.creator}
            updateFormData={(field, value) =>
              updateFormData("creator", field, value)
            }
          />
        );
      case 4:
        return (
          <CampaignStep
            formData={formData.campaign}
            updateFormData={(field, value) =>
              updateFormData("campaign", field, value)
            }
          />
        );
      case 5:
        return (
          <TermsStep
            formData={formData.terms}
            updateFormData={(field, value) =>
              updateFormData("terms", field, value)
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <CardHeader>
        <CampaignSteps currentStep={currentStep} />
      </CardHeader>
      <CardContent>{renderStep()}</CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          Back
        </Button>
        <Button onClick={handleNext}>
          {currentStep === 5 ? "Submit" : "Save & Continue"}
        </Button>
      </CardFooter>
    </>
  );
}
