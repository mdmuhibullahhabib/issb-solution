import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    const body = await req.json();
    await client.connect();
    const db = client.db("BanglaShopDB");
    const orders = db.collection("orders");

    const result = await orders.insertOne({
      ...body,
      status: "pending",
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: "Order placed successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to place order!" }, { status: 500 });
  }
}