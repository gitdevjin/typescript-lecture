// Type narrowing

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    //type guard
    value.toFixed();
  } else if (typeof value === "string") {
    value.toUpperCase();
  } else if (value instanceof Date) {
    value.getTime();
  } else if (value && "age" in value) {
    console.log(`${value.name} is ${value.age}`);
  }
}
