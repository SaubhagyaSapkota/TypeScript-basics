// insertion sort

// function insertionSort(array) {
//   const len = array.length;
//   for (let i = 1; i < len; i++) {
//     let key = array[i];
//     let j = i - 1;
//     // console.log(j);

//     while (j >= 0 && array[j] > key) {
//       array[j + 1] = array[j];
//       j = j - 1;
//       //   console.log(j);
//     }
//     array[j + 1] = key;
//     // console.log(array[j + 1]);
//   }
//   return array;
// }
// function printArray(array) {
//   console.log(array.join(" "));
// }
// let array = [15, 11, 5, 1, 4];

// insertionSort(array);
// printArray(array);

//-------------------------------------------------------------------

// searching algorithm
// second largest in an array

function getSecondLargest(arr) {
  let n = arr.length;

  arr.sort((a, b) => a - b);
  console.log(arr);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] !== arr[n - 1]) {
      return arr[i];
    }
  }
  return -1;
}

const arr = [12, 35, 1, 10, 35, 1];
console.log(getSecondLargest(arr));

//------------------------------------------------

// function reverse(str, len) {
//   if (len < 1) {
//     return;
//   }
//   if (len === 1) {
//     return str[0];
//   }

//   return str[len - 1] + reverse(str, len - 1);
// }

// let str = "this is recursion";
// console.log(reverse(str, str.length));

//--------------------------------------------------

// basic string algorithm

// palindorme check

// function checkPalindrome(string) {
//   const len = string.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindorme.";
// }

// const string = "haHahaha";

// const value = checkPalindrome(string.toLowerCase());

// console.log(value);
