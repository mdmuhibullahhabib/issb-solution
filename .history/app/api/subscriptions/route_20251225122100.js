import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      userId,
      userEmail,
      planId,
      transactionId,
      price,
      startDate,
      endDate,
      examCredit,
      status,
    } = body;

    // 🔴 REQUIRED CHECK
    if (!userId || !userEmail || !planId || !transactionId || !price) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const subscriptionsCollection = await dbConnect(
      collectionNamesobj.subscriptionsCollection
    );

    const result = await subscriptionsCollection.insertOne({
      userId,
      userEmail,
      planId,
      transactionId,
      price,
      status: status || "pending",
      startDate,
      endDate,
      examCredit: examCredit || 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("Subscription Error:", error);
    return NextResponse.json(
      { error: "Subscription create failed" },
      { status: 500 }
    );
  }
}
