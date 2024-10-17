import React from "react";
import { headers } from "next/headers";
import { Search } from "@/app/_entries/components";
import { Add, ProductIndex, Title } from "@/app/_entries/components";

export default async function page() {
  const currentHeaders = headers();
  const host = currentHeaders.get("host");
  const protocol = process.env.NEXT_PUBLIC_PROTOCOL || "http";
  const data = await fetch(`${protocol}://${host}/api/db/products/index`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const products = await data.json();

  return (
    <>
      <Title title="Products" />
      <div className="flex flex-col">
        <div className="w-full">
          <div className="shadow-md rounded p-4">
            <div
              id="search-form"
              className="flex flex-wrap items-center"
              role="form"
            >
              <legend className="text-lg font-semibold">Search</legend>
              <div className="flex items-center">
                <input
                  type="text"
                  id="keywords"
                  className="w-full p-2 border border-gray-300 rounded ml-2"
                  placeholder="Fill in keywords"
                  maxLength={30}
                />
              </div>
              <Search url="" />
              <Add url="/products/add" />
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-8">
            <div className="w-full">
              <div className="table-responsive">
                <ProductIndex
                  rows={products.rows}
                  protocol={protocol}
                  host={host || ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
