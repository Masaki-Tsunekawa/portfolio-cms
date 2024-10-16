import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function TextInput({
  register,
  name,
  label,
  placeholder,
  helpertext,
  errMsg,
}: Readonly<{
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  placeholder: string;
  helpertext: string;
  errMsg: string;
}>) {
  return (
    <FormControl isInvalid={!!errMsg} className="pb-4">
      <FormLabel>{label}</FormLabel>
      <Input {...register(name)} type="text" placeholder={placeholder} />
      <FormHelperText>{helpertext}</FormHelperText>
      <FormErrorMessage>{errMsg}</FormErrorMessage>
    </FormControl>
  );
}
