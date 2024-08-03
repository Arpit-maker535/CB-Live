// src/components/EffectExamples.js
import React, { useState, useEffect } from "react";

const EffectExamples = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Example 1: useEffect with an empty dependency array - runs once after initial render
  useEffect(() => {
    console.log("Component mounted");
  }, []); // This runs only once after the initial render

  // Example 2: useEffect with no dependency array - runs on every render
  useEffect(() => {
    console.log("Component re-rendered");
  });

  // Example 3: useEffect with a single dependency - runs when `count` changes
  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]); // This runs every time `count` changes

  // Example 4: useEffect with cleanup - runs when component unmounts
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer cleared");
    };
  }, []); // This runs only once after the initial render and sets up a timer

  // Example 5: useEffect to fetch data when component mounts and when `count` changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [count]); // This runs once after initial render and every time `count` changes

  return (
    <div>
      <h2>useEffect Examples</h2>
      <div>
        <h3>Example 1: Component Mounted</h3>
        <p>Check the console for the "Component mounted" message.</p>
      </div>
      <div>
        <h3>Example 2: Component Re-rendered</h3>
        <p>Check the console for the "Component re-rendered" message.</p>
      </div>
      <div>
        <h3>Example 3: Count Changed</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Check the console for the "Count changed" message.</p>
      </div>
      <div>
        <h3>Example 4: Fetch Data</h3>
        <p>Data: {data ? JSON.stringify(data) : "Loading..."}</p>
        <p>Check the console for any errors during data fetching.</p>
      </div>
    </div>
  );
};

export default EffectExamples;
