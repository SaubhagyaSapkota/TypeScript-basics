function outer() {
  const outerVar = "I’m outer";

  function inner() {
    const innerVar = "I’m inner";
    console.log(innerVar);
    console.log(outerVar); // ✅ Access outer variable
  }

  inner();
}

outer();

//-------------------------------------------
let x = 1;

function foo() {
  let x = 2;

  function bar() {
    console.log(x); // 2 (from nearest scope)
  }

  bar();
}

foo();

//--------------------------------------

let y = 1;

function outer1() {
  function inner1() {
    y = 5; // Modifies global `x`
  }

  inner1();
}

outer1();
console.log(y); // 5 ❗

console.log("hi i have autosaved and done");
