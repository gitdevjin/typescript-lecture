//Infer(Inference)

type Func = () => string;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<Func>;

type FuncB = () => number;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

Promise;
//Example
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
type PromiseC = PromiseUnpack<Promise<() => void>>;
