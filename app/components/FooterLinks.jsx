import Link from "next/link";

const linkSections = [
  {
    title: "For Talent",
    links: [
      { href: "/become-influencer", text: "Become An Influencer" },
      { href: "/case-studies", text: "Case Studies" },
      { href: "/how-it-works", text: "How It Works" },
      { href: "/talent-tips", text: "Talent Tips" },
    ],
  },
  {
    title: "For Brands",
    links: [
      { href: "/find-influencers", text: "Find Influencers" },
      { href: "/about", text: "Pricing For Brands" },
      { href: "/how-it-works", text: "How It Works" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", text: "About Us" },
      { href: "/careers", text: "Careers" },
      { href: "/contact", text: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#", text: "Help Center" },
      { href: "/press", text: "Press" },
      { href: "/blog", text: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", text: "Terms of Service" },
      { href: "/privacy", text: "Privacy Policy" },
      { href: "/cookies", text: "Cookie Policy" },
    ],
  },
];

export default function FooterLinks() {
  return (
    <>
      {linkSections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h3 className="text-lg font-semibold">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
