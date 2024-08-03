// src/components/Child.js
import React, { useState } from "react";

const Child = ({ message, sendDataToParent }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    sendDataToParent(e.target.value);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <p>Message from Parent: {message}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default Child;
