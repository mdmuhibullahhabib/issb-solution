import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();

    const usersCollection = await dbConnect(
      collectionNamesobj.usersCollection
    );

    const updateDoc = {
      $set: {
        ...body,
        updatedAt: new Date(),
      },
    };

    const result = await usersCollection.updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Student পাওয়া যায়নি" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Student তথ্য আপডেট হয়েছে" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Student Error:", error);
    return NextResponse.json(
      { error: "Update করতে সমস্যা হয়েছে" },
      { status: 500 }
    );
  }
}
