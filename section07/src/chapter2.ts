// map method
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
const arr = [1, 2, 3, 4, 5];
const result = map(arr, (it) => it * 2);
console.log(result);
const arr2 = ["1", "2", "3", "4"];
const strResult = map(arr2, (it) => it + "2");
console.log(strResult);

const typeChange = map(arr2, (it) => parseInt(it));
console.log(typeChange);

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr, (it) => console.log(it.toFixed()));
