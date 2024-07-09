"use client";
import React, { useState } from "react";

const ObjectAddInArray = () => {
  const [typename, setname] = useState("");
  console.log(typename);
  const [random, setrandom] = useState(3);
  const [data, setdata] = useState([
    {
      id: 1,
      name: "rohit",
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      name: "sunil",
      like: 0,
      dislike: 0,
    },
  ]);

  const adddata = () => {
    setrandom(random + 1);
    setdata((a) => [...a, { id: random, name: typename, like: 0, dislike: 0 }]);
  };

  const handleremove = (id) => {
    setdata(data.filter((a) => a.id !== id));
  };

  const handlelike = (id, like) => {
    const new_data = data.map((item) =>
      item.id === id ? { ...item, like: like + 1 } : item
    );
    setdata(new_data);
  };

  const handledislike = (id, dislike) => {
    const new_data = data.map((item) =>
      item.id === id ? { ...item, dislike: dislike + 1 } : item
    );
    setdata(new_data);
  };

  const handlesort = () => {
    const sort_data = [...data].sort((a, b) => b.like - a.like);
    setdata(sort_data);
  };

  const clearData = () => {
    // Modify the following line to keep the first item(s)
    setdata(data.slice(0, 2)); // Keeps the first item in the array
  };

  console.log(data);

  return (
    <div className="max-w-[1120px] mx-auto px-4 py-20 flex flex-col justify-center items-center gap-4">
      <h2 className="text-green-600 text-2xl font-semibold text-center">
        Object Add In Array
      </h2>
      <button
        onClick={handlesort}
        className="text-[26px] font-semibold text-white bg-blue-500 px-6 rounded-md py-2"
      >
        sort data
      </button>
      <input
        onChange={(e) => setname(e.target.value)}
        className="outline-none bg-slate-600 border border-purple-500 px-4 py-2 rounded-md"
        type="text"
        placeholder="Add here"
      />
      <button
        onClick={adddata}
        className="text-[26px] font-semibold text-white bg-blue-500 px-6 rounded-md py-2"
      >
        Add more
      </button>
      <div>
        {data.map((item, index) => (
          <div className="flex items-center gap-3" key={item.id}>
            <h3 className="text-3xl font-mono font-semibold text-yellow-500 rounded-md border border-pink-600 px-6 py-3 mb-3">
              {item.name}
            </h3>
            <p>{item.like}</p>
            <p>{item.dislike}</p>
            <button onClick={() => handlelike(item.id, item.like)}>like</button>
            <button onClick={() => handledislike(item.id, item.dislike)}>
              dislike
            </button>
            <button
              onClick={() => handleremove(item.id)}
              className="bg-red-700 px-6 py-2 rounded-md"
            >
              delete
            </button>
            <button
              onClick={clearData}
              className="bg-red-700 px-6 py-2 rounded-md"
            >
              all data clear
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectAddInArray;
