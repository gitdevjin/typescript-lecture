// Two interfcae with different names end up combined

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "hello",
  age: 30,
};

interface Lib {
  a: number;
  b: number;
}

const lib = {
  a: 1,
  b: 2,
};

interface Lib {
  a: number;
  b: number;
  c: number;
}

// ********* Experiment 1 **********//
class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const pet = new Dog("Fido");

console.log(pet instanceof Dog); // ✅ true
/** ********************************** **/
//
//
//
//
//
//

// ********* Experiment 2 **********//
type Cat = {
  name: string;
  meow: boolean;
};

const kitty: Cat = {
  name: "Whiskers",
  meow: true,
};

//console.log(kitty instanceof Cat); // ❌ Error: 'Cat' only refers to a type, but is being used as a value
