import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [message, setMessage] = useState(
    "Click the button to change this message"
  );

  const handleClick = () => {
    setMessage("Button clicked! Message has been changed.");
  };

  return (
    <div className="App">
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
