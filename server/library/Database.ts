import mongoose from "mongoose";
import { UserRole } from "../enums/UserRole";
import User from "../models/User";

export class Database {
    static async connect() {
        try {
            // Try to connect to MongoDB with given database URI
            await mongoose.connect(process.env.DB_URI!);
            console.log("Connected to MongoDB successfully.");

            // Initialize first user
            const user = await User.findOne();
            if (!user) {
                await User.create({
                    fullname: process.env.FIRST_USER_FULLNAME!,
                    email: process.env.FIRST_USER_EMAIL!,
                    password: process.env.FIRST_USER_PASSWORD!,
                    role: UserRole.ADMIN
                });
                console.log("First user has been initialized.");
            }
        } catch (error) {
            console.error("DB connection error!");
        }
    }
}