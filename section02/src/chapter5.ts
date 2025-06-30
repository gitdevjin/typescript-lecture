//enum type
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1: { name: string; role: Role } = {
  name: "jin",
  role: Role.ADMIN,
};
const user2 = {
  name: "lee",
  role: Role.USER,
};
const user3 = {
  name: "kim",
  role: Role.GUEST,
};
console.log(user1, user2, user3);
