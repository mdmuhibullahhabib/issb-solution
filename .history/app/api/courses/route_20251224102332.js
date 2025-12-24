import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const courseCollection = await dbConnect(collectionNamesobj.coursesCollection);
    const courses = await coursesCollection.find({}).toArray();

    return NextResponse.json(courses);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}