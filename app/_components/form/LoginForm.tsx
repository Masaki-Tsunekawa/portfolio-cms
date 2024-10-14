"use client";

import React from "react";
import { SubmitButton } from "@/app/_entries/components";
import { Form, EmailInput, Password } from "@/app/_entries/components";
import { LoginFormProps } from "@/app/_entries/types";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <Form onSubmit={onSubmit}>
        <EmailInput />
        <Password />
        <SubmitButton innerText="Login" />
      </Form>
    </div>
  );
};

export default LoginForm;
