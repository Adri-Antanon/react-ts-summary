import { useState } from "react";

export const Counter = ({ initialValue }: { initialValue: number }) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = (amount: number = 1): void => {
    setCounter((prevCounter) => prevCounter + amount);
  };

  const substractHandler = (amount: number = 1): void => {
    setCounter((prevCounter) => prevCounter - amount);
  };
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => substractHandler()}>-1</button>
    </>
  );
};
