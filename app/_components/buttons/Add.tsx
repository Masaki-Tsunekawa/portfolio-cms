import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function AddButton({ url }: Readonly<{ url: string }>) {
  return (
    <>
      <Button className="ml-2" colorScheme="blue">
        <Link href={url}>Add</Link>
      </Button>
    </>
  );
}
