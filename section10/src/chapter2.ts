// Exclude<T, U>
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;

// Extract<T, U>
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

// ReturnType<T>
type ReturnType<T extends (...arg: any) => any> = T extends (
  ...arg: any
) => infer R
  ? R
  : never;

type ReturnC = ReturnType<() => number>;
const func = (num: number) => {
  return true;
};
const funcB = (data: string[], hello: string) => {
  return data;
};
type ReturnB = ReturnType<typeof func>;

type ReturnA = ReturnType<typeof funcB>;
