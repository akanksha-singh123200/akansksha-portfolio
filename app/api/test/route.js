import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const data = await Contact.create({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {
    console.log(error);

    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}