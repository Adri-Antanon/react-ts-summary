import { useState } from "react";
import Timer from "./Timer";

const FatherTimer = () => {
  const [miliseconds, setMiliseconds] = useState(1000);

  const milisecondsHandler = (amount: number) => {
    setMiliseconds(amount);
  };
  return (
    <>
      <span>Milisegundos {miliseconds}</span>
      <br />
      <button
        onClick={() => milisecondsHandler(1000)}
        className="btn btn-outline-success"
      >
        1000
      </button>
      <button
        onClick={() => milisecondsHandler(2000)}
        className="btn btn-outline-success"
      >
        2000
      </button>
      <Timer miliseconds={miliseconds} />
    </>
  );
};

export default FatherTimer;
