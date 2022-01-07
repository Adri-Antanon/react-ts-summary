import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = (amount: number = 1): void => {
    setCounter((prevCounter) => prevCounter + amount);
  };

  const resetHandler = () => {
    setCounter(0);
  };
  return (
    <div className="mt-5">
      <h2>useState</h2>
      <h3>Counter</h3>
      <span>Valor: {counter}</span>
      <br />
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementHandler()}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementHandler(2)}
      >
        +2
      </button>
      <button className="btn btn-outline-danger mt-2" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};
