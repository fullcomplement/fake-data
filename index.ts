import * as fs from 'fs';
import { DataGenerator } from './src/DataGenerator.js';
import { Player } from './src/Player.js';
import { Team } from './src/Team.js';
import { ScoringEvent } from './src/ScoringEvent.js'
import { Lineup } from './src/Lineup.js';

const args = process.argv;
const dataType = args[2];
const total = parseInt(args[3]);
const generator = new DataGenerator();

console.log(args);

if (args.length == 4) {

   generator.setType(dataType);
   generator.setTotal(total);

   if (dataType == "player") {
      const players:Player[] = generator.playerData();
      console.log(players);
   } 

   if (dataType == "team") {
      const teams:Team[] = generator.teamData();
      console.log(teams);
   } 

   if (dataType == "events") {
      const events:ScoringEvent[] = generator.gameEvents();
      console.log(events);
   }

   if (dataType == "lineup") {
      const team = new Team();
      const lineup:Lineup = generator.lineup(team);
      console.log(lineup);
   }

} else {
   console.log("Please provide type and total");
}

