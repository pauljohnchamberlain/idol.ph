"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import PackageCreationModal from "../components/PackageCreationModal";

export default function PackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="p-0 mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <h1 className="text-4xl font-bold mb-4">Manage Packages</h1>
      <div className="mb-6 flex flex-col items-center">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button>CREATE PACKAGE</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] w-full max-w-[95vw] max-h-[95vh] overflow-hidden bg-white">
            <VisuallyHidden asChild>
              <DialogTitle>Create Package</DialogTitle>
            </VisuallyHidden>
            <PackageCreationModal />
          </DialogContent>
        </Dialog>
      </div>

      <div className="text-center">
        <p className="text-lg mb-4">You can create 3 packages.</p>
        <div className="bg-gray-100 p-8 rounded-lg inline-block">
          <p className="text-gray-600">
            Nothing to display.{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Create a package
            </Link>{" "}
            to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
