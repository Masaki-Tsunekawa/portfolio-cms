import React from "react";
import { ProductDetail, Title, Delete, Edit } from "@/app/_entries/components";

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
      <Title title={`Product: ${product[0].name}`} />
      <Edit url={`http://localhost:3000/api/db/products/edit?id=${id}`} />
      <Delete url={`http://localhost:3000/api/db/products/delete?id=${id}`} />
      <ProductDetail {...product[0]} />
    </>
  );
}
