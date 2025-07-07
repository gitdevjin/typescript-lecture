// Conditional Types

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// Example 2
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number> = "hello world";

let varB: StringNumberSwitch<string> = 3;
function removeSpace<T>(text: T): T extends string ? string : undefined;

function removeSpace<T>(text: T) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpace("hi my name is jin");
result.toUpperCase();

let result2 = removeSpace(1234);
