type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "Tiger",
  color: "yellow",
};

let dog: Dog = {
  name: "Oreo",
  color: "black and white",
  breed: "Jindo",
};
animal = dog;
// dog = animal; dog has property that Animal type doesn't have
console.log(animal);

type Book = {
  title: string;
  price: number;
};

type ProgrammingBook = {
  title: string;
  price: number;
  skill: string;
};

//
let book: Book;
let programmingBook: ProgrammingBook = {
  title: "jin-book",
  price: 33,
  skill: "typescript",
};
book = programmingBook;

// let book2: Book = {
//   title: "jin-book",
//   price: 33,
//   skill: "typescript",
// } this is not possible

let book3: Book = programmingBook; // this is possible

function func(book: Book) {}
// func({ title: "jin-book", price: 33, skill: "typescript" }); this is not possible
func(programmingBook); // this is possible
