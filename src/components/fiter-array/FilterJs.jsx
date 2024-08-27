"use client";
import React, { useState } from "react";
import DataTable from "./DataTable";

const data = [
  { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", age: 23, email: "alice@example.com" },
  { id: 4, name: "Bob Brown", age: 45, email: "bob@example.com" },
  { id: 5, name: "Sunil", age: 45, email: "sunil@example.com" },
  { id: 6, name: "Tanu", age: 45, email: "tanu@example.com" },
];

const FilterJs = () => {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);

  const filteredArray = sortedData.filter((item) =>
    search.toLowerCase() === ""
      ? true
      : item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleSort = () => {
    const sortedArray = [...sortedData].sort((a, b) => b.age - a.age);
    setSortedData(sortedArray);
  };

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-12">
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleSort}
          className="text-[26px] font-semibold text-white bg-blue-500 px-6 rounded-md py-2"
        >
          Sort Data
        </button>
        <h1 className="text-2xl font-montserrat text-center text-purple-600 font-semibold py-2">
          Search
        </h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent py-3 px-3 rounded-md border-orange-400 border-2 text-black font-montserrat font-medium max-w-[600px] w-full"
        />
      </div>
      <div className="">
        <DataTable filteredArray={filteredArray} />
      </div>
    </div>
  );
};

export default FilterJs;
