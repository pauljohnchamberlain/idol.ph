import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BackButton from "@/app/components/BackButton";

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-serif text-center mb-8">Settings</h1>

      <Card className="bg-white shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <BackButton />
            <div>
              <h2 className="text-xl font-semibold">
                Accepted Payment Methods
              </h2>
              <p className="text-gray-600 text-sm">
                Let us know what payment methods you accept, so you can be paid
                automatically after each job
              </p>
            </div>
          </div>

          <div className="mt-6 border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#6772e5] flex items-center justify-center rounded">
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Stripe logo"
                  width={20}
                  height={20}
                  className="invert"
                />
              </div>
              <span className="font-medium">Stripe</span>
            </div>
            <Button variant="outline">CONNECT</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
