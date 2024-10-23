import { Button } from "@/components/ui/button";

const AccountSection = ({ title, description, buttonText }) => (
  <div className="flex justify-between items-center py-6 border-b">
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
    <Button variant="outline">{buttonText}</Button>
  </div>
);

export default function BrandAccountPage() {
  const sections = [
    {
      title: "Business Details",
      description: "Set your ABN, Business Name and Registered State",
      buttonText: "EDIT",
    },
    {
      title: "Account Details",
      description: "Set your personal details",
      buttonText: "EDIT",
    },
    {
      title: "Reset Password",
      description: "Reset your Password",
      buttonText: "EDIT",
    },
    {
      title: "Billing",
      description: "View and Edit your billing details",
      buttonText: "EDIT",
    },
    {
      title: "Notification Settings",
      description: "View and Edit your notification settings",
      buttonText: "EDIT",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">My Account</h1>
      <p className="text-xl text-gray-600 mb-8">Manage your Account settings</p>

      <div className="bg-white shadow-md rounded-lg p-6">
        {sections.map((section, index) => (
          <AccountSection
            key={index}
            title={section.title}
            description={section.description}
            buttonText={section.buttonText}
          />
        ))}

        <div className="flex justify-between items-center py-6">
          <div>
            <h2 className="text-xl font-semibold">Deactivate Account</h2>
            <p className="text-gray-600">Remove your account from here</p>
          </div>
          <Button variant="destructive">DEACTIVATE</Button>
        </div>
      </div>
    </div>
  );
}
