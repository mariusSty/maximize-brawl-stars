export interface Gadget {
    id: number,
    name: string
  }
  
export interface StarPower {
    id: number,
    name: string
  }
  
export interface Brawler {
    id: number,
    name: string,
    gadgets: Array<Gadget>,
    starPowers: Array<StarPower>
  }
  
export interface UnlockedBrawler extends Brawler {
   power: number
 } 

export enum BrawlerPowerLevels {
  One = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven
}

export interface BrawlersByLevel {
  level: BrawlerPowerLevels
  value: number
}

export interface Player {
  name: string,
  trophies: number,
  brawlers: Array<UnlockedBrawler>,
}

export interface PlayerStats {
  playerBrawlers: number,
  playerGadgets: number,
  playerStarPowers: number,
  totalBrawlers: number,
  totalGadgets: number,
  totalStarPowers: number,
  totalBrawlersByLevel: Array<BrawlersByLevel>
}