import React, { useState } from "react";
import { Header } from "./Header";
import { ResultWrapper } from "./ResultWrapper";
import { SearchForm } from "./SearchForm";
import { getPlayer } from "./server";

function App() {
  const [player, setPlayer] = useState(undefined);
  const handleSubmit = async (tag: string) => {
    const playerInfos = await getPlayer(tag);
    setPlayer(playerInfos);
  };

  return (
    <div className="flex flex-col font-mono bg-slate-300 h-screen">
      <Header></Header>
      <SearchForm findPlayer={handleSubmit}></SearchForm>
      <ResultWrapper player={player}></ResultWrapper>
    </div>
  );
}

export default App;
