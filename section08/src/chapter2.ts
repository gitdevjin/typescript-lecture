// Mapped Type
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BoolUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

const testUser: ReadonlyUser = {
  id: 1,
  name: "jin",
  age: 30,
};

function fetchUser(): ReadonlyUser {
  ///
  return {
    id: 1,
    name: "jin",
    age: 30,
  };
}

function updateUser(user: User) {
  //...
}
