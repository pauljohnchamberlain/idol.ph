import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    console.error("No session or email found");
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  console.log("Session:", session);
  console.log("User email from session:", session.user.email);

  try {
    const { profileImage } = await req.json();

    if (!profileImage) {
      console.error("No profileImage provided in request body");
      return NextResponse.json(
        { success: false, message: "No profile image URL provided" },
        { status: 400 },
      );
    }

    console.log("Updating profile image for:", session.user.email);

    const updatedCreator = await prisma.creator.update({
      where: { email: session.user.email },
      data: { profileImage },
    });

    console.log("Updated creator:", updatedCreator);

    return NextResponse.json({
      success: true,
      message: "Profile Image Updated",
    });
  } catch (err) {
    console.error("Error updating profile image:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 },
    );
  }
}
