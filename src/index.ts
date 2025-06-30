// function greet(name: string): string {
//   return `hello ${name}`;
// }

// const nam = "saubhagya";
// console.log(nam);
// // -------------------------------------------

// let names: unknown;

// names = "string";
// names = 102;

// if (typeof names == "string") {
//   console.log(names.toUpperCase());
// }
// // -------------------------------------------
//union in TS
// let comp: string | number;

// comp = "hello";
// comp = 651;

// function handleInput(comp: string | number) {
//   if (typeof comp === "string") {
//     return console.log(comp.toUpperCase());
//   }
//   return console.log("haha");
// }

// handleInput(comp);
// // -------------------------------------------
// Array in TS
// let fruits: string[] = ["apple", "banana", "pine"];
// let nums: number[] = [1, 2, 3];
// let boo: boolean[] = [true, false];
// let mixed: (number | string)[] = ["apple", 2, 3, "mango"];

// console.log(fruits);
// console.log(nums);
// console.log(boo);
// console.log(mixed);

// 2D array
// let matrix: (number[] | string[] | boolean[])[] = [
//   [1, 2],
//   ["sab", "sap"],
//   [true, false],
// ];
// console.log(matrix);

// let matrix_1: [number, string][] = [
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ];
// console.log(matrix_1);

// // -------------------------------------------
// tuples in TS
// let user: [string, number] = ["mango", 20];
// console.log(user);

// type Log = [string, Date?, ...string[]];

// const errorLog: Log = ["Error", new Date(), "DB error", "Stacktrace"];
// const simpleLog: Log = ["Info"];

// console.log(errorLog);
// console.log(simpleLog);

// // -------------------------------------------
// Enums

// enum car {
//   BMW = 20,
//   honda = 7,
//   harley = 7,
//   ford,
// }

// console.log(car);

// const enum car {
//   BMW = 20,
//   honda = 7,
//   harley = 7,
//   ford,
// }

// console.log(car.BMW);
// console.log(car.ford);
