import React from "react";
import { ResultInfos } from "./models";

interface ResultWrapperProps {
  player: any;
  resultInfos?: ResultInfos
}

export const ResultWrapper: React.FC<ResultWrapperProps> = ({ player, resultInfos }) => {
  return(
    <div className="px-32">
      {player && 
          <div>Le joueur {player.name} a été trouvé !</div>
      }
      {
        resultInfos &&
        <div className="flex flex-col">
          <span>Brawlers : {resultInfos.playerBrawler} / {resultInfos.totalBrawler}</span>
          <span>Gadgets : {resultInfos.playerAccessory} / {resultInfos.totalAccessory}</span>
          <span>Pouvoirs Stars : {resultInfos.playerStarPower} / {resultInfos.totalStarPower}</span>
        </div>
      }
    </div>
  );
};