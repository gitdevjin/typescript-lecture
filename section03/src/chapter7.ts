// Type Assertion
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = "jin";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "cookie",
  color: "brown",
  breed: "golden retriever",
} as Dog;
console.log(dog);

// Type Assertion Rules
// A as B
// A should be supertype of B or subtype of B

let num1 = 10 as never; // 10 is supertype of never
let num2 = 10 as unknown; // 10 is subtype of unknown

// let num3 = 10 as string; // 1o is not supertype nor subtype of string

// const
let num4 = 10 as const;

let cat = {
  name: "catty",
  color: "yellow",
} as const;

// Not Null

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "post1",
  author: "ananoymous",
};

const len: number = post.author!.length;
