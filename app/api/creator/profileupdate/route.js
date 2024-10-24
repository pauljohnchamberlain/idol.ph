import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    console.error("Unauthorized access attempt.");
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const updateData = await req.json();
    console.log("Received updateData:", updateData);

    const allowedFields = [
      "dateOfBirth",
      "gender",
      "name",
      "phone",
      "city",
      "region",
      "category",
      "platforms",
      "description",
      "achievements",
    ];

    const filteredUpdateData = Object.keys(updateData)
      .filter((key) => allowedFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = updateData[key];
        return obj;
      }, {});

    if (filteredUpdateData.dateOfBirth) {
      filteredUpdateData.dateOfBirth = new Date(filteredUpdateData.dateOfBirth);
    }

    console.log("Filtered update data:", filteredUpdateData);

    const updatedCreator = await prisma.creator.update({
      where: { email: session.user.email },
      data: filteredUpdateData,
    });

    console.log("Updated creator:", updatedCreator);

    return NextResponse.json({ success: true, message: "Creator Updated" });
  } catch (err) {
    console.error("Error in profileupdate route:", err);
    console.error("Error details:", err.message);
    if (err.code) console.error("Prisma error code:", err.code);
    console.error("Filtered update data:", filteredUpdateData);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 },
    );
  }
}
