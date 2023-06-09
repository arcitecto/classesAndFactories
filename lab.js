class Hamster {
  constructor(owner, name = "Jim", price) {
    this.owner = " ";
    this.name = name;
    this.price = 15;
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
  constructor(name = "Bob", age, height, weight, mood, hamsters, bankAccount) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
}
