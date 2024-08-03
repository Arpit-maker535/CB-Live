// src/App.js
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Counter App with Theme</h1>
        <ThemeToggle />
        <Counter />
      </div>
    </ThemeProvider>
  );
};

export default App;
