// src/components/Counter.js
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Counter = () => {
  const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
