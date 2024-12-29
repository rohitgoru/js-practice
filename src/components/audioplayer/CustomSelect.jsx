"use client";
import React, { useState } from "react";
import { SelectIcon1, SelectIcon2, SelectIcon3 } from "../common/Icons";

const CustomSelect = () => {
  const options = [
    {
      label: "L'oca viatgera",
      icon: <SelectIcon1 />,
    },
    {
      label: "Trobades a la pissarra",
      icon: <SelectIcon2 />,
    },
    {
      label: "Trobades roit",
      icon: <SelectIcon3 />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative w-full max-w-[450px] mx-auto px-4 py-4">
        <button
          onClick={toggleDropdown}
          className="w-full text-gray-400 font-sans p-2.5 rounded-lg border-b-2 border-black bg-gray-25 text-base font-medium text-left flex justify-between items-center"
        >
          <span className="flex justify-center items-center gap-3 text-black">
            {selectedOption.icon}
            <span>{selectedOption.label}</span>
          </span>
        </button>
        {isOpen && (
          <ul className="text-black border-2 border-blue-500 absolute w-full bg-gray-25 mt-2 rounded-lg shadow-lg space-y-2 py-4 px-4">
            {options.map((option, index) => (
              <li
                key={index}
                className="flex items-center duration-300 group cursor-pointer"
                onClick={() => handleOptionSelect(option)}
              >
                {option.icon}
                <span className="ml-2">{option.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CustomSelect;
