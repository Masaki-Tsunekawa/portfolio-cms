import React from "react";
import Link from "next/link";
import { ProductIndex } from "@/app/_entries/components";
import { Button } from "@chakra-ui/react";

export default async function page() {
  const data = await fetch("http://localhost:3000/api/db/products/index", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const products = await data.json();

  return (
    <>
      <h1 className="text-4xl font-bold p-4">Products</h1>
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
                <label className="sr-only" htmlFor="keywords"></label>
                <input
                  type="text"
                  id="keywords"
                  className="w-full p-2 border border-gray-300 rounded ml-2"
                  placeholder="Fill in keywords"
                  maxLength={30}
                />
              </div>
              <Button className="ml-2" colorScheme="blue">
                Search
              </Button>
              <Button className="ml-2" colorScheme="blue">
                <Link href="/products/add">Add Product</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-8">
            <div className="w-full">
              <div className="table-responsive">
                <ProductIndex rows={products.rows} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
