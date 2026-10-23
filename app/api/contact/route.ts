
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let connection;

  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 150 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Input is too long." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email." },
        { status: 400 }
      );
    }

    connection = await pool.getConnection();

    const [result] = await connection.execute(
      "INSERT INTO users (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Contact message saved successfully!",
        insertId: (result as { insertId: number }).insertId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact insert error:", error);

    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ER_DUP_ENTRY"
    ) {
      return NextResponse.json(
        { success: false, message: "This email has already been submitted." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Unable to save contact message." },
      { status: 500 }
    );
  } finally {
    connection?.release();
  }
}
