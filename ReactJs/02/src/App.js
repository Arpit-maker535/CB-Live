import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

// import React from 'react';

// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Greeting name="World" />
//     </div>
//   );
// }

// export default App;
