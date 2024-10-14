import React from "react";
import { TextInputProps } from "@/app/_entries/interfaces";

export default function TextInput({
  name,
  label,
  value,
  type = "text",
  onChange,
}: TextInputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
