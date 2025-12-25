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

    return NextResponse.json(payments, { status: 200 });
  } catch (error) {
    console.error("Get Payments Error:", error);
    return NextResponse.json(
      { error: "Payment লোড করতে সমস্যা হয়েছে" },
      { status: 500 }
    );
  }
}
