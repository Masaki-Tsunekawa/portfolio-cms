import React from "react";
import { Tr, Th, Td } from "@chakra-ui/react";
import { Product } from "@/app/_entries/interfaces";
import { TableContent } from "@/app/_entries/components";
import { ItemContition, Status } from "@/app/_entries/enums";

const Detail: React.FC<Product> = ({
  name,
  quantity,
  item_condition,
  status,
  note,
}) => {
  return (
    <>
      <TableContent>
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
      </TableContent>
    </>
  );
};

export default Detail;
