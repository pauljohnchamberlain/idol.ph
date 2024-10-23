import Image from "next/image";
import { Bell, DollarSign } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-blue-50 p-4 lg:p-8">
      <div className="w-full lg:w-1/2 max-w-2xl mb-8 lg:mb-0 lg:mr-8">
        <h2 className="text-sm font-semibold text-blue-600 mb-2">COLLAB HUB</h2>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Connect, Collab, Campaign in one place
        </h1>
        <p className="text-gray-600 mb-6">
          Easily grow and manage your creator career. Access collaboration
          details and oversee campaigns from start to finish with features
          designed specifically for creators.
        </p>
      </div>
      <Card className="w-full lg:w-1/2 max-w-2xl bg-white shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Image
                src="/placeholder.png?height=40&width=40"
                alt="Yen Nguyen"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <span className="font-semibold">Yen Nguyen</span>
            </div>
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center">
              <Bell className="w-4 h-4 mr-2" />
              <span className="text-sm">Payment request sent!</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center">
                <Image
                  src="/placeholder.png?height=32&width=32"
                  alt="Company Inc"
                  width={32}
                  height={32}
                  className="rounded-full mr-3"
                />
                <span className="font-medium">Company Inc</span>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                Complete
              </Badge>
              <span className="text-sm text-gray-600">Paid</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center">
                <Image
                  src="/placeholder.png?height=32&width=32"
                  alt="Reynolds and Co"
                  width={32}
                  height={32}
                  className="rounded-full mr-3"
                />
                <span className="font-medium">Reynolds and Co</span>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                In Progress
              </Badge>
              <span className="text-sm text-gray-600">Invoice Sent</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <Image
                  src="/placeholder.png?height=32&width=32"
                  alt="Duuunkin Donuts"
                  width={32}
                  height={32}
                  className="rounded-full mr-3"
                />
                <span className="font-medium">Duuunkin Donuts</span>
              </div>
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-800"
              >
                Pending
              </Badge>
              <span className="text-sm text-gray-600">Invoice Pending</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
