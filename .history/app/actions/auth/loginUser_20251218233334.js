"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import bcrypt from "bcrypt";


export const loginUser = async (payload) =>{
    const { email, password } = payload;
    const usersCollection = dbConnect(collectionNamesobj.usersCollection);
    const user = await usersCollection.findOne({email})
    
    if(!user) return null
    const isPasswordOk = bcrypt.compare(user.password, password)
    if(!isPasswordOk) return null

    return user;
}