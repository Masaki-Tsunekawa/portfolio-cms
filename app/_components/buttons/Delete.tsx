import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function Delete({ url }: Readonly<{ url: string }>) {
  return (
    <>
      <Button colorScheme="red">
        <Link href={url}>Delte</Link>
      </Button>
    </>
  );
}
