import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa6";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Talent</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/become-influencer" className="hover:underline">
                  Become An Influencer
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:underline">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/talent-tips" className="hover:underline">
                  Talent Tips
                </Link>
              </li>
            </ul>
            <h3 className="text-lg font-semibold">For Brands</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/find-influencers" className="hover:underline">
                  Find Influencers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  Pricing For Brands
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:underline">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:underline">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <p>
              Made with{" "}
              <FaHeart
                className="inline-block text-red-500 h-4 w-4"
                aria-label="love"
              />{" "}
              by{" "}
              <a
                href="https://x.com/pjchambo"
                target="_blank"
                aria-label="X (formerly Twitter)"
                className="text-muted-foreground hover:text-foreground flex items-center space-x-2"
              >
                <FaXTwitter className="h-5 w-5" />
                <span>@pjchambo</span>
              </a>
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm">
              Stay up to date with the latest news and trends in influencer
              marketing.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} idol. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-muted-foreground hover:text-foreground"
            >
              <FaTiktok className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="X (formerly Twitter)"
              className="text-muted-foreground hover:text-foreground"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-foreground"
            >
              <FaYoutube className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
