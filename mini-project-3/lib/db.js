import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

async function dbConnect() {

  if(isConnected){
    console.log("Mongodb is already connected")
    return
  }

  if (!MONGODB_URI) {
    throw new Error(
      "Missing MONGODB_URI. Create a .env.local file with MONGODB_URI=mongodb+srv://USER:PASSWORD@HOST/DB?retryWrites=true&w=majority (URL-encode special characters in PASSWORD, e.g. @ -> %40)."
    );
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState === 1
    console.log("Connected to mongodb")
  } catch (error) {
    console.error("failed to connect to mongodb: ", error)
    throw error
  }
}

export default dbConnect;