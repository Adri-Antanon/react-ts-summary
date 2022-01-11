import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { useCounterProps } from "../interfaces/index";

export const useCounter = ({ maxCount = 1 }: useCounterProps) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);
  const timeline = useRef(gsap.timeline());

  const handleClick = (amount: number = 1): void => {
    setCounter((prevCounter) =>
      // prevCounter >= maxCount ? 10 : prevCounter + amount
      Math.min(prevCounter + 1, maxCount)
    );
  };

  useLayoutEffect(() => {
    // if (counter < maxCount) return;
    // console.log(
    //   "%cCounter llegó al valor máximo",
    //   "color: red; background-color: black"
    // );

    if (!elementToAnimate.current) {
      return;
    }

    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    timeline.current.play(0);
  }, [counter]);

  return { counter, elementToAnimate, handleClick };
};
