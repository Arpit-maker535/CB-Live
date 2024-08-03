// src/components/Clock.js
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []); // Runs only once after initial render

  return (
    <div>
      <h2>Current Date and Time</h2>
      <p>{date.toLocaleString()}</p>
    </div>
  );
};

export default Clock;
