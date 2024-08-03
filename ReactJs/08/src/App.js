// src/App.js
import React from "react";
import Clock from "./components/Clock";
import Search from "./components/Search";
import EffectExamples from "./components/EffectExamples";

const App = () => {
  return (
    <div className="App">
      <Clock />
      <Search />
      <EffectExamples />
    </div>
  );
};

export default App;
