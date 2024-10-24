import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function AccountSettings() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif mb-8 text-center">Settings</h1>
      <Card className="max-w-2xl mx-auto">
        <CardContent className="divide-y">
          <Link href="/account/details">
            <SettingItem
              title="Account Details"
              description="View and edit your account details"
              buttonText="EDIT"
            />
          </Link>
          <Link href="/account/profile">
            <SettingItem
              title="Profile Settings"
              description="View and edit your profile information"
              buttonText="EDIT"
            />
          </Link>
          <Link href="/account/payments">
            <SettingItem
              title="Getting Paid"
              description="Set your accepted payment methods and tax details"
              buttonText="EDIT"
            />
          </Link>
          <Link href="/account/notifications">
            <SettingItem
              title="Notifications"
              description="View and edit your notification settings"
              buttonText="EDIT"
            />
          </Link>
          <Link href="/account/deactivate">
            <SettingItem
              title="Deactivate or Delete Account"
              description="Temporarily or permanently remove your account"
              buttonText="DEACTIVATE"
              buttonVariant="destructive"
            />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingItem({
  title,
  description,
  buttonText,
  buttonVariant = "outline",
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Button variant={buttonVariant}>{buttonText}</Button>
    </div>
  );
}
