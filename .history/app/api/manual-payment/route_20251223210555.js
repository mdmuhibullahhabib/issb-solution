import { NextResponse } from "next/server";
import connectDb from "@/config/bd";
import { writeFile } from "fs/promises";
import path from "path";
import Payment from "@/models/Payment";

export async function POST(req) {
  try {
    await connectDb();

    const formData = await req.formData();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const trxId = formData.get("trxId");
    // const screenshot = formData.get("screenshot");

    if (!name || !phone || !trxId || !screenshot) {
      return NextResponse.json(
        { message: "সব তথ্য দিতে হবে" },
        { status: 400 }
      );
    }

    // Save image
    const bytes = await screenshot.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${screenshot.name}`;
    const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

    await writeFile(uploadPath, buffer);

    // Save to DB
    await Payment.create({
      name,
      phone,
      trxId,
      screenshot: `/uploads/${fileName}`,
      status: "pending",
    });

    return NextResponse.json({ message: "Payment Submitted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}
