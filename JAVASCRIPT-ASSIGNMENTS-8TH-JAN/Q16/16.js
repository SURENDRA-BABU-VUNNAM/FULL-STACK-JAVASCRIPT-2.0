let month = prompt(`Enter your month`);

month = month.toLowerCase().trim();

if (month== `september` || month==`october` || month==`november` ) {
    console.log(`The season is Autumn.`);
} else if (month== `december` || month==`january` || month==`february` ) {
    console.log(`The season is Winter.`);
} else if (month== `march` || month==`april` || month==`may` ) {
    console.log(`The season is spring.`);
} else if (month== `june` ||  month==`july` || month==`August` ) {
    console.log(`The season is Summer.`);
} else {
    console.log(`Enter the month properly`);
}