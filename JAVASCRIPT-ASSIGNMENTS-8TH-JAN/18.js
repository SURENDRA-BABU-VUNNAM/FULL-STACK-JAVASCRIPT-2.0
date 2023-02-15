let month = prompt(`Enter your month`);
let year = prompt(`Enter the year`)

month = month.toLowerCase().trim();
year = parseFloat(year)

if (month == `february` && year%4==0) {
    if (year%100 !== 0 ) {
        console.log(`There are 29 days in ${month}`);
    }else if (year%400 == 0) {
        console.log(`There are 29 days in ${month}`);
    }else{
        console.log(`There are 28 days in ${month}`);
    }
}
else if (month == `january`|| month ==`march`|| month ==`may`|| month ==`july`|| month ==`september`|| month ==`october` || month ==`december`) {
    console.log(`There are 31 days in ${month}`);
}else if (month == `april`||  month ==`june` ||  month ==`august`|| month ==`november`){
    console.log(`there are 30 days in ${month}`);
}else{
    console.log(`Enter the month properly`);
}