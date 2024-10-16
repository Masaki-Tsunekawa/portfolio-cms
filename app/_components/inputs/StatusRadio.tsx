import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  FormHelperText,
  Radio,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Status } from "@/app/_entries/enums";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function StatusRadio({
  register,
  name,
  errMsg,
}: Readonly<{
  name: string;
  errMsg: string;
  register: UseFormRegister<FieldValues>;
}>) {
  return (
    <>
      <FormControl as="fieldset" isInvalid={!!errMsg} className="pb-4">
        <FormLabel as="legend">Status</FormLabel>
        <RadioGroup defaultValue={String(Status.Enabled)}>
          <HStack spacing="24px">
            <Radio value={String(Status.Enabled)} {...register(name)}>
              Enabled
            </Radio>
            <Radio value={String(Status.Disabled)} {...register(name)}>
              Disabled
            </Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText></FormHelperText>
        <FormErrorMessage>{errMsg}</FormErrorMessage>
      </FormControl>
    </>
  );
}
