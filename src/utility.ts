type user = {
  id: number;
  name: string;
  email: string;
};

type Userprofile = Pick<user, "name" | "email">;

const res: Userprofile = {
  name: "saubhagya sapkota",
  email: "sau@gmail.com",
};

console.log(res);
