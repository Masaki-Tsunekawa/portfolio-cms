import React from "react";
import { Product } from "@/app/_entries/interfaces";
import { ItemContition, Status } from "@/app/_entries/enums";
import { Table, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

const ProductDetail: React.FC<Product> = ({
  name,
  quantity,
  item_condition,
  status,
  note,
}) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Tr>
          <Th>Name</Th>
          <Td>{name}</Td>
        </Tr>
        <Tr>
          <Th>Quantity</Th>
          <Td>{quantity}</Td>
        </Tr>
        <Tr>
          <Th>Condition</Th>
          <Td>{ItemContition[item_condition]}</Td>
        </Tr>
        <Tr>
          <Th>Status</Th>
          <Td>{Status[status]}</Td>
        </Tr>
        <Tr>
          <Th>Note</Th>
          <Td>{note}</Td>
        </Tr>
      </Table>
    </TableContainer>
  );
};

export default ProductDetail;
