"use client";

import React from "react";
import {
  Form,
  EmailInput,
  Password,
  SubmitButton,
} from "@/app/_entries/components";

export default function Login() {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const data = {
      email,
      password,
    };

    console.log(data);

    fetch("/api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("ログインに失敗しました");
        }
        return response.json();
      })
      .then((data) => {
        console.log("ログイン成功:", data);
        window.location.href = "/products/index";
      })
      .catch((e) => {
        console.error("エラー:", e);
        console.log(e);
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center login-form">
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
          <EmailInput />
          <Password />
          <SubmitButton innerText="Login" isSubmitted={true} />
        </Form>
      </div>
    </>
  );
}
