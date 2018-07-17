abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log('  Roaming around Bengaluru in Namma Metro!');
  }
}

class Dog extends Animal {
  constructor() {
    super();
    console.log('Dog object created..');
  }

  makeSound() {
    console.log('  Bow-wow');
  }
}

class Cat extends Animal {
  constructor() {
    super();
    console.log('Cat object created..');
  }

  makeSound() {
    console.log('  Meow');
  }
}

class Duck extends Animal {
  constructor() {
    super();
    console.log('Duck object created..');
  }

  makeSound() {
    console.log('  Quack quack');
  }
}

// const a = new Animal();

const d = new Dog();
d.makeSound();
d.move();

console.log('-------------');
const c = new Cat();
c.makeSound();
c.move();

console.log('-------------');
const dk = new Duck();
dk.makeSound();
dk.move();
