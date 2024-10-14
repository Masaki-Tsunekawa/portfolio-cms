import React from "react";
import { SubmitButtonProps } from "@/app/_entries/types";

export default function SubmitButton({ innerText }: SubmitButtonProps) {
  return <button type="submit">{innerText}</button>;
}
