
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  let connection;

  try {
    connection = await pool.getConnection();

    const [rows] = await connection.query(
      "SELECT 1 AS connected"
    );

    return NextResponse.json({
      success: true,
      message: "Database connected successfully!",
      data: rows,
    });
  } catch (error) {
    console.error("Database connection error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed.",
        error: errorMessage,
      },
      { status: 500 }
    );
  } finally {
    connection?.release();
  }
}
