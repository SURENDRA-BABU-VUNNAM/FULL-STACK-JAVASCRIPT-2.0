let Marks = prompt(`enter your age:`);

Marks = parseFloat(Marks);

if (Marks >= 80 && Marks <= 100) {
    console.log(`Your grade is A`);
} else if (Marks >= 70 && Marks <= 79) {
    console.log(`Your grade is B`);
} else if (Marks >= 60 && Marks <= 69) {
    console.log(`Your grade is C`);
} else if (Marks >= 50 && Marks <= 59) {
    console.log(`Your grade is B`);
} else{
    console.log(`You have Failed`);
}