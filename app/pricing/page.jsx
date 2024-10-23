'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    (<div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Choose Your Plan</h1>
      <p className="text-xl text-center text-muted-foreground mb-8">
        A powerful free plan and more when you need it
      </p>
      <p className="text-center text-muted-foreground mb-12">
        No commission fees or margins on any creator campaigns
      </p>
      <div className="flex justify-center items-center space-x-4 mb-12">
        <span className="text-sm font-medium">Monthly Billing</span>
        <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={setIsAnnual} />
        <span className="text-sm font-medium">Annual Billing</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="flex flex-col transition-shadow duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">idol.ph Core</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="mb-4">Free to find, manage, and book</p>
            <p className="text-3xl font-bold mb-6">FREE</p>
            <Button className="w-full mb-6 mt-auto">Start for Free</Button>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>3 creator bookings per campaign</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>1 concurrent campaign</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Pay creators via Stripe or Bank Transfer</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>View & manage applicants</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Email support</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="flex flex-col border-primary transition-shadow duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">idol.ph Plus</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="mb-4">Metrics for campaigns & vetting</p>
            <p className="text-3xl font-bold mb-2">{isAnnual ? "$790 USD" : "$79 USD"}</p>
            <p className="text-sm text-muted-foreground mb-6">{isAnnual ? "per year" : "per month"}</p>
            <Button className="w-full mb-6 mt-auto" variant="default">Go Plus Now</Button>
            <p className="font-medium mb-2">Everything in Core plus</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Unlimited bookings with creators</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Creator analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>5 concurrent campaigns</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Gifting, Contra, X-deal campaigns</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Chat support</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <details className="bg-muted p-4 rounded-lg">
            <summary className="font-medium cursor-pointer">Can I change my plan later?</summary>
            <p className="mt-2">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </details>
          <details className="bg-muted p-4 rounded-lg">
            <summary className="font-medium cursor-pointer">What payment methods do you accept?</summary>
            <p className="mt-2">We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.</p>
          </details>
          <details className="bg-muted p-4 rounded-lg">
            <summary className="font-medium cursor-pointer">Is there a long-term contract?</summary>
            <p className="mt-2">No, our services are provided on a month-to-month basis. You can cancel at any time without penalty.</p>
          </details>
        </div>
      </div>
    </div>)
  );
}