import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import { productSchema } from "@/app/_schemas/Products";
import { z } from "zod";

export async function POST(request: Request) {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT || "3306", 10),
  });

  try {
    const body = await request.json();
    body.quantity = body.quantity ? Number(body.quantity) : null;
    body.status = body.status ? Number(body.status) : null;
    body.condition = body.condition ? Number(body.condition) : null;
    // console.log(body);
    const validatedData = productSchema.parse(body);

    const query = `INSERT INTO products (
          name,
          quantity,
          item_condition,
          status,
          note,
          date_of_insert,
          insert_workers_id,
          date_of_update,
          update_workers_id
        ) VALUES (
          ?,?,?,?,?,?,?,?,?
        )`;

    const { name, quantity, condition, status, note } = validatedData;
    const [product] = await connection.query(query, [
      name,
      quantity,
      condition,
      status,
      note,
      new Date(),
      null,
      new Date(),
      null,
    ]);
    // console.log(product);

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error);
      return NextResponse.json(
        { message: "failed", errors: error.errors },
        { status: 200 }
      );
    }

    console.error(error);
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    );
  } finally {
    await connection.end();
  }
}
