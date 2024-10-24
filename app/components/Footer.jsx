import Link from "next/link";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocials from "./FooterSocials";
import FooterCredit from "./FooterCredit";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterLinks />
          <FooterNewsletter />
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} idol. All rights reserved.
          </p>
          <FooterSocials />
        </div>
        <FooterCredit />
      </div>
    </footer>
  );
}
