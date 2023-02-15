const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());

let min = ages[0]
console.log(min);

let max = ages[ages.length-1]
console.log(max);

if (ages.length%2==0) {
    let median = ( ages[(ages.length/2)]+ ages[(ages.length/2) + 1])/2
    console.log(median);
} else {
    let median = ages[(ages.length+1)/2]
    console.log(median);
}

let range = max-min;
console.log(range);

let element = 0;

for(let i=0 ; i< ages.length ; i++){
    element = element + ages[i]
}



let average = element/10
console.log(`avg ${average}`);

let minAverage = min - average;
console.log(minAverage);

let maxAverage = max -average;
console.log(maxAverage);