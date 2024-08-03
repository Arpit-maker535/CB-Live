// src/App.js
import React, { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [childData, setChildData] = useState("");
  const message = "Hello from Parent!";

  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div className="App">
      <h2>Parent Component</h2>
      <Child message={message} sendDataToParent={handleChildData} />
      <p>Data from Child: {childData}</p>
    </div>
  );
};

export default App;

// import React from "react";
// import ReactDOM from "react-dom";
// import "./App.css";

// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//   return (
//     <div className="App">
//       <Greeting name="Alice" />
//     </div>
//   );
// }
// export default App;
