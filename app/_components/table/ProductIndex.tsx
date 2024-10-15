import React from "react";
import Link from "next/link";
import { ProductsTableProps } from "@/app/_entries/types";
import { Product } from "@/app/_entries/interfaces";
import { ItemContition, Status } from "@/app/_entries/enums";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const ProductIndex: React.FC<ProductsTableProps> = ({ rows }) => {
  return (
    <TableContainer>
      <Table variant="simple">
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
                  href={`http://localhost:3000/products/detail/${row.id}`}
                  className="text-sky-500 hover:underline"
                >
                  Detail
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductIndex;
