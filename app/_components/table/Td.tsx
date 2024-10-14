import React from "react";
import { TdProps } from "@/app/_entries/types";

const Td: React.FC<TdProps> = ({ children }) => {
  return <td>{children}</td>;
};

export default Td;
