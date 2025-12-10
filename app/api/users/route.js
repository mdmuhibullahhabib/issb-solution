import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const usersCollection = await dbConnect(collectionNamesobj.userCollection);
    const users = await usersCollection.find({}).toArray();

    return NextResponse.json(users);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}