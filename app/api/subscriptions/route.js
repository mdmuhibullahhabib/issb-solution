import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate required fields
    const requiredFields = ["userId", "planId", "price", "currency", "transactionId"];
    for (let field of requiredFields) {
      if (!body[field]) return NextResponse.json({ error: `${field} is required` }, { status: 400 });
    }

    const subscriptionsCollection = await dbConnect(collectionNamesobj.subscriptionsCollection);

    const result = await subscriptionsCollection.insertOne({
      ...body,
      status: body.status || "active",
      autoRenew: body.autoRenew || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ insertedId: result.insertedId.toString() }, { status: 200 });
  } catch (err) {
    console.error("Subscription API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
