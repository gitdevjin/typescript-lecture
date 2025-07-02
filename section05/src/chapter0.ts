//Interface

interface Person {
  readonly name: string;
  age?: number;
  sayHi: (name: string) => void;
  sayBye(): void; // To do function overloaindg you must use function call signature
  sayBye(name: string): void;
}

const person: Person = {
  name: "lee",
  age: 30,
  sayHi: (name) => {
    console.log(`hi ${name}`);
  },
  sayBye: (name?) => {
    console.log(`bye ${name}`);
  },
};

// person.name = "kim"; Readonly
const person2 = {
  name: "lee",
  age: 30,
  sayHi: (name) => {
    console.log(`hi ${name}`);
  },
  sayBye: () => {
    console.log("bye");
  },
  extra: "hello",
} as Person;

person.sayHi("kim");
