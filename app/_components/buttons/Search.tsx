import React from "react";
import { Button } from "@chakra-ui/react";

export default function Search({ url }: Readonly<{ url: string }>) {
  console.log(url);
  return (
    <>
      <Button className="ml-2" colorScheme="blue">
        Search
      </Button>
    </>
  );
}
