import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" />
    </div>
  );
}
export default App;
