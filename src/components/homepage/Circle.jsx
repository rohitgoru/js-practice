"use client";
import React, { forwardRef } from "react";

const Circle = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="bg-red-700 h-14 w-14 rounded-full absolute left-0"
    ></div>
  );
});

export default Circle;
