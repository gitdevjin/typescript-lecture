function genericArray<T, U>(data: (T | U)[]) {
  data.forEach((item) => {
    console.log(item);
  });
}

genericArray([1, 2, 3, "hello", true]);

interface Map<V> {
  [key: string]: V;
}

const map1: Map<number> = {
  hello: 1,
  world: 2,
};

interface Person {
  name: string;
  age: number;
  location: string; // 추가
}

function getPropertyKey<T>(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
  location: "london",
};

const var1 = getPropertyKey(person, "name");
