interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // in can inherit not only from interface but also from type
  barks: boolean;
}

interface Cat extends Animal {
  meow: boolean;
}
interface Jindo extends Dog {
  age: 3; // overriding is possible but it must be subtype for that of parent.
  from: string;
}

let dog: Dog = {
  name: "cookie",
  age: 5,
  barks: false,
};

let jindo: Jindo = {
  name: "jindol",
  age: 3,
  barks: true,
  from: "jindo",
};

dog = jindo;
// jindo = dog; not possible since it is downcasting

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "nyang",
  age: 3,
  barks: true,
  meow: true,
};

type TestType = {
  name: string;
};
const abcd: TestType = {
  name: "abcd",
};

console.log(typeof abcd); // just gives object
