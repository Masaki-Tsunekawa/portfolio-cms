import React from "react";
import { FormProps } from "@/app/_entries/types";

const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
}: Readonly<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}>) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
