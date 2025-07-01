// Function Type Expression
type Operation = (a: number, b: number) => number;

const add: Operation = function (a, b) {
  return a + b;
};

const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const devide: (a: number, b: number) => number = (a, b) => a / b;

// Call Signature
type Operation2 = {
  (a: number, b: number): number;
  customName?: string; // Call signature can have a property
};
let multiply2: Operation2 = (a, b) => a * b;
multiply2.customName = "hellooo";
console.log(multiply2.customName);
