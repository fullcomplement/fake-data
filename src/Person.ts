import { faker } from '@faker-js/faker';

export class Person {
   public firstName: string;
   public lastName: string;
   public age: number;
   public gender: string;

   constructor () {
      this.firstName = faker.person.firstName('male');
      this.lastName = faker.person.lastName();
      this.age = faker.number.int(105); 
      this.gender = faker.person.gender();
   }

}
