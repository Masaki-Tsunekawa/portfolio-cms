export type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

export type TableProps = {
  children: React.ReactNode;
  rows: Product[];
};

import { Product } from "@/app/_entries/interfaces";
export type ProductsTableProps = {
  rows: Product[];
  host: string;
  protocol: string;
};

export type LoginFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export interface TrProps {
  children: React.ReactNode;
}

export interface ThProps {
  children: React.ReactNode;
}

export interface TdProps {
  children: React.ReactNode;
}
