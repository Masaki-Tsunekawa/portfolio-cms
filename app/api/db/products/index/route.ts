import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET() {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT || "3306", 10),
  });

  try {
    const [rows] = await connection.query("SELECT * FROM products");
    await connection.end();
    // console.log(rows);

    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    );
  } finally {
    await connection.end();
  }
}
