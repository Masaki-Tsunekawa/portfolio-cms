import React from "react";
import { TrProps } from "@/app/_entries/types";

const Tr: React.FC<TrProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default Tr;
