// Type Inference

/* in this case, you don't have to specify type cause it is infered by the initial value */
let a = 10;
let b = {
  name: "string",
  age: 30,
  married: false,
};

let { name, age, married } = b;

let [one, two, three] = [1, "world", false];

function func(message: string | number = "hello") {
  return "hello";
}
/* ******************************************************************************** */
let c;
c = 10;

const num = 10;
const str = "hello";

let arr = [1, "world"];
