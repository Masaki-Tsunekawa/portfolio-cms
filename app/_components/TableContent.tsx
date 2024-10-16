import React from "react";
import { Table, TableContainer } from "@chakra-ui/react";

const TableContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">{children}</Table>
      </TableContainer>
    </>
  );
};

export default TableContent;
