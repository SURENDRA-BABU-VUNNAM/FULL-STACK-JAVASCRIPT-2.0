
let odd =[];
let even =[];

for (let index = 0; index <= 100 ; index++) {
    if (index%2 === 0 ) {
        even.push(index)
    } 
    else{
        odd.push(index)
    }
}

console.log(even);
console.log(odd);
