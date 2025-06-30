// function logMessage(message: string, user?: string) {
//   console.log(`${user ? user + ": " : ""}${message}`);
// }

// logMessage("system started");
// logMessage("System error", "Admin");

//------------------------------------

// function sum(...numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0);
// }

// let total = sum(1, 2, 3, 4); // 10
// console.log(total);

//---------------------------------------

// function multiply(x: number, y: number): number {
//   return x * y; // inferred as number
// }

// console.log(multiply(2, 3));

//--------------------------------------------

function logError(msg: string): void {
  console.error(msg);
}

function throwError(): never {
  throw new Error("Unexpected error");
}

console.log(logError("hi"));
