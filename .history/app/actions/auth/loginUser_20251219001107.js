"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
    const { email, password } = payload;

    // 🔧 CHANGE 1: dbConnect async → MUST await
    const userCollection = await dbConnect(collectionNamesobj.usersCollection);

    const user = await userCollection.findOne({ email });

    if (!user) return null;

    // 🔧 CHANGE 2: bcrypt.compare is async → MUST await
    // 🔧 CHANGE 3: correct order → (plainPassword, hashedPassword)
    const isPasswordOk = await bcrypt.compare(password, user.password);

    if (!isPasswordOk) return null;

    return user;
};
