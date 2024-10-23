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
    const { name, profileImage, category, location, description } =
      await req.json();
    const email = session.user.email;

    const brand = await prisma.brand.upsert({
      where: { email },
      update: {
        name,
        profileImage: profileImage || undefined,
        category: category || undefined,
        location: location || undefined,
        description: description || undefined,
      },
      create: {
        name,
        email,
        role: "brand",
      },
    });

    return NextResponse.json({
      success: true,
      message:
        brand.createdAt === brand.updatedAt ? "Brand Added" : "Brand Updated",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
