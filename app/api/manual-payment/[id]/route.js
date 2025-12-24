import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function PATCH(req, { params }) {
  try {
    const { id } = params;

    const paymentsCollection = await dbConnect(
      collectionNamesobj.paymentsCollection
    );
    const subscriptionsCollection = await dbConnect(
      collectionNamesobj.subscriptionsCollection
    );

    /* ================= Find Payment ================= */
    const payment = await paymentsCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!payment) {
      return NextResponse.json(
        { error: "Payment পাওয়া যায়নি" },
        { status: 404 }
      );
    }

    if (payment.status === "approved") {
      return NextResponse.json(
        { error: "Payment আগেই approved" },
        { status: 400 }
      );
    }

    /* ================= Update Payment ================= */
    await paymentsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status: "approved",
          approvedAt: new Date(),
        },
      }
    );

    /* ================= Create Subscription ================= */
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 6); // 🔥 6 months access

    await subscriptionsCollection.insertOne({
      userEmail: payment.email,
      courseId: new ObjectId(payment.courseId),
      paymentId: payment._id,
      price: payment.price,
      status: "active",
      startDate,
      endDate,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "Payment approved এবং subscription active হয়েছে",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Approve Payment Error:", error);
    return NextResponse.json(
      { error: "Approve করতে সমস্যা হয়েছে" },
      { status: 500 }
    );
  }
}
