import { NextResponse } from "next/server";
import connectDb from "@/config/bd";
import { v4 as uuidv4 } from "uuid";
import { createPayment } from "@/service/bkash";

/* ================= bKash Config ================= */
const bkashConfig = {
  base_url: process.env.BKASH_BASE_URL,
  username: process.env.BKASH_CHECKOUT_URL_USER_NAME,
  password: process.env.BKASH_CHECKOUT_URL_PASSWORD,
  app_key: process.env.BKASH_CHECKOUT_URL_APP_KEY,
  app_secret: process.env.BKASH_CHECKOUT_URL_APP_SECRET,
};

/* ================= POST Handler ================= */
export async function POST(req) {
  try {
    // ✅ DB connect এখানে করবে
    await connectDb();

    const { email, name, phone } = await req.json();

    if (!email || !name || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const myUrl = req.headers.get("origin");
    const paymentId = uuidv4().substring(0, 10);
    const amount = 1000;

    const paymentDetails = {
      amount,
      callbackURL: `${myUrl}/api/callback`,
      orderID: paymentId,
      reference: "1",
      name,
      email,
      phone,
    };

    const createPaymentResponse = await createPayment(
      bkashConfig,
      paymentDetails
    );

    if (createPaymentResponse?.statusCode !== "0000") {
      return NextResponse.json(
        { message: "Payment Failed" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Payment Success",
      bkashURL: createPaymentResponse.bkashURL,
    });
  } catch (error) {
    console.error("Create Payment Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
