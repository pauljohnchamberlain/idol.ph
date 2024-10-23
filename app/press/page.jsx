import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 space-y-16">
        <section id="about">
          <h2 className="text-3xl font-bold mb-6">About idol.ph</h2>
          <p className="text-lg text-muted-foreground mb-4">
            idol.ph is a pioneering social media marketplace that connects
            influencers, brands, and audiences in a seamless ecosystem. Our
            platform empowers content creators to monetize their influence while
            providing brands with authentic ways to reach engaged audiences.
          </p>
          <p className="text-lg text-muted-foreground">
            Founded in 2023, idol.ph has quickly become the go-to platform for
            influencer marketing in Southeast Asia, with a focus on the
            Philippines.
          </p>
          <Button className="mt-4">More About Us</Button>
        </section>

        <section id="news">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "idol.ph Secures $10M in Series A Funding",
                date: "June 15, 2023",
                excerpt:
                  "Leading social media marketplace idol.ph announces successful completion of Series A funding round, set to expand operations across Southeast Asia.",
              },
              {
                title: "New Features Launch: AI-Powered Match Making",
                date: "May 1, 2023",
                excerpt:
                  "idol.ph introduces cutting-edge AI technology to match brands with the perfect influencers, revolutionizing influencer marketing strategies.",
              },
              {
                title: "idol.ph Reaches 1 Million Active Users",
                date: "April 12, 2023",
                excerpt:
                  "Milestone achievement as idol.ph's user base grows to 1 million active users, solidifying its position as a leader in the influencer marketing space.",
              },
            ].map((news, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {news.date}
                  </p>
                  <p>{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="media">
          <h2 className="text-3xl font-bold mb-6">Media Assets</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Logo Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full pt-[66.67%] mb-4">
                  <Image
                    src="/placeholder.png?height=200&width=300"
                    alt="idol.ph logo preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Logos
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Product Screenshots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full pt-[66.67%] mb-4">
                  <Image
                    src="/placeholder.png?height=200&width=300"
                    alt="idol.ph app screenshot"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Screenshots
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Founder Headshots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full pt-[66.67%] mb-4">
                  <Image
                    src="/placeholder.png?height=200&width=300"
                    alt="idol.ph founder headshots"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Headshots
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-6">Media Contact</h2>
          <Card>
            <CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center p-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Press Inquiries</h3>
                <p className="text-muted-foreground mb-2">
                  For all press-related questions and interview requests, please
                  contact:
                </p>
                <p className="font-medium">
                  Maria Santos, Head of Public Relations
                </p>
              </div>
              <div className="mt-4 md:mt-0 space-y-2">
                <Button variant="outline" className="w-full md:w-auto">
                  <Mail className="mr-2 h-4 w-4" /> press@idol.ph
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  <Phone className="mr-2 h-4 w-4" /> +63 2 8123 4567
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
