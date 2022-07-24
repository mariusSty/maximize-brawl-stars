import React, { useState } from "react";
import { Header } from "./Header";
import { Player, PlayerStats } from "./models";
import { ResultWrapper } from "./ResultWrapper";
import { SearchForm } from "./SearchForm";
import { getPlayer } from "./server";
import { Spinner } from "./Spinner";
import { getPlayerStats as getPlayerStats } from "./utils";
import allBrawlers from "./brawlers";

function App() {
  const [playerStats, setPlayerStats] = useState<PlayerStats | undefined>(undefined);
  const [player, setPlayer] = useState<Player | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorTagInput, setErrorTagInput] = useState<string | undefined>(undefined);

  const handleSubmit = async (tag: string) => {
    setPlayerStats(undefined);
    setPlayer(undefined);
    setIsLoading(true);
    const playerData = await getPlayer(tag);
    const playerStatsCalculated = getPlayerStats(allBrawlers, playerData.brawlers);
    setPlayerStats(playerStatsCalculated);
    setPlayer(playerData);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col font-mono bg-slate-300 h-screen">
      <Header />
      <SearchForm findPlayer={handleSubmit} error={errorTagInput} setError={setErrorTagInput} setIsLoading={setIsLoading} />
      {
        isLoading &&
        <Spinner />
      }
      {
        player && playerStats && !isLoading &&
          <ResultWrapper player={player} playerStats={playerStats} />
      }
    </div>
  );
}

export default App;
