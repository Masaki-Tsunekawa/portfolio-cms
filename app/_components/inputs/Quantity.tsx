import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

const Quantity = ({
  register,
  placeholder,
  errMsg,
  name,
}: Readonly<{
  register: UseFormRegister<FieldValues>;
  errMsg: string;
  name: string;
  placeholder: string;
  helpertext: string;
}>) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 正の整数以外の入力を無効化
    if (!/^[1-9]\d*$/.test(value) && value !== "") {
      e.target.value = value.replace(/[^1-9\d]/g, ""); // 数字以外の文字を削除
    }
  };

  return (
    <FormControl isInvalid={!!errMsg} className="pb-4">
      <FormLabel>Quantity</FormLabel>
      <Input
        type="text"
        placeholder={placeholder}
        onInput={handleInput}
        {...register(name, {
          pattern: {
            value: /^[1-9]\d*$/,
            message: "Enter only integer",
          },
        })}
      />
      {<FormErrorMessage>{errMsg}</FormErrorMessage>}
    </FormControl>
  );
};

export default Quantity;
