class Hamster {
  constructor(owner = " ", name = "Jim", price = 15) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    console.log(this.price);
  }
}

class Person {
  constructor(
    name = "Bob",
    age = 0,
    height = 0,
    weight = 0,
    mood = 0,
    hamsters = [],
    bankAccount = 0
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamsters;
    this.bankAccount = bankAccount;
  }
  getName() {
    console.log(this.name);
  }
  getAge() {
    console.log(this.age);
  }
  getWeight() {
    console.log(this.weight);
  }
  greet() {
    console.log("Hello there! ", this.name, ". How are you?");
  }
  eat() {
    console.log(this.weight + 1);
    console.log(this.mood + 1);
  }
  exercise() {
    console.log(this.weight - 1);
  }
  ageUp() {
    console.log(this.age + 1);
    console.log(this.height + 1);
    console.log(this.weight + 1);
    console.log(this.mood - 1);
    console.log(this.bankAccount + 10);
  }
  buyHamster(hamster) {
    this.hamsters.push("hamster");
    console.log(this.hamsters);
    console.log(this.mood + 10);
    console.log(this.bankAccount - 15);
  }
}

let person = new Person("bob", 24, 6, 200, 50, [], 1000);
person.buyHamster();
