import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();

    // 🔴 FIX 1: ObjectId validate
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid payment id" },
        { status: 400 }
      );
    }

    const paymentsCollection = await dbConnect(
      collectionNamesobj.paymentsCollection
    );

    const result = await paymentsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status: body.status,
          updatedAt: new Date(),
        },
      }
    );

    // 🔴 FIX 2: update check
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Payment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PATCH ERROR:", error);
    return NextResponse.json(
      { error: "Payment status update failed" },
      { status: 500 }
    );
  }
}
