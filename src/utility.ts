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

// Use Partial to define an updateUser() function

type Userpartial = {
  id: number;
  name: string;
  address: string;
};

type updateUserInput = Partial<Userpartial>;

const res3 = (data: updateUserInput) => {
  console.log(data);
};

res3({ name: "saubhagya" });

// use Record to define user access control map.

type Roles = "admin" | "doctor" | "patient";

const access: Record<Roles, string> = {
  admin: "aaa",
  doctor: "bbb",
  patient: "ccc",
};

console.log(access);

// Try Readonly on config object and try modifyling it.

type Config = {
  url: string;
};

const config: Readonly<Config> = {
  url: "https://api.example.com",
};

// config.url = "jdjdd"  // ❌ cannot do it

console.log(config);
