"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [progressbar, setProgressbar] = useState(0);

  const handleClick = () => {
    if (progressbar < 100) {
      setProgressbar(progressbar + 20);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressbar((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          clearInterval(interval);

          return prevProgress;
        }
      });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  const handleReset = () => {
    setProgressbar(0);
  };

  const getColor = () => {
    if (progressbar < 40) {
      return "#00ff23"; // corrected color value
    } else if (progressbar < 60) {
      return "#ffa500"; // orange
    } else if (progressbar < 70) {
      return "#ff0000"; // red
    } else if (progressbar < 80) {
      return "#800080"; // yellow-green
    } else {
      return "#00ff";
    }
  };
  const bgcolor = getColor();

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="text-2xl font-mono font-bold text-green-600">
        ProgressBar
      </h1>
      <div className="bg-neutral-400 relative transition-all duration-500 ease-in-out h-6 rounded-lg w-[300px] py-3 ">
        <span
          className="transition-all duration-700 ease-in-out  rounded-lg flex absolute top-0 w-full h-full z-30"
          style={{ width: `${progressbar}%`, backgroundColor: bgcolor }}
        ></span>
      </div>
      <p className="text-lg font-mono font-semibold text-yellow-600">
        {progressbar}%
      </p>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleClick}
          className="text-red-600 font-bold text-lg px-8 py-2 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200 ease-in-out animate-bounce"
        >
          Progress
        </button>
        <button
          onClick={handleReset}
          className="text-red-600 font-bold text-lg px-8 py-2 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200 ease-in-out animate-bounce"
        >
          Reset
        </button>
      </div>
      <a target="_blank" href="https://www.youtube.com/watch?v=xAqCEBFGdYk">
        search fiter
      </a>
    </div>
  );
};

export default Hero;
