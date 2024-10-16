import React from "react";
import { Button } from "@chakra-ui/react";

export default function Search({ url }: Readonly<{ url: string }>) {
  return (
    <>
      <Button className="ml-2" colorScheme="blue">
        Search
      </Button>
    </>
  );
}
