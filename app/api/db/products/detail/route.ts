import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // RDS に接続するための情報を使用
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      port: parseInt(process.env.DATABASE_PORT || "3306", 10),
    });

    // クエリ実行例
    const id = request.url.split("?id=")[1]; // get query parameter from the URL
    const query = "SELECT * FROM products WHERE id = ? LIMIT 1";
    const [product] = await connection.query(query, [id]);
    // console.log(product);

    // クエリ結果を返す
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    );
  }
}
