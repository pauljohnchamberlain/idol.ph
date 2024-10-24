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
    const { email, dateOfBirth, gender } = await req.json();

    const updatedCreator = await prisma.creator.update({
      where: { email: session.user.email },
      data: { email, dateOfBirth: new Date(dateOfBirth), gender },
    });

    return NextResponse.json({
      success: true,
      message: "Personal Info Updated",
      creator: updatedCreator,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
