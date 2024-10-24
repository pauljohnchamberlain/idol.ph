import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function BrandNav({ closeMenu, isMobile }) {
  const linkClass = buttonVariants({
    variant: "ghost",
    size: "sm",
    className: isMobile ? "w-full justify-center" : "",
  });

  return (
    <>
      <Link
        href="/brand/campaign-flow"
        className={linkClass}
        onClick={closeMenu}
      >
        Work with Creators
      </Link>
      <Link href="/brand/post-job" className={linkClass} onClick={closeMenu}>
        Work With Talent
      </Link>
      <Link href="/brand/search" className={linkClass} onClick={closeMenu}>
        Talent Search
      </Link>
    </>
  );
}
