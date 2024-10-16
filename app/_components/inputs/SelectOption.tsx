import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function SelectOption({
  children,
  register,
  name,
  placeholder,
  label,
  errMsg,
}: Readonly<{
  children: React.ReactNode;
  name: string;
  register: UseFormRegister<FieldValues>;
  placeholder: string;
  label: string;
  errMsg: string;
}>) {
  return (
    <>
      <FormControl isInvalid={!!errMsg} className="pb-4">
        <FormLabel>{label}</FormLabel>
        <Select placeholder={placeholder} {...register(name)}>
          {children}
        </Select>
        <FormErrorMessage>{errMsg}</FormErrorMessage>
      </FormControl>
    </>
  );
}
