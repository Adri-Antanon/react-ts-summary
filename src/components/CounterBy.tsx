import { useState } from "react";

import { CounterProps, CounterStateProps } from "../interfaces";

export const CounterBy: React.FC<CounterProps> = ({ initialValue = 5 }) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterStateProps>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (amount: number = 1): void => {
    setCounterState((prevCounter) => ({
      counter: prevCounter.counter + amount,
      clicks: prevCounter.clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
