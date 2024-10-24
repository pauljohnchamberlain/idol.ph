import BackButton from "@/app/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DeactivatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-2">My Business</h1>
      <p className="text-center text-gray-600 mb-8">
        Manage your Business profile on theright.fit
      </p>

      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center gap-4">
          <BackButton />
          <div>
            <CardTitle className="text-xl">
              Deactivate or Delete Account
            </CardTitle>
            <p className="text-sm text-gray-600">
              Temporarily or permanently remove your account from theright.fit
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Deactivate Account</h3>
            <p className="text-gray-600 mb-4">
              Deactivating your account means your profile will be removed from
              theright.fit. You will be unsearchable and uncontactable through
              the platform. You can re-activate your account at any time.
            </p>
            <Button
              variant="outline"
              className="w-full border-red-500 text-red-500 hover:bg-red-50"
            >
              DEACTIVATE ACCOUNT
            </Button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Delete Account</h3>
            <p className="text-gray-600 mb-4">
              Deleting your account is permanent and cannot be undone. Once your
              account has been deleted, your profile, collabs, chat history, and
              all other data will be deleted forever.
            </p>
            <Button variant="destructive" className="w-full">
              DELETE ACCOUNT
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
