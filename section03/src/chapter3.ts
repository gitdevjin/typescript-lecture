function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let f: unknown;
  // let num: number = f; DownCasting impossible
}

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 1; assigning number to never type variable is impossible since it is upcasting
}

function voidExam() {
  function voidFunc(): void {
    console.log("void func");
  }

  let voidVar: void = undefined;
}

function anyExam() {
  let unknownVar: unknown;
  let anyVAr: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVAr = unknownVar; // it looks like downcasting but it is possible,

  undefinedVar = anyVAr; // it looks like downcasting but it is also possible,

  // neverVAr = anyVAr; // this is impossible
}
