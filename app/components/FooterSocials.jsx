"use client";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const socialLinks = [
  { href: "#", ariaLabel: "Facebook", icon: FaFacebook },
  { href: "#", ariaLabel: "Instagram", icon: FaInstagram },
  { href: "#", ariaLabel: "TikTok", icon: FaTiktok },
  { href: "#", ariaLabel: "X (formerly Twitter)", icon: FaXTwitter },
  { href: "#", ariaLabel: "YouTube", icon: FaYoutube },
  { href: "#", ariaLabel: "LinkedIn", icon: FaLinkedin },
];

export default function FooterSocials() {
  return (
    <div className="flex space-x-4 mt-4 md:mt-0">
      {socialLinks.map((link) => (
        <a
          key={link.ariaLabel}
          href={link.href}
          aria-label={link.ariaLabel}
          className="text-muted-foreground hover:text-foreground"
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
