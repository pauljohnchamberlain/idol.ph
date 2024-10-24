import { Button } from "@/components/ui/button";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-serif mb-8 text-center">Settings</h1>

      <div className="space-y-6">
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="bg-white p-2 rounded-full">
            <BackButton />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Account Details</h2>
            <p className="text-sm text-gray-600">
              View and edit your account details
            </p>
          </div>
        </div>

        {["Personal Info", "Creator Categories", "Reset Password"].map(
          (item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border-b"
            >
              <div>
                <h2 className="text-lg font-semibold">{item}</h2>
                <p className="text-sm text-gray-600">
                  {item === "Personal Info" &&
                    "Edit your email and personal info"}
                  {item === "Creator Categories" &&
                    "Set your creator categories"}
                  {item === "Reset Password" && "Reset your password"}
                </p>
              </div>
              <Link
                href={
                  item === "Personal Info"
                    ? "/account/personal-info"
                    : item === "Creator Categories"
                      ? "/account/creator-categories"
                      : "/account/reset-password"
                }
                passHref
              >
                <Button variant="outline" className="px-6">
                  EDIT
                </Button>
              </Link>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
