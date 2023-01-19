// function add (number1,number2){
//     return number1+number2;
// }

// console.log(add(2,2));

// const mul = function (number1,number2) {
//     return number1*number2;
// }

// console.log(mul(4,4));

// function myFunc(theObject) {
//     theObject.make = 'Toyota';
//     theObject.year = 1997
//   };

// const mycar ={
//     make : `honda`,
// };

// const x = mycar.make;
// console.log(x)

// myFunc(mycar);

// console.log(mycar);

// function myArr (theArr) {
//   theArr[0] = 30;
//   theArr[1] = 83
// }

// const Arr = [45]; 

// console.log(Arr);

// myArr(Arr);

// console.log(Arr);

// const factorial = function fac(n) {
//   console.log(n);
//   return n < 2 ? 1 : n * fac(n - 1);
// }

// console.log(factorial(4));

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
const result = fnInside(5); // returns 8
const result1 = outside(3)(5); // returns 8

console.log(fnInside); 
console.log(result1);