import React from "react";
import { headers } from "next/headers";
import { ProductDetail, Title, Delete, Edit } from "@/app/_entries/components";

export default async function Page({ params }: { params: { id: string } }) {
  const currentHeaders = headers();
  const host = currentHeaders.get("host");
  const protocol = process.env.NEXT_PUBLIC_PROTOCOL || "http";
  const id = params.id;
  const data = await fetch(
    `${protocol}://${host}/api/db/products/detail?id=${id}`,
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
      <Title title={`Product: ${product[0].name}`} />
      <Edit url={`${protocol}://${host}/api/db/products/edit?id=${id}`} />
      <Delete url={`${protocol}://${host}/api/db/products/delete?id=${id}`} />
      <ProductDetail {...product[0]} />
    </>
  );
}
