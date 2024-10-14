export interface TextInputProps {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Product {
  id: string | null;
  name: string;
  quantity: number;
  item_condition: number;
  status: number;
  note: string;
  date_of_insert: Date;
  insert_workers_id: number;
  date_of_update: Date | null;
  update_workers_id: number | null;
}
