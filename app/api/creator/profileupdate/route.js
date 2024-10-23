import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, phone, city, region } = await req.json();

    const creator = await prisma.creator.findUnique({
      where: { email: session.user.email },
    });

    if (creator) {
      await prisma.creator.update({
        where: { email: session.user.email },
        data: { name, phone, city, region },
      });
      return NextResponse.json({ success: true, message: "Creator Updated" });
    } else {
      return NextResponse.json(
        { success: false, message: "Creator not found" },
        { status: 404 },
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
