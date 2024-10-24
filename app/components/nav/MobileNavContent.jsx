"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavigationItems from "./NavigationItems";

export default function MobileNavContent() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const closeMenu = () => setIsOpen(false);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white/95 backdrop-blur-md">
        <div className="flex flex-col space-y-2 mt-4">
          <NavigationItems
            session={session}
            closeMenu={closeMenu}
            isMobile={true}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
