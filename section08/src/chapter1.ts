// Keyof

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "jin",
  age: 30,
};

function getPropertykey(person: Person, key: keyof Person) {
  return person[key];
}

function getPropertykeyV2(person: Person, key: keyof typeof person) {
  return person[key];
}

getPropertykey(person, "name");

///
///
/// typeof can be used to define a type
const human = {
  name: "jin",
  age: 30,
};

type Human = typeof human;
