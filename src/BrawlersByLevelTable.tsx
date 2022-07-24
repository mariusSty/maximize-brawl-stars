import React from "react";
import { BrawlersByLevel } from "./models";

interface BrawlersByLevelTableProps {
    totalBrawlersByLevel: Array<BrawlersByLevel>
  }

export const BrawlersByLevelTable: React.FC<BrawlersByLevelTableProps> = ({totalBrawlersByLevel}) => {
  return (
    <tr>
      <td colSpan={3}>
        <table>

          {
            totalBrawlersByLevel.filter((count) => count.value !== 0).map((count)=>
              <tr key={count.level}>
                <td className="font-bold">Level {count.level}</td><td className="px-3"> : </td><td>{count.value} brawler(s)</td>
              </tr>)
          }
        </table>
      </td>
    </tr>
  );
};