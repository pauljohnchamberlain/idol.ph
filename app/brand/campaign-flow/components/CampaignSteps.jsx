import { Button } from "@/components/ui/button";

const steps = ["Offer", "Content", "Creator", "Campaign", "Terms & Submit"];

export default function CampaignSteps({ currentStep }) {
  return (
    <div className="flex justify-between items-center mt-4">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`flex items-center ${
            index + 1 === currentStep ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index + 1 === currentStep
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            {index + 1}
          </div>
          <span className="ml-2 text-sm font-medium">{step}</span>
        </div>
      ))}
    </div>
  );
}
