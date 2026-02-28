// import { MongoClient } from "mongodb";

// const MONGODB_URI = process.env.MONGODB_URI;
// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable");
// }

// declare global {
//   var _mongoClientPromise = Promise<MongoClient> | undefined;
// }

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(MONGODB_URI);
//     global._mongoClientPromise = client.connect();
//   }

//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(MONGODB_URI);
//   clientPromise = client.connect();
// }

// clientPromise
//   .then(() => console.log("✅MongoDB Connected Successful"))
//   .catch((err) => console.log("❌MongoDB Connect Failed"));

// export default clientPromise;
