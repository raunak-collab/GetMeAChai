"use server"
import React from "react"
import User from "@/models/User"
import connectDB from "@/db/connectDb"


// Function to fetch user data
export const fetchUser = async (username) => {
    const user = await User.findOne({ username }).lean(); // Use lean() to get plain JS object
    await connectDB();
    if (!user) throw new Error('User not found');

    // Serialize any non-plain objects
    const serializedUser = {
        ...user,
        _id: user._id.toString(), // Convert ObjectId to string
        createdAt: user.createdAt.toISOString(), // Convert Date to string (ISO format)
        updatedAt: user.updatedAt.toISOString(), // Convert Date to string (ISO format)
        // Ensure other fields are also simple types, e.g., coverpic and profilepic
    };

    return serializedUser;
};



export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let newdata = Object.fromEntries(data);

    // If the username is being updated. check if the username is available
    if (oldusername !== newdata.username) {
        let u = await User.findOne({ username: newdata.username });
        if (u) {
            return { error: "Username is already is exists" }
        }
    }

    await User.updateOne({ email: newdata.email }, newdata);

}
