import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function PATCH(req, context) {
  try {
    // ✅ FIX 1: params await করো
    const params = await context.params;
    const { id } = params;

    // ✅ FIX 2: body
    const { status } = await req.json();

    console.log("PATCH ID:", id);
    console.log("PATCH STATUS:", status);

    // ✅ FIX 3: validate id
    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid payment id" },
        { status: 400 }
      );
    }

    // ✅ FIX 4: validate status
    if (!["approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
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
          status,
          updatedAt: new Date(),
        },
      }
    );

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
