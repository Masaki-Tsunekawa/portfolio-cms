"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  Text,
  SubmitButton,
  Quantity,
  Title,
  Form,
  StatusRadio,
  SelectOption,
  NoteTextarea,
} from "@/app/_entries/components";
import { ItemContition } from "@/app/_entries/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/app/_schemas/Products";
import { headers } from "next/headers";

export default function Page() {
  let isSubmitted = false;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });
  const currentHeaders = headers();
  const host = currentHeaders.get("host");
  const protocol = process.env.NEXT_PUBLIC_PROTOCOL || "http";

  const onSubmit = async (data: FieldValues) => {
    isSubmitted = true;
    // console.log(data);

    await fetch(`${protocol}://${host}/api/db/products/add`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.errors) {
          console.log(res.errors);
        } else {
          window.location.href = `${protocol}://${host}/products/add`;
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        isSubmitted = false;
      });
  };

  return (
    <>
      <Title title="Add Product" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text
          register={register}
          label="Name"
          name="name"
          placeholder="Name"
          helpertext={""}
          errMsg={errors.name ? String(errors.name?.message) : ""}
        />
        <Quantity
          register={register}
          name="quantity"
          placeholder="Quantity"
          helpertext={""}
          errMsg={errors.quantity ? String(errors.quantity?.message) : ""}
        />
        <div className="pt-3">
          <StatusRadio
            register={register}
            name="status"
            errMsg={errors.status ? String(errors.status?.message) : ""}
          />
        </div>
        <SelectOption
          placeholder="Select condition"
          label="Condition"
          register={register}
          name="condition"
          errMsg={errors.status ? String(errors.status?.message) : ""}
        >
          {Object.keys(ItemContition)
            .filter((key) => isNaN(Number(key)))
            .map((key) => (
              <option
                key={ItemContition[key as keyof typeof ItemContition]}
                value={ItemContition[key as keyof typeof ItemContition]}
              >
                {key}
              </option>
            ))}
        </SelectOption>
        <NoteTextarea register={register} name="note" />
        <SubmitButton isSubmitted={isSubmitted} innerText="Add" />
      </Form>
    </>
  );
}
