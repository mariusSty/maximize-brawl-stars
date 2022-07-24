import React from "react";
import { PlayerStats, Player } from "./models";
import brawlerImg from "./images/brawler.png";
import gadgetImg from "./images/gadget.webp";
import starPowerImg from "./images/starPower.webp";
import {calculatePercentage} from "./utils";
import { BrawlersByLevelTable } from "./BrawlersByLevelTable";

interface ResultWrapperProps {
  player: Player
  playerStats: PlayerStats
}

export const ResultWrapper: React.FC<ResultWrapperProps> = ({ player, playerStats }) => {
  return(
    <div className="px-32">
      {player && 
          <div className="text-2xl mb-6">{player.name} ({player.trophies}): </div>
      }
      {
        playerStats &&
          <table>
            <tbody>
              <tr>
                <td>
                  <img className="h-5 w-5" src={brawlerImg} alt="Brawler" />
                </td>
                <td>
                  <span className="px-4">Brawlers :</span>
                </td>
                <td>
                  <span className="px-4 font-bold">{calculatePercentage(playerStats.playerBrawlers, playerStats.totalBrawlers)}%</span>
                </td>
                <td>
                  <span>{playerStats.playerBrawlers} / {playerStats.totalBrawlers}</span>
                </td>
              </tr>
              <BrawlersByLevelTable totalBrawlersByLevel={playerStats.totalBrawlersByLevel}/>
              <tr>
                <td>
                  <img className="h-5 w-5" src={gadgetImg} alt="Accessory" />
                </td>
                <td>
                  <span className="px-4">Gadgets :</span>
                </td>
                <td>
                  <span className="px-4 font-bold">{calculatePercentage(playerStats.playerGadgets, playerStats.totalGadgets)}%</span>
                </td>
                <td>
                  <span>{playerStats.playerGadgets} / {playerStats.totalGadgets}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="h-5 w-5" src={starPowerImg} alt="Star Power" />
                </td>
                <td>
                  <span className="px-4">Pouvoirs Stars :</span>
                </td>
                <td>
                  <span className="px-4 font-bold">{calculatePercentage(playerStats.playerStarPowers, playerStats.totalStarPowers)}%</span>
                </td>
                <td>
                  <span>{playerStats.playerStarPowers} / {playerStats.totalStarPowers}</span>
                </td>
              </tr>
            </tbody>
          </table>
      }
    </div>
  );
};