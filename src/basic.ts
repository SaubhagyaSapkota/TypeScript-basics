let full_name: string = "saubhagya";
let age: number = 105;
let locations: string = "samakhusi";

function isAdult(age: number): boolean {
  if (age >= 18) {
    return true;
  }
  return false;
}

let result = isAdult(age);
console.log(result);
