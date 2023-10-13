import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URI;

if (!MONGODB_URL) throw new Error("Please define MONGODB_URI in .env.local");

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null };
}

async function connectDb() {
	if (cached.conn) {
		console.log("Connected!");
		return cached.conn;
	}
	try {
		cached.conn = await mongoose.connect(MONGODB_URL!);
		console.log("Database connected!");
		return cached.conn;
	} catch (error) {
		console.log(error);
	}
}

export { connectDb };
