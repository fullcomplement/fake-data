import * as fs from 'fs';
import { faker } from '@faker-js/faker';
import { Player } from './Player.js';
import { Team } from './Team.js';
import { ScoringEvent } from './ScoringEvent.js'
import { Lineup } from './Lineup.js';
import { generatePlayerData, generateTeamData, 
   generateGameEvents, generateLineup } from './generators.js';

export class DataGenerator {

   private typeOfData: string = "player";
   private  total: number = 1;

   setType(type:string) {
      this.typeOfData = type;
   }

   setTotal(num:number) {
      this.total = num;
   }

   playerData(): Player[] {
     return generatePlayerData(this.total);
   }

   teamData():Team[] {
     return generateTeamData(this.total);
   }

   gameEvents(): ScoringEvent[] {
     return generateGameEvents();
   }

   lineup(team:Team): Lineup {
      return generateLineup(team);
   }

}



