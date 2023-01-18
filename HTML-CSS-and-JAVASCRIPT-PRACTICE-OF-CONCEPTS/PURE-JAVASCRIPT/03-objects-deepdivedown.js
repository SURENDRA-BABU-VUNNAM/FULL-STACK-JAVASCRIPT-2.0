// const a = [1,2,3,4];
// console.log(typeof a);

// from the above example we can see that every thing is an object or instance of object and it can be seen that it inherts its properties form its prototype

// syntax of creating a new object

// new Object (value);
// or
// Object (value);
//  value is any parameters

// const o = new Object();
// o.foo = function surendra(name) {
//     console.log(`the name is ${name}`);
// };

// o.loo = [1,2,3,4,5];

// o.poo = new Object ();


// o.poo.tame ="lion"

// console.log(o);

// static methods

// Object.assign()

// const apple = {a1 :1 ,a2:2};
// const bananna = {a2:3, b2:4};

// const campa = Object.assign(apple,bananna)

// console.log(campa);
// console.log(apple);

// Object.create()

// const fruit = {
//     isGood :false,
//     printAbout : function() {
//         console.log(`an ${this.name} keeps doctor away. this is ${this.isGood}`);
//     }
// }

// const apple = Object.create(fruit)

// apple.isGood = true;
// apple.name = "apple"

// console.log(apple);

// apple.printAbout();

// const object1 = {};

// Object.defineProperty(object1, "property1", {
//     get : () => 42,
//     enumerable: true,
//     configurable: false,
//     writable : false,
// })

// console.log(object1.property1);



// Object.defineProperty(object1, "property2", {
//     value: 73,
//     writable: true
// } )

// object1.property2 = 88;

// console.log(object1.property2);

// let myHeros = ["thor", "spiderman"]
// let dcHeros = ["batman", "black adam", "superman"]


// let heropower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.surendra = function () {
//     console.log(`hey surendra babu`);
// }

// Object.prototype.babu = function() {
//     console.log(`hey babu`);
// }

// myHeros.surendra().babu()

// const User = {
//     name: "top name",
//     email: "topuser@gmail.com"
// }

// const Teacher = {
//     makeVideos: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TSAssistant = {
//     makeAssignment: 'JS assigment',
//     fullTime: true,
//     // way one
//     __proto__: TeachingSupport
// }

//  way two

// Teacher.__proto__ = User

// way three

// Object.setPrototypeOf(User, TSAssistant)
// Object.setPrototypeOf(TSAssistant, User)



let myName ="vunnam        "

String.prototype.trueLength = function (){
    console.log(`the actual length is ${this.length}`);
    console.log(`the true length is ${this.trim().length}` );
}