import React from "react";
import { TableProps } from "@/app/_entries/types";

const Table: React.FC<TableProps> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <table className="table table-striped table-bordered">{children}</table>
  );
};

export default Table;
