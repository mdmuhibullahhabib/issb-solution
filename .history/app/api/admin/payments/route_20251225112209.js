import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export async function GET() {
  try {
    const paymentsCollection = await dbConnect(
      collectionNamesobj.paymentsCollection
    );

    const payments = await paymentsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // 🔴 VERY IMPORTANT → _id string করা
    const formattedPayments = payments.map((p) => ({
      ...p,
      _id: p._id.toString(),
    }));

    return NextResponse.json(formattedPayments);
  } catch (error) {
    console.error("GET PAYMENTS ERROR:", error);
    return NextResponse.json(
      { error: "Failed to get payments" },
      { status: 500 }
    );
  }
}
