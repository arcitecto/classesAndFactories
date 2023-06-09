class Hamster {
  constructor() {
    this.owner = " ";
    this.name = "Jim";
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor() {
    this.name = "bob";
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 20;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log("Hello there! ", this.name, ". How are you?");
  }
  eat() {
    this.weight = this.weight + 1;
    this.mood = this.mood + 1;
  }
  exercise() {
    this.weight = this.weigth - 1;
  }
  ageUp() {
    this.age = this.age + 1;
    this.height = this.height + 1;
    this.weight = this.weight + 1;
    this.mood = this.mood - 1;
    this.bankAccount = this.bankAccount + 10;
  }
  buyHamster(hamster) {
    if (this.bankAccount >= hamster.getPrice()) {
      this.hamsters.push({ hamster });
      this.mood = this.mood + 10;
      this.bankAccount = this.bankAccount - hamster.getPrice();
      console.log("Hamster was bought.");
    } else {
      console.log("You don't have enough money to buy the hamster.");
    }
  }
}

let person = new Person();
let hamster1 = new Hamster();
person.buyHamster(hamster1);

let Timmy = new Person();
Timmy.age = 5;
console.log(Timmy.getAge());

console.log((Timmy.eat = 5));

console.log((Timmy.exercise = 5));

Timmy.age = Timmy.age + 9;
console.log(Timmy.getAge());

let Gus = new Hamster();
Gus.owner = "Timmy";

console.log(Timmy.buyHamster(Gus));

Timmy.age = Timmy.age + 15;
console.log(Timmy.getAge());

console.log((Timmy.eat = 2));

console.log((Timmy.exercise = 2));
