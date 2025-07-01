// Function overloading

// Overload Signature
function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a: number, b?: number, c?: number) {
  if (typeof b === `number` && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

/** This is the wrong way
function myfunc(a: number): void {
  console.log("number param func");
}

function myfunc(b: string): void {
  console.log("string function");
}
  **/
