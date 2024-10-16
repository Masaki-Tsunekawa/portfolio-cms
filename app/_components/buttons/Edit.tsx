import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function Edit({ url }: Readonly<{ url: string }>) {
  return (
    <>
      <Button colorScheme="blue">
        <Link href={url}>Edit</Link>
      </Button>
    </>
  );
}
