"use client";

import React from "react";
import Form from "./Form";
import {
  NoteTextarea,
  Quantity,
  SelectOption,
  StatusRadio,
  SubmitButton,
  Text,
} from "@/app/_entries/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/app/_schemas/Products";
import { FieldValues, useForm } from "react-hook-form";
import { ItemContition } from "@/app/_entries/enums";

export default function ProductForm({
  host,
  protocol,
}: Readonly<{ host: string; protocol: string }>) {
  let isSubmitted = false;
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });

  return (
    <>
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
