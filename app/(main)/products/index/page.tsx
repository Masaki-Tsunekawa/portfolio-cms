import React from "react";
import { Add, ProductIndex, Title } from "@/app/_entries/components";
import { Search } from "@/app/_entries/components";

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
                <ProductIndex rows={products.rows} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
