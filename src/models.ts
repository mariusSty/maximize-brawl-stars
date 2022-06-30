export interface Accessory {
    id: number,
    name: string
  }
  
export interface StarPower {
    id: number,
    name: string
  }
  
export interface Brawlers {
    id: number,
    name: string,
    gadgets: Array<Accessory>,
    starPowers: Array<StarPower>
  }
  
export interface ResultInfos {
    totalBrawler: number,
    totalAccessory: number,
    totalStarPower: number,
    playerBrawler: number,
    playerAccessory: number,
    playerStarPower: number,
  }