import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const authHeader = req.headers.get("authorization");
  if (authHeader) {
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString(
      "ascii",
    );
    if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
      try {
        const body = await req.json();
        const brand = await prisma.brand.findUnique({
          where: { email: body.email },
        });

        if (brand) {
          // Update the brand's profile image
          await prisma.brand.update({
            where: { email: body.email },
            data: { profileImage: body.profileImage },
          });
          return NextResponse.json({
            success: true,
            message: "Profile image updated",
          });
        } else {
          return NextResponse.json(
            { success: false, message: "Brand not found" },
            { status: 400 },
          );
        }
      } catch (err) {
        return NextResponse.json(
          { success: false, message: "Invalid request" },
          { status: 500 },
        );
      }
    } else {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  } else {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 },
    );
  }
}
