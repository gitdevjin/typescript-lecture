//enum type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
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
export {};
