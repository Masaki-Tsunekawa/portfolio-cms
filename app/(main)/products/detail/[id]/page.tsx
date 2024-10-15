import React from "react";
import Link from "next/link";
import { ProductDetail } from "@/app/_entries/components";
import { Button } from "@chakra-ui/react";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await fetch(
    `http://localhost:3000/api/db/products/detail?id=${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
  const product = await data.json();
  // console.log(product);

  return (
    <>
      <h1 className="text-4xl font-bold p-4">{product[0].name}</h1>
      <Button colorScheme="blue">
        <Link href={`http://localhost:3000/api/db/products/edit?id=${id}`}>
          Edit
        </Link>
      </Button>
      <Button colorScheme="red">
        <Link href={`http://localhost:3000/api/db/products/delete?id=${id}`}>
          Delte
        </Link>
      </Button>
      <ProductDetail {...product[0]} />
    </>
  );
}
