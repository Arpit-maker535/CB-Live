import React, { useState } from "react";
import "./App.css";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}</div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
