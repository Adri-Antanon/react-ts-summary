import { useEffect, useState } from "react";

const MAXIMUN_COUNT = 10;

export const CounterEffect: React.FC = () => {
  const [counter, setCounter] = useState(5);

  const handleClick = (amount: number = 1): void => {
    setCounter((prevCounter) =>
      // prevCounter >= MAXIMUN_COUNT ? 10 : prevCounter + amount
      Math.min(prevCounter + 1, MAXIMUN_COUNT)
    );
  };

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return;
    console.log(
      "%cCounter llegó al valor máximo",
      "color: red; background-color: black"
    );
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};
