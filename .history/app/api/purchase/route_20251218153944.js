import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

/* ================= Mongo Client (Singleton) ================= */
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Dev: reuse client across hot reloads
  if (!global._mongoClientPromise) {
    client = process.env.MONGODB_URI
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Prod: new client
  client = process.env.MONGODB_URI
  clientPromise = client.connect();
}

/* ================= POST: Create Order ================= */
export async function POST(req) {
  try {
    const body = await req.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { success: false, message: "Request body is empty" },
        { status: 400 }
      );
    }

    const mongoClient = await clientPromise;
    const db = mongoClient.db("BanglaShopDB");
    const ordersCollection = db.collection("orders");

    const orderData = {
      ...body,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await ordersCollection.insertOne(orderData);

    return NextResponse.json(
      {
        success: true,
        message: "Order placed successfully!",
        orderId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Order Create Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to place order",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
