import React from "react";
import { ThProps } from "@/app/_entries/types";

const Th: React.FC<ThProps> = ({ children }) => {
  return <th>{children}</th>;
};

export default Th;
