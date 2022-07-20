import React from "react";
import { ResultInfos } from "./models";
import brawlerImg from "./images/brawler.png";
import accessoryImg from "./images/accessory.webp";
import starPowerImg from "./images/starPower.webp";
import {calculatePercentage} from "./utils";

interface ResultWrapperProps {
  player: any;
  resultInfos?: ResultInfos
}

export const ResultWrapper: React.FC<ResultWrapperProps> = ({ player, resultInfos }) => {
  return(
    <div className="px-32">
      {player && 
          <div className="text-2xl mb-6">{player.name} : </div>
      }
      {
        resultInfos &&
          <div className="flex flex-row">
            <div className="flex flex-col justify-evenly mr-5">
              <img className="h-5 w-5" src={brawlerImg} alt="Brawler" />
              <img className="h-5 w-5" src={accessoryImg} alt="Accessory" />
              <img className="h-5 w-5" src={starPowerImg} alt="Star Power" />
            </div>
            <div className="flex flex-col mr-5">
              <span>Brawlers :</span>
              <span>Gadgets :</span>
              <span>Pouvoirs Stars :</span>
            </div>
            <div className="flex flex-col mr-5">
              <span className="font-bold">{calculatePercentage(resultInfos.playerBrawler, resultInfos.totalBrawler)}%</span>
              <span className="font-bold">{calculatePercentage(resultInfos.playerAccessory, resultInfos.totalAccessory)}%</span>
              <span className="font-bold">{calculatePercentage(resultInfos.playerStarPower, resultInfos.totalStarPower)}%</span>
            </div>
            <div className="flex flex-col">
              <span> {resultInfos.playerBrawler} / {resultInfos.totalBrawler}</span>
              <span> {resultInfos.playerAccessory} / {resultInfos.totalAccessory}</span>
              <span> {resultInfos.playerStarPower} / {resultInfos.totalStarPower}</span>
            </div>
          </div>
      }
    </div>
  );
};