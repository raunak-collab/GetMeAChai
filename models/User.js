import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    razorpayid: { type: String },
    razorpaysecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.models.User || model("User", UserSchema);

// Summary:
// This code defines a User schema to structure user information in the MongoDB database.
// It specifies the fields (name, email, username, etc.) and their data types (like String or Date).
// The Model created from this schema allows you to interact with the MongoDB database to create, read, update, or delete user records.


