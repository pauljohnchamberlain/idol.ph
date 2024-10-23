import { Search, Flower, Handshake } from "lucide-react";

function Feature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function SellingPoints() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Search size={24} />}
            title="Find brands that are right for you"
            description="Discover insights and opportunities to secure collaborations and advance your career growth."
          />
          <Feature
            icon={<Flower size={24} />}
            title="Show your value"
            description="Present your personal brand with professionalism and make a memorable impression."
          />
          <Feature
            icon={<Handshake size={24} />}
            title="Make money on your terms"
            description="Take charge with creator-driven collaboration and campaign tools at your fingertips."
          />
        </div>
      </div>
    </section>
  );
}
