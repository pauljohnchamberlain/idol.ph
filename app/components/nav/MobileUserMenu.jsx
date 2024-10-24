import { buttonVariants } from "@/components/ui/button";
import { displayName } from "@/utils/string-helpers";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MobileUserMenu({
  session,
  showDashboardLink,
  getDashboardUrl,
  handleLogout,
  closeMenu,
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="account">
        <AccordionTrigger
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "w-full justify-center",
          })}
        >
          {displayName(session.user.name) || "My Account"}
        </AccordionTrigger>
        <AccordionContent>
          {showDashboardLink && (
            <Link
              href={getDashboardUrl()}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "w-full justify-center",
              })}
              onClick={closeMenu}
            >
              Dashboard
            </Link>
          )}
          {session.user.role === "brand" && (
            <>
              <Link
                href="/brand/go-plus"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "w-full justify-center",
                })}
                onClick={closeMenu}
              >
                Go Plus
              </Link>
              <Link
                href="/brand/reviews"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "w-full justify-center",
                })}
                onClick={closeMenu}
              >
                Reviews
              </Link>
              <Link
                href="/brand/invoices"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "w-full justify-center",
                })}
                onClick={closeMenu}
              >
                Invoices
              </Link>
            </>
          )}
          {session.user.role === "creator" && (
            <Link
              href="/creator/profile"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "w-full justify-center",
              })}
              onClick={closeMenu}
            >
              View Profile
            </Link>
          )}
          <Link
            href={`/${session.user.role}/account`}
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "w-full justify-center",
            })}
            onClick={closeMenu}
          >
            Settings
          </Link>
          <Link
            href="/feedback"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "w-full justify-center",
            })}
            onClick={closeMenu}
          >
            Send Feedback
          </Link>
          <button
            onClick={() => {
              handleLogout();
              closeMenu();
            }}
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "w-full justify-center",
            })}
          >
            Logout
          </button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
