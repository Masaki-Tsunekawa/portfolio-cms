import React from "react";

export default function Title({ title }: Readonly<{ title: string }>) {
  return (
    <>
      <h1 className="text-4xl font-bold p-4">{title}</h1>
    </>
  );
}
