import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BackButton from "@/app/components/BackButton";

export default function ResetPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-serif text-center mb-8">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <BackButton />
          <div>
            <h2 className="text-xl font-semibold">Reset Password</h2>
            <p className="text-gray-600">Reset your Password</p>
          </div>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">
              Current Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="current-password"
              type="password"
              placeholder="Current Password"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">
              New Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="new-password"
              type="password"
              placeholder="Choose a password"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">
              Confirm New Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Re-enter your password"
              required
            />
          </div>
          <p className="text-sm text-gray-500">* Indicates required field</p>
          <div className="flex justify-between pt-4">
            <Button variant="outline">BACK</Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              SAVE DETAILS
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
