import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import TextShine from "@/components/TextShine";

export default function AuthLinks({ isMobile, closeMenu }) {
  return (
    <>
      <Link
        href="/login"
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className: isMobile ? "w-full justify-center" : "",
        })}
        onClick={closeMenu}
      >
        Login
      </Link>
      <Link
        href="/brand/signup"
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className: isMobile ? "w-full justify-center" : "",
        })}
        onClick={closeMenu}
      >
        <TextShine text={"Join as Brand"} />
      </Link>
      <Link
        href="/creator/signup"
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className: isMobile ? "w-full justify-center" : "",
        })}
        onClick={closeMenu}
      >
        <TextShine text={"Join as Creator"} />
      </Link>
    </>
  );
}
