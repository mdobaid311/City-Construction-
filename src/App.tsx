import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Site from "./components/Site/Site";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}

      {/* <Home /> */}
      <Site />
    </div>
  );
}

export default App;
