import React from "react";
import Link from "next/link";
import { Product } from "@/app/_entries/interfaces";
import { TableContent } from "@/app/_entries/components";
import { ProductsTableProps } from "@/app/_entries/types";
import { Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { ItemContition, Status } from "@/app/_entries/enums";
import { headers } from "next/headers";

const ProductIndex: React.FC<ProductsTableProps> = ({ rows }) => {
  const currentHeaders = headers();
  const host = currentHeaders.get("host");
  const protocol = process.env.NEXT_PUBLIC_PROTOCOL || "http";

  return (
    <>
      <TableContent>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Quantity</Th>
            <Th>Condition</Th>
            <Th>Status</Th>
            <Th>Note</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row: Product) => (
            <Tr key={row.id}>
              <Td>{row.name}</Td>
              <Td>{row.quantity}</Td>
              <Td>{ItemContition[row.item_condition]}</Td>
              <Td>{Status[row.status]}</Td>
              <Td>{row.note}</Td>
              <Td isNumeric>
                <Link
                  href={`${protocol}://${host}/products/detail/${row.id}`}
                  className="text-sky-500 hover:underline"
                >
                  Detail
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </TableContent>
    </>
  );
};

export default ProductIndex;
