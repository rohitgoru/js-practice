"use client";
import React, { useState } from "react";

const Header = () => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      setTasks([...tasks, name]);
      setName("");
    }
  };

  const clear = (taskIndex) => {
    console.log(taskIndex);

    // Filter out the task by its index
    const filteredTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(filteredTasks);
  };

  return (
    <div className="text-3xl text-red-700">
      <form onSubmit={submit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <div key={index}>
            <li>{task}</li>
            <button onClick={() => clear(index)}>Close</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Header;
