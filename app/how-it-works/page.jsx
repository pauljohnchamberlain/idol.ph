import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, CreditCard, BarChart } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Move faster with creators who understand your brand
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Collaborate with creators to receive high-quality content and reach
          new audiences.
        </p>
        <Button size="lg" className="mt-4">
          Get started for free <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      <section className="space-y-12">
        <h2 className="text-3xl font-semibold text-center">
          How does theright.fit work?
        </h2>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="text-center space-y-2">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold">Post a campaign</h3>
            <p className="text-sm text-muted-foreground">
              Create a campaign using the brief builder and let the AI matching
              algorithm help you find the perfect talent.
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold">Creators come to you</h3>
            <p className="text-sm text-muted-foreground">
              Receive applicants fast. Review their profile, socials, photos,
              reviews, and price points.
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold">Chat with applicants</h3>
            <p className="text-sm text-muted-foreground">
              Keep all your creator negotiations and onboarding messages in one
              place.
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">
              4
            </div>
            <h3 className="font-semibold">Book creators</h3>
            <p className="text-sm text-muted-foreground">
              Lock in creators with a click to get the job done on time and on
              budget.
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">
              5
            </div>
            <h3 className="font-semibold">Pay creators your way</h3>
            <p className="text-sm text-muted-foreground">
              Receive invoices and payment requests directly from creators.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Button size="lg">FIND TALENT NOW</Button>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-3xl font-semibold text-center">
          Why theright.fit?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center space-y-2">
            <Users className="h-12 w-12 mx-auto text-primary" />
            <h3 className="font-semibold">Creators find you</h3>
            <p className="text-sm text-muted-foreground">
              Quickly discover and book diverse influencers who align to your
              brand
            </p>
          </div>
          <div className="text-center space-y-2">
            <CreditCard className="h-12 w-12 mx-auto text-primary" />
            <h3 className="font-semibold">Payments simplified</h3>
            <p className="text-sm text-muted-foreground">
              Automatically pay talent when the job is completed or receive
              creator invoices
            </p>
          </div>
          <div className="text-center space-y-2">
            <BarChart className="h-12 w-12 mx-auto text-primary" />
            <h3 className="font-semibold">Metrics and Vetting</h3>
            <p className="text-sm text-muted-foreground">
              See the metrics that matter for every creator and campaign you
              launch
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Case Studies</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Case Study 1"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 font-semibold">Case Study 1</h3>
              <p className="text-sm text-muted-foreground">
                Brief description of the case study
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Case Study 2"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 font-semibold">Case Study 2</h3>
              <p className="text-sm text-muted-foreground">
                Brief description of the case study
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Case Study 3"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 font-semibold">Case Study 3</h3>
              <p className="text-sm text-muted-foreground">
                Brief description of the case study
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg">
            See more case studies
          </Button>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Tried and tested</h2>
        <p className="text-center text-xl text-muted-foreground max-w-2xl mx-auto">
          Thousands of projects have been completed by our creative community
          for some of the biggest and brightest companies.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image
            src="/placeholder.svg?height=50&width=120"
            alt="Company Logo 1"
            width={120}
            height={50}
          />
          <Image
            src="/placeholder.svg?height=50&width=120"
            alt="Company Logo 2"
            width={120}
            height={50}
          />
          <Image
            src="/placeholder.svg?height=50&width=120"
            alt="Company Logo 3"
            width={120}
            height={50}
          />
          <Image
            src="/placeholder.svg?height=50&width=120"
            alt="Company Logo 4"
            width={120}
            height={50}
          />
          <Image
            src="/placeholder.svg?height=50&width=120"
            alt="Company Logo 5"
            width={120}
            height={50}
          />
        </div>
      </section>

      <section className="bg-muted p-8 rounded-lg text-center space-y-4">
        <h2 className="text-2xl font-semibold">Ready to get started?</h2>
        <p className="text-muted-foreground">
          Join idol.ph today and start requesting personalized videos!
        </p>
        <Button size="lg">Get Started</Button>
      </section>
    </div>
  );
}
