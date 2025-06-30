// Union Type
let var1: string | number;
var1 = 12345;
var1 = "hello world";

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "cookie",
  color: "yellow",
  language: "english",
};

let union2: Union1 = {
  name: "cookie",
  color: "yellow",
};

let union3: Union1 = {
  name: "cookie",
  language: "english",
};

// let union4: Union1 = {
//   color: "black",
//   language: "english",
// }; since both `Dog` and `Person` type has name, it requires `name` property

console.log(union1);

// Intersection Type
let variable: number & string;

type Intersection = Dog & Person;

let int1: Intersection = {
  name: "",
  color: "",
  language: "",
};
