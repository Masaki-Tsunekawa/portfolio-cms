import React from "react";
import { Textarea, FormControl, Text } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function NoteTextarea({
  register,
  name,
  placeholder,
}: Readonly<{
  register: UseFormRegister<FieldValues>;
  name: string;
  placeholder?: string;
}>) {
  return (
    <>
      <FormControl mt="8px">
        <Text mb="8px">Note: </Text>
        <Textarea {...register(name)} placeholder={placeholder} />
      </FormControl>
    </>
  );
}
