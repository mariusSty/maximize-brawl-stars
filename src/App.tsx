import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getPlayer } from "./server";

function App() {
  const testServer = () => {
    getPlayer();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <button onClick={testServer}></button>
      </header>
    </div>
  );
}

export default App;
