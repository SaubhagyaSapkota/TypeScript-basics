// interface and type

interface person {
  name: string;
  employeeID: number;
}

interface developer extends person {
  skills: string[];
}

const emp: developer = {
  name: "saubhagya",
  employeeID: 25,
  skills: ["html", "css"],
};

//-----------------------------------
interface Box {
  width: number;
}
interface Box {
  height: number;
}

const box: Box = {
  height: 10,
  width: 20,
};
