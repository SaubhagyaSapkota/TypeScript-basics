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
let x1 = 1;

function foo() {
  let x1 = 2;

  function bar() {
    console.log(x1); // 2 (from nearest scope)
  }

  bar();
}

foo();

//--------------------------------------

let y1 = 1;

function outer1() {
  function inner1() {
    y1 = 5; // Modifies global `x`
  }

  inner1();
}

outer1();
console.log(y1); // 5 ❗

console.log("hi i have autosaved and done");

// Let and Const

const user = { name: "saub" };

user.name = "sapko";
console.log(user)


//----------------------------------------------

//Scope Shadowding
let x = 10;

{
  let x = 20; // This shadows the outer x
  console.log(x); // ✅ 20 (inner x)
}

console.log(x); // ✅ 10 (outer x)

// //--------------------------------

var y = 10;

{
  var y = 20; // This shadows the outer x
  console.log(y); // ✅ 20 (inner x)
}

console.log(y); // ✅ 20 (outer x)