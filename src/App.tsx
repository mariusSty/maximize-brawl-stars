import React, { useState } from "react";
import { Header } from "./Header";
import { ResultInfos } from "./models";
import { ResultWrapper } from "./ResultWrapper";
import { SearchForm } from "./SearchForm";
import { getAllBrawlers, getPlayer } from "./server";
import { Spinner } from "./Spinner";
import { compareBrawler } from "./utils";

function App() {
  const [player, setPlayer] = useState(undefined);
  const [resultInfos, setResultInfos] = useState<ResultInfos | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorTagInput, setErrorTagInput] = useState<string | undefined>(undefined);

  const handleSubmit = async (tag: string) => {
    setResultInfos(undefined);
    setIsLoading(true);
    const playerInfos = await getPlayer(tag);
    const allBrawlers = await getAllBrawlers();
    const resultCompare = compareBrawler(allBrawlers.items, playerInfos.brawlers);
    setPlayer(playerInfos);
    setResultInfos(resultCompare);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col font-mono bg-slate-300 h-screen">
      <Header></Header>
      <SearchForm findPlayer={handleSubmit} error={errorTagInput} setError={setErrorTagInput} setIsLoading={setIsLoading}></SearchForm>
      {
        isLoading &&
        <Spinner />
      }
      {
        player && resultInfos && !isLoading &&
          <ResultWrapper player={player} resultInfos={resultInfos}></ResultWrapper>
      }
    </div>
  );
}

export default App;
