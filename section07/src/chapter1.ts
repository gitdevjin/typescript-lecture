function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("string value", 2);

//// Example 2
function retrunFirstValueV1<T>(data: T[]) {
  return data[0];
}

function retrunFirstValueV2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let r = retrunFirstValueV1(["hello", 1, true]);
let e = retrunFirstValueV2([1, true]);
//
//
//
// Example 3
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("stringvalue");
let var3 = getLength({ name: "hello", length: 10 });
// let var4 = getLength(10); not possible since it doesn't have length property
