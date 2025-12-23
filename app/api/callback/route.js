import { NextResponse } from "next/server";
import { executePayment } from "@/service/bkash";
import connectDB from "@/config/bd";

connectDB();

/* ================= bKash Config ================= */
const bkashConfig = {
  base_url: process.env.BKASH_BASE_URL,
  username: process.env.BKASH_CHECKOUT_URL_USER_NAME,
  password: process.env.BKASH_CHECKOUT_URL_PASSWORD,
  app_key: process.env.BKASH_CHECKOUT_URL_APP_KEY,
  app_secret: process.env.BKASH_CHECKOUT_URL_APP_SECRET,
};

/* ================= GET Handler ================= */
export async function GET(req) {
  try {
    const query = req.nextUrl.searchParams;
    const paymentId = query.get("paymentID");
    const myUrl = req.nextUrl.origin;

    // ❌ No payment ID → cancel
    if (!paymentId) {
      return NextResponse.redirect(`${myUrl}/cancel`, 303);
    }

    // ✅ Execute payment
    const executePaymentResponse = await executePayment(
      bkashConfig,
      paymentId
    );

    // ❌ Payment failed
    if (executePaymentResponse?.statusCode !== "0000") {
      return NextResponse.redirect(`${myUrl}/cancel`, 303);
    }

    // ✅ Payment success
    return NextResponse.redirect(`${myUrl}/success`, 303);
  } catch (error) {
    console.error("bKash Execute Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
