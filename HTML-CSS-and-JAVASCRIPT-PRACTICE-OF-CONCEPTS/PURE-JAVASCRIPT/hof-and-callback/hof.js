// for each

// let arr = ["BeyBlade","Pokemon","Dragon Ball","Naruto","Death Note","Code Geass","Steins-gate","Cowboy bebop","Parasyte","Hajime-no-ippo","one piece"];


// arr.forEach((val) =>{
//     setInterval(()=>{
//         console.log(val);
//     }, 3000)
//     console.log(val);
// })

// Map

// let num = [1,2,3,4,5,6]

// let res = num.map((num)=>{
//     return num**num
// });

// console.log(res);

// filter

// let arr = ["BeyBlade","Pokemon","Dragon Ball","Naruto","Death Note","Code Geass","Steins-gate","Cowboy bebop","Parasyte","Hajime-no-ippo","one piece"];

// const con = arr.filter((val)=> val.includes("o"));
// console.log(con);

// reduce

// let num = [1,2,3,4,5,6,7,8,9,10];

// let res =num.reduce((acc,curr) => acc+curr,0);
// console.log(res);

// find

// let num = [1,2,3,4,5,6,7,8,9,10];

// let find = num.find((val) => val > 3);
// console.log(find.findIndex());

// every

// let num = [1,2,3,4,5,6,7,8,9,10];

// let every = num.every((val)=> val>0)

// console.log(every);

// some

// let num = [1,2,3,4,5,6,7,8,9,10];

// let some = num.some((val)=> val>5)

// console.log(some);

// sort

// let arr = ["BeyBlade","Pokemon","Dragon Ball","Naruto","Death Note","Code Geass","Steins-gate","Cowboy bebop","Parasyte","Hajime-no-ippo","one piece"];

// console.log(arr.sort());
// console.log(arr.reverse());


// Destructuring

// let num = [1,2,3,4,5,6,7,8,9,10];

// let  [a,b,c,d,e,f,g,h,i,k] = num

// console.log(k);

// let num = [1,2,3];

// let [var1, ,var2] =num;

// console.log(var1,var2);


// Spread

// function sumone(x,y) {
//     return x+y
// }

// let num = [9,10]

// console.log(sumone(...num));

// Rest

// function sum(...args) {
//     let sum =0;
//     for (const x of args) {
//         sum= sum+x;
//     }
//     return sum
// }

// console.log(sum(1,2,3,4,5,6,7,8,9,10));


// try and catch

// try {
//     let first = "Surendra"
//     console.log(first + " "+ last);
// } catch (error) {
//     console.log(error.name);
// }finally{
//     console.log("I will run");
// }

// promise

let one = ()=>{
    return "this is one "
}

let two = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("credential correct")
        },3000)
    })
}

let three = ()=>{
    return "this is three "
}


let pri = async () =>{

    let valone =  one()
    console.log(valone);

    let valtwo = await two()
    console.log(valtwo);

    let valthree = three()
    console.log(valthree);

    
}

pri()