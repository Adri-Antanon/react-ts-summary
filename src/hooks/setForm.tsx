import { useState, ChangeEvent } from "react";

export const useForm = <T extends object>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const inputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    inputHandler,
    ...form,
  };
};
