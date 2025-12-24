import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export async function GET() {
  try {
    const usersCollection = await dbConnect(
      collectionNamesobj.usersCollection
    );

    const students = await usersCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error("Get Students Error:", error);
    return NextResponse.json(
      { error: "Students load করতে সমস্যা হয়েছে" },
      { status: 500 }
    );
  }
}
