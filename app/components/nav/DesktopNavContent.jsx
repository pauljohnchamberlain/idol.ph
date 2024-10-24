"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import NavigationItems from "./NavigationItems";

export default function DesktopNavContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="hidden items-center space-x-4 sm:flex">
      <NavigationItems
        session={session}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        isMobile={false}
      />
    </div>
  );
}
