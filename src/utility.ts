// Use Pick to create PublicUser type with only name and email.
type user = {
  id: number;
  name: string;
  email: string;
};

type PublicUser = Pick<user, "name" | "email">;

const res: PublicUser = {
  name: "saubhagya sapkota",
  email: "sau@gmail.com",
};

console.log(res);

// Use Omit to create a type without password

type Password = {
  id: number;
  name: string;
  password: string;
};

type withoutPassword = Omit<Password, "password">;

const res2: withoutPassword = {
  id: 12,
  name: "saubhagya",
  //   password: "okokok",
};
console.log(res2);
