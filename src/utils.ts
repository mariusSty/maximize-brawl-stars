import { BrawlerPowerLevels, Brawler, PlayerStats,  BrawlersByLevel, UnlockedBrawler } from "./models";

const countBrawlersByLevel = (playerBrawlers: Array<UnlockedBrawler>): Array<BrawlersByLevel> => {
  const initialValues: Array<BrawlersByLevel> = [
    { level: BrawlerPowerLevels.One, value: 0 },
    { level: BrawlerPowerLevels.Two, value: 0 },
    { level: BrawlerPowerLevels.Three, value: 0 },
    { level: BrawlerPowerLevels.Four, value: 0 },
    { level: BrawlerPowerLevels.Five, value: 0 },
    { level: BrawlerPowerLevels.Six, value: 0 },
    { level: BrawlerPowerLevels.Seven, value: 0 },
    { level: BrawlerPowerLevels.Eight, value: 0 },
    { level: BrawlerPowerLevels.Nine, value: 0 },
    { level: BrawlerPowerLevels.Ten, value: 0 },
    { level: BrawlerPowerLevels.Eleven, value: 0 },
  ];
  playerBrawlers.forEach(playerBrawler => {
    const findValue = initialValues.find((value) => value.level === playerBrawler.power);
    if (findValue) findValue.value++;
  });
  return initialValues;
};

export const getPlayerStats = (allBrawlers: Array<Brawler>, playerBrawlers: Array<UnlockedBrawler>) => {
  const playerStats: PlayerStats = {
    playerBrawlers: playerBrawlers.length,
    playerGadgets: playerBrawlers.map((b => b.gadgets.length)).reduce((p, c) => p + c),
    playerStarPowers: playerBrawlers.map((b => b.starPowers.length)).reduce((p, c) => p + c),
    totalBrawlers: allBrawlers.length,
    totalGadgets: allBrawlers.map((b => b.gadgets.length)).reduce((p, c) => p + c),
    totalStarPowers:  allBrawlers.map((b => b.starPowers.length)).reduce((p, c) => p + c),
    totalBrawlersByLevel: countBrawlersByLevel(playerBrawlers)
  };
  return playerStats;
};

export const calculatePercentage = (value: number, total: number) => Math.round(value/total*100);
