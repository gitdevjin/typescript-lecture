//Generic
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let str = func("strr");
let bool = func(true);

let arr = func([1, 2, 3]);
let tuple = func<[number, number, number]>([1, 2, 3]);
// let test = func<string>([1, 2, 3]); Not everything is possible, only when it is assignable
