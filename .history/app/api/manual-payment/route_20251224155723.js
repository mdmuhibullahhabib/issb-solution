import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export async function POST(req) {
  try {
    const body = await req.json();

    /* ================= Required Validation ================= */
    const requiredFields = [
      "name",
      "phone",
      "trxId",
      "paymentMethod",
      "email",
      "courseId",
      "price",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `${field} আবশ্যক` },
          { status: 400 }
        );
      }
    }

    /* ================= DB ================= */
    const paymentsCollection = await dbConnect(
      collectionNamesobj.paymentsCollection
    );

    const paymentDoc = {
      name: body.name,
      phone: body.phone,
      trxId: body.trxId,
      image: body.trxId,

      paymentMethod: body.paymentMethod, // bkash / nagad
      email: body.email,

      courseId: body.courseId,
      price: body.price,

      status: "pending", // admin verify করবে
      paymentType: "manual-send-money",

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await paymentsCollection.insertOne(paymentDoc);

    return NextResponse.json(
      {
        message: "পেমেন্ট তথ্য সফলভাবে সাবমিট হয়েছে",
        paymentId: result.insertedId.toString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Manual Payment API Error:", error);

    return NextResponse.json(
      { message: "সার্ভার সমস্যা হয়েছে, পরে আবার চেষ্টা করুন" },
      { status: 500 }
    );
  }
}
