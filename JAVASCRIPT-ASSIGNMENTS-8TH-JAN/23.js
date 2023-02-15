let num = prompt("Enter your number: ");
num = parseFloat(num)

// let num = 11;
if (num==1) {
    console.log(`The ${num} is not a Prime number`);
}
else if (num == 2 || num==3 || num==5) {
    console.log(`The ${num} is Prime number`);
} else if ((num-1)%6==0 || (num+1)%6==0) {
    console.log(`The ${num} is Prime number`);
} else {
    console.log(`The ${num} is not a Prime number`);
}


