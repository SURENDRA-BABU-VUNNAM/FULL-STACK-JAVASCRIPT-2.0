// function add (number1,number2){
//     return number1+number2;
// }

// console.log(add(2,2));

// const mul = function (number1,number2) {
//     return number1*number2;
// }

// console.log(mul(4,4));

function myFunc(theObject) {
    theObject.make = 'Toyota';
    theObject.year = 1997
  };

const mycar ={
    make : `honda`,
};

const x = mycar.make;
console.log(x)

myFunc(mycar);

console.log(mycar);
