import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export async function POST(req) {
  try {
    const body = await req.json();

    /* ================= Validation ================= */
    const requiredFields = ["name", "phone", "trxId"];
    for (let field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} আবশ্যক` },
          { status: 400 }
        );
      }
    }

    /* ================= DB Insert ================= */
    const paymentsCollection = await dbConnect(collectionNamesobj.paymentsCollection
    );

    const result = await paymentsCollection.insertOne({
      name: body.name,
      phone: body.phone,
      trxId: body.trxId,
      status: "pending",
      method: body.method || "send-money",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "পেমেন্ট তথ্য সফলভাবে সাবমিট হয়েছে",
        insertedId: result.insertedId.toString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Payment API Error:", error);
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}
