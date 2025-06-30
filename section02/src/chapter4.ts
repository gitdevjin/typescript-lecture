type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "jin",
  nickname: "jin",
  birth: "2020.05.05",
  bio: "hello",
  location: "toronto",
};

type CountryCode = {
  [key: string]: string;
  Korea: "ko" | string;
};

let countryCodes: CountryCode = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

// Test 1
let newuser = {
  1234: "world",
  name: "hello",
};

newuser[1234] = "changed";
console.log(newuser[1234]);

// Test 2
type test = {
  [key: number]: string;
};

let testVariable: test = {
  1234: "hello",
};
