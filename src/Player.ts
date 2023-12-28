import { faker } from '@faker-js/faker';
import { Team } from './Team.js';

export class Player {
   public name: string; 
   public position: string;
   public number: number;
   public team: Team;

   constructor(team: Team) {
      this.name = faker.person.firstName('male') + " " + faker.person.lastName();
      this.position = faker.string.alpha(2).toUpperCase();
      this.number = parseInt(faker.string.numeric(2));
      this.team = team;
   }

   getName() {
      return this.name;
   }

  display() {
     console.log(this.name, this.position, this.number, this.team)
  }

}

