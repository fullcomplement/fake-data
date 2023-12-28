import * as fs from 'fs';
import { Player } from './Player.js'
import { Team } from './Team.js';
import { ScoringEvent } from './ScoringEvent.js';
import { Lineup } from './Lineup.js';

export const generatePlayerData = (total: number):Player[] => {
   
         const players:Player[] = []

         const team = new Team();
         for (let i=0; i < total; i ++) {
         const player = new Player(team);
            players.push(player)
         }

         const contentArr = JSON.stringify(players);

         writeData("player.json", contentArr);

         return players;
}

export const generateTeamData = (total: number):Team[] => {

         const teams:Team[] = []

         for (let i=0; i < total; i ++) {
         const team = new Team();
            teams.push(team)
         }

         const contentArr = JSON.stringify(teams);

         writeData("teams.json", contentArr);
         
         return teams;
}

export const generateGameEvents = ():ScoringEvent[] => {

   const events:ScoringEvent[] = [];

   const inning = 1;

   const team = new Team();
   const oppTeam = new Team();

   const pitcher = new Player(oppTeam);

   for (let i =0; i < 9; i ++ ) {
      const player = new Player(team);
      const event = new ScoringEvent(inning, player, pitcher);
      events.push(event);
   }

   const contentArr = JSON.stringify(events);

   writeData("events.json", contentArr);

   return events;
}

export const generateLineup = (team:Team): Lineup => {
   
   const lineup = new Lineup(team);

   const contentArr = JSON.stringify(lineup);

   writeData("lineup.json", contentArr);

   return lineup;

}


const writeData = (filename:string, contentArr:string) => {
   
         fs.writeFile(filename, contentArr, (err) => {
            if (err) throw err;
               console.log(`${filename} created!`);
         });
}

