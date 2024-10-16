import React from "react";
import { Button } from "@chakra-ui/react";

export default function SubmitButton({
  isSubmitted,
  innerText,
}: Readonly<{
  isSubmitted: boolean;
  innerText: string;
}>) {
  return (
    <Button mt={4} colorScheme="teal" isLoading={isSubmitted} type="submit">
      {innerText}
    </Button>
  );
}
