import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    const { email, password } = body;

    // ここで認証の処理を実行（例として固定のユーザー名とパスワードを使用）
    if (email === "sample@gmail.com" && password === "aaa") {
      // 認証成功
      return NextResponse.json({
        message: "Login successful",
        user: { email },
      });
    } else {
      // 認証失敗
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
