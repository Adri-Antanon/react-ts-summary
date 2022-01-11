import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { TLSSocket } from "tls";

const MAXIMUN_COUNT = 10;

export const CounterEffect: React.FC = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

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
    const timeline = gsap.timeline();

    timeline
      .to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(counterElement.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};
