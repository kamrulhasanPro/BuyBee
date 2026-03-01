import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import mongoose from "mongoose";

export async function connectDB() {
  try {
    if (mongoose.connection.readyState >= 1) return;

    const conn = await mongoose.connect(String(process.env.MONGODB_URI));
    console.log("✅connext DB");
    return conn;
  } catch (error) {
    console.log("❌not connext DB", error);
  }
}
