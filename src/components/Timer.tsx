import { useEffect, useRef, useState } from "react";

type TimerProps = {
  miliseconds: number;
};

const Timer: React.FC<TimerProps> = ({ miliseconds }) => {
  const [seconds, setSeconds] = useState(0);
  const myRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    myRef.current = setInterval(
      () => setSeconds((prevSeconds) => prevSeconds + 1),
      miliseconds
    );
    return () => {
      myRef.current && clearInterval(myRef.current);
    };
  }, [miliseconds]);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};

export default Timer;
