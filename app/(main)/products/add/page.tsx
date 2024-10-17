import React from "react";
import { Title, ProductForm } from "@/app/_entries/components";
import { headers } from "next/headers";

export default function Page() {
  const currentHeaders = headers();
  const host = currentHeaders.get("host");
  const protocol = process.env.NEXT_PUBLIC_PROTOCOL || "http";

  return (
    <>
      <Title title="Add Product" />
      <ProductForm host={host || ""} protocol={protocol} />
    </>
  );
}
