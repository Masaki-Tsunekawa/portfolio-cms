import React from "react";
import Link from "next/link";
import { ProductsTable } from "@/app/_entries/components";

export default async function page() {
  const data = await fetch("http://localhost:3000/api/db/products/index", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const products = await data.json();

  return (
    <main className="bg-background text-foreground font-sans">
      <h1 className="text-2xl font-bold mb-4">備品一覧</h1>
      <div className="flex flex-col">
        <div className="w-full">
          <div className="bg-white shadow-md rounded p-4">
            <div
              id="search-form"
              className="flex flex-wrap items-center"
              role="form"
            >
              <legend className="text-lg font-semibold mb-2">検索</legend>
              <div className="flex items-center mb-4">
                <label className="sr-only" htmlFor="keywords"></label>
                <input
                  type="text"
                  id="keywords"
                  className="form-control w-full p-2 border border-gray-300 rounded"
                  placeholder="キーワード検索"
                  maxLength={30}
                />
              </div>
              <button
                type="button"
                id="search-btn"
                className="btn btn-info bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                検索
              </button>
              <Link
                href="/products/add"
                className="btn btn-info bg-blue-500 text-white p-2 rounded hover:bg-blue-700 ml-2"
              >
                登録
              </Link>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="panel-actions w-full"></div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-full">
              <div className="table-responsive">
                <div className="table-responsive">
                  <ProductsTable rows={products.rows} />
                </div>
                <div className="text-center"></div>
              </div>
              <div className="text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
