// Generic Interface
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "keyy",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2"],
};

// Index Signature
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 1234,
  key2: 12341234,
};

interface Map<V> {
  [asdf: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
  randomName: "hello",
};

console.log(stringMap.key);

let boolMap: Map<boolean> = {
  key: true,
};
//
//
//
//
// Generic Type Alias
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  hello: "world",
};

//Usage
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

let studentUser: User<Student> = {
  name: "lee",
  profile: {
    type: "student",
    school: "seneca",
  },
};

let developerUser: User<Developer> = {
  name: "kim",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

function goToSchool(user: User<Student>) {
  console.log(`go to ${user.profile.school}`);
}

goToSchool(studentUser);
