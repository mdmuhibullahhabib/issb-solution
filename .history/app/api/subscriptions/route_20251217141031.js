import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

// CREATE subscription (POST)
export async function POST(req) {
  try {
    const body = await req.json();

    const subscriptionsCollection = await dbConnect(
      collectionNamesobj.subscriptionsCollection
    );

    const result = await subscriptionsCollection.insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        resultId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// GET all subscriptions
export async function GET() {
  try {
    const subscriptionCollection = await dbConnect( collectionNamesobj.subscriptionsCollection);

    const subscriptions = await subscriptionCollection.find({}).toArray();

    return NextResponse.json(subscriptions);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscriptions" },
      { status: 500 }
    );
  }
}
