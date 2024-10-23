import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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
    const { bannerImage } = await req.json();

    if (!bannerImage) {
      console.error("No bannerImage provided in request body");
      return NextResponse.json(
        { success: false, message: "No banner image URL provided" },
        { status: 400 },
      );
    }

    const creator = await prisma.creator.findUnique({
      where: { email: session.user.email },
    });

    if (creator) {
      await prisma.creator.update({
        where: { email: session.user.email },
        data: { bannerImage },
      });
      return NextResponse.json({
        success: true,
        message: "Banner Image Updated",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Creator not found" },
        { status: 400 },
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
