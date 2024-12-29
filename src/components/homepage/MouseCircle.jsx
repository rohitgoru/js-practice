"use client";
import React, { useRef } from "react";
import Circle from "./Circle";

const MouseCircle = () => {
  const move = useRef(null);
  const Circleref = useRef(null);

  const handle = (e) => {
    const circle = Circleref.current;
    setTimeout(() => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    }, 200);
  };

  return (
    <div onMouseMove={handle} className="h-screen relative">
      <Circle ref={Circleref} />
    </div>
  );
};

export default MouseCircle;
