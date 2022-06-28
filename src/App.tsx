import React from "react";
import { getPlayer } from "./server";

function App() {
  const testServer = () => {
    getPlayer();
  };

  return (
    <div>
      <button onClick={testServer}></button>
    </div>
  );
}

export default App;
