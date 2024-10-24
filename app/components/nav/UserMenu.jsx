"use client";
import {
  ChevronDown,
  User,
  Star,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { displayName, getInitials } from "@/utils/string-helpers";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function UserMenu({
  session,
  isDropdownOpen,
  setIsDropdownOpen,
}) {
  const handleLogout = async () => {
    await signOut({ redirect: false });
    // Optionally, redirect to login or home page
  };

  //   const getAccountSettingsUrl = () => `/${session.user.role}/account`;
  const getDashboardUrl = () => `/${session.user.role}/dashboard`;

  return (
    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
        })}
      >
        {displayName(session.user.name) || "My Account"}{" "}
        <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex items-center space-x-2 p-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {getInitials(session.user.name)}
          </div>
          <span className="font-medium">{session.user.name}</span>
        </div>
        <DropdownMenuItem>
          <Link href={getDashboardUrl()} className="flex items-center w-full">
            Dashboard
          </Link>
        </DropdownMenuItem>
        {session.user.role === "brand" && (
          <>
            <DropdownMenuItem>
              <Link href="/brand/go-plus" className="flex items-center w-full">
                Go Plus
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/brand/reviews" className="flex items-center w-full">
                Reviews
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/brand/invoices" className="flex items-center w-full">
                Invoices
              </Link>
            </DropdownMenuItem>
          </>
        )}
        {session.user.role === "creator" && (
          <DropdownMenuItem>
            <Link href="/creator/profile" className="flex items-center w-full">
              View Profile
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <Link href="/account" className="flex items-center w-full">
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/feedback" className="flex items-center w-full">
            Send Feedback
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
