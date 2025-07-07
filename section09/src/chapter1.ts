/// Distrubutive Conditional Types
// To prevent Distributive Conditionals use [] around the types
type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// the type of c becoems what each of conditional results is uninoned
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

/// Practical Example,
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// Exclude<number, string> -> number
// Exclude<string, string> -> never
// Exclude<boolean, string> -> boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
