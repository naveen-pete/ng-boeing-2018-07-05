// parent, base, super
abstract class Animal {
  constructor(public name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

// child, derived, sub
class Dog extends Animal {
  constructor(name, public color = 'white') {
    super(name);
    this.color = color;
  }

  makeSound() {
    console.log('Bow');
  }

  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

class Lion extends Animal {
  constructor(name, public color = 'ochre') {
    super(name);
    this.color = color;
  }

  makeSound() {
    console.log('Grr..');
  }

  speak() {
    console.log(this.name + ' roars.');
  }
}

// const a = new Animal('snowy');
// a.speak();

const d = new Dog('tommy');
d.speak();
d.makeSound();

const l = new Lion('leo');
l.speak();
l.makeSound();
