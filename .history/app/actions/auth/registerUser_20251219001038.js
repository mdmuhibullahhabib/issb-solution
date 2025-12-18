"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export const registerUser = async (payload) => {

    const { email, password } = payload;

    // 🔧 CHANGE 1: validation first
    if (!email || !password) return null;

    // 🔧 CHANGE 2: dbConnect async → MUST await
    const userCollection = await dbConnect(collectionNamesobj.usersCollection);

    const existingUser = await userCollection.findOne({ email });

    if (existingUser) return null;

    // 🔧 CHANGE 3: hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔧 CHANGE 4: avoid mutating payload directly
    const userData = {
        ...payload,
        password: hashedPassword,
    };

    const result = await userCollection.insertOne(userData);

    return {
        insertedId: result.insertedId.toString(),
    };
};
