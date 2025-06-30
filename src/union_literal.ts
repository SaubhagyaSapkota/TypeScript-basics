function logStatus(status: "success" | "error" | "loading") {
  if (status == "success") {
    console.log("status was a success");
  } else if (status == "error") {
    console.log("status has a error");
  } else {
    console.log("status is a loading");
  }
}

logStatus("success");

let response: string | number;
response = "this";
// response = 555

if (typeof response == "string") {
  console.log("this is a string");
} else if (typeof response == "number") {
  console.log("this is a number");
}
