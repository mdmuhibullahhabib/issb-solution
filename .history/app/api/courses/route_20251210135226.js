import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productsCollection = await dbConnect(collectionNamesobj.productsCollection);
    const products = await productsCollection.find({}).toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}