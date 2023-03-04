import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Edwin Wanjuki",
    email: "edwin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Eric Nderitu",
    email: "eric@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;