import { ArrowLeft } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Settings
        </h1>
        <div className="bg-white shadow rounded-lg">
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-200 rounded-full p-2">
                <ArrowLeft className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Profile Settings
                </h2>
                <p className="text-sm text-gray-500">
                  View and edit your profile information
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Profile Info
                </h3>
                <p className="text-sm text-gray-500">Edit your profile info</p>
              </div>
              <Button variant="outline">EDIT</Button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Connect Social Accounts
                </h3>
                <p className="text-sm text-gray-500">Connect your socials</p>
              </div>
              <Button variant="outline">VIEW</Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">
                  Display profile in search
                </span>
                <Switch />
              </div>
              <p className="text-xs text-gray-500">
                You must connect at least one social account with more than 2K
                followers to display your profile in search
              </p>
              <p className="text-xs text-gray-500">
                If this is selected, your profile is publicly visible and will
                appear in creator searches. If you don't want your profile to be
                searchable, you can toggle this off. You'll still be able to
                share links to your profile and Media Kit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
