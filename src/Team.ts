import { faker } from '@faker-js/faker';
import { capitalizeStr, plural } from './helper_funcs.js';

export class Team {
   public city: string;
   public mascot: string;
   public owner: string; 

   constructor() {
      this.city = faker.location.city();
      this.mascot = plural(capitalizeStr(faker.animal.type()));
      this.owner = faker.person.fullName(); 
   }

   display() {
     console.log(this.city + " " + this.mascot);
   }

}


