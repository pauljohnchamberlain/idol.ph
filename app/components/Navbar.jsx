import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/MobileNav";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Suspense } from "react";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          {/* <Link
            href="/"
            className="flex z-40 font-semibold items-center justify-center gap-x-2 rounded-md"
          >
            <span className="text-xl font-bold">IDOL</span>
          </Link> */}

          <Link
            href="/"
            className="flex z-40 font-semibold items-center justify-center gap-x-2 rounded-md"
          >
            <Image
              src="/idol-logo.svg"
              alt="idol"
              width={0}
              height={0}
              className="w-auto h-7 max-w-[120px]"
            />
          </Link>

          <Suspense fallback={<div>Loading...</div>}>
            <div className="hidden sm:block">
              <DesktopNav session={session} />
            </div>

            <div className="sm:hidden">
              <MobileNav session={session} />
            </div>
          </Suspense>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
