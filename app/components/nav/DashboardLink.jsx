import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function DashboardLink({ role, closeMenu, isMobile = false }) {
  const dashboardUrl = `/${role}/dashboard`;

  return (
    <Link
      href={dashboardUrl}
      className={buttonVariants({
        variant: "ghost",
        size: "sm",
        className: isMobile ? "w-full justify-center" : "",
      })}
      onClick={closeMenu}
    >
      Dashboard
    </Link>
  );
}
