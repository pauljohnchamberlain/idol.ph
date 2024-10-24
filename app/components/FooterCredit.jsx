"use client";

import { FaHeart, FaXTwitter } from "react-icons/fa6";

export default function FooterCredit() {
  return (
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
        rel="noopener noreferrer"
        aria-label="X (formerly Twitter)"
        className="text-muted-foreground hover:text-foreground flex items-center space-x-2"
      >
        <FaXTwitter className="h-5 w-5" />
        <span>@pjchambo</span>
      </a>
    </p>
  );
}
