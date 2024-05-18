import mongoose from "mongoose";

// key word export to allow access from server.js
export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.7lohanj.mongodb.net/').then(() => console.log("DB connected"));
}