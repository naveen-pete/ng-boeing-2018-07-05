function greet(salutation) {

  return function (name) {
    console.log(salutation + ', ' + name);
  }

}

const greetEnglish = greet('Hello');
const greetHindi = greet('Namaste');
const greetKannada = greet('Namaskara');

greetEnglish('Krish');
greetEnglish('Shiv');

greetKannada('Amar');

greetHindi('Ajit');