import React from "react";
import Table from "./Table";
import Tr from "./Tr";
import Th from "./Th";
import Td from "./Td";
import { ProductsTableProps } from "@/app/_entries/types";
import { Product } from "@/app/_entries/interfaces";

const ProductsTable: React.FC<ProductsTableProps> = ({ rows }) => {
  return (
    <Table rows={rows}>
      <thead>
        <Tr>
          <Th>名前</Th>
          <Th>数量</Th>
          <Th>状態</Th>
          <Th>ステータス</Th>
          <Th>備考</Th>
        </Tr>
      </thead>
      <tbody>
        {rows.map((row: Product) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.quantity}</Td>
            <Td>{row.item_condition}</Td>
            <Td>{row.status}</Td>
            <Td>{row.note}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductsTable;
