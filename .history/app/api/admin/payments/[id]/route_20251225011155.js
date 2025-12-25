import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json(); // { status: "approved" | "rejected" }

    const paymentsCollection = await dbConnect(
      collectionNamesobj.paymentsCollection
    );

    await paymentsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status: body.status,
          updatedAt: new Date(),
        },
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Payment status update failed" },
      { status: 500 }
    );
  }
}
