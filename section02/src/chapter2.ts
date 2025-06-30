// Array
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "i'm", "jin"];

let boolArr: Array<boolean> = [true, false, true];

let multiArr: (string | number)[] = [1, 2, 3, "hello", "world"];

// Multi Demensional Array
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Tuple (array with fixed type and fixed length, but actually it is just an array)
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "hello", true];

let tup3: [10, "hello", true] = [10, "hello", true];

// A usecase where Tuple can be useful
const users: [string, number][] = [
  ["lee", 20],
  ["mike", 30],
  ["peter", 40],
  ["jason", 50],
];

console.log(multiArr[2]);
