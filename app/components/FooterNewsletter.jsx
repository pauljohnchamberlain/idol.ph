"use client";

import NewsletterForm from "@/components/NewsletterForm";

export default function FooterNewsletter() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Newsletter</h3>
      <p className="text-sm">
        Stay up to date with the latest news and trends in influencer marketing.
      </p>
      <NewsletterForm />
    </div>
  );
}
