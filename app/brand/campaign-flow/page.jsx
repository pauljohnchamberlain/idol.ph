import { Card, CardHeader } from "@/components/ui/card";
import CampaignForm from "./components/CampaignForm";
import SaveExitButton from "./components/SaveExitButton";

export default function CreatorCampaignForm() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="text-sm">Find Creators</div>
          <SaveExitButton />
        </div>
      </CardHeader>
      <CampaignForm />
    </Card>
  );
}
