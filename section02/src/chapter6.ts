// any
let anyVar: any = 10;

let num: number = 10;
num = anyVar;

anyVar = "hello";
anyVar = {};
anyVar = () => {};

anyVar.toFixed();
anyVar.toUpperCase();

//unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// num = unknownVar <= Error

if (typeof unknownVar === "number") {
  num = unknownVar;
  unknownVar.toFixed();
}
