import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CreatorNav({ closeMenu, isMobile }) {
  const linkClass = buttonVariants({
    variant: "ghost",
    size: "sm",
    className: isMobile ? "w-full justify-center" : "",
  });

  return (
    <>
      <Link
        href="/creator/collab-hub"
        className={linkClass}
        onClick={closeMenu}
      >
        Collab Hub
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className={linkClass}>
          Campaigns <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              href="/creator/campaigns"
              className="flex items-center w-full"
              onClick={closeMenu}
            >
              Campaign Feed
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/creator/campaigns/applications"
              className="flex items-center w-full"
              onClick={closeMenu}
            >
              Applications
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className={linkClass}>
          Creator Tools <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              href="/creator/media-kit"
              className="flex items-center w-full"
              onClick={closeMenu}
            >
              Media Kit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/creator/packages"
              className="flex items-center w-full"
              onClick={closeMenu}
            >
              Packages
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
