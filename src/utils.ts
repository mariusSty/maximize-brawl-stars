import { Brawlers, ResultInfos } from "./models";

export const compareBrawler = (allBrawlers: Array<Brawlers>, brawlersHad: Array<Brawlers>) => {
  const totalBrawler = allBrawlers.length;
  const totalAccessory = allBrawlers.map((b => b.gadgets.length)).reduce((p, c) => p + c);
  const totalStarPower = allBrawlers.map((b => b.starPowers.length)).reduce((p, c) => p + c);
  const playerBrawler = brawlersHad.length;
  const playerAccessory = brawlersHad.map((b => b.gadgets.length)).reduce((p, c) => p + c);
  const playerStarPower = brawlersHad.map((b => b.starPowers.length)).reduce((p, c) => p + c);
  const resultInfos: ResultInfos = {
    totalBrawler,
    totalAccessory,
    totalStarPower,
    playerBrawler,
    playerAccessory,
    playerStarPower,
  };
  return resultInfos;
};