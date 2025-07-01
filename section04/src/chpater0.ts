// Function Type Definition
function func(a: number, b: number): number {
  return a + b;
}

// Arrow function
const add = (a: number, b: number): number => a + b;

function introduce(name = "name", height?: number) {
  console.log(`name: ${name}`);
  if (typeof height === "number") {
    console.log(`height: ${height + 10}`);
  }
}

introduce("jin");

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((i) => (sum = sum + i));
  return sum;
}
