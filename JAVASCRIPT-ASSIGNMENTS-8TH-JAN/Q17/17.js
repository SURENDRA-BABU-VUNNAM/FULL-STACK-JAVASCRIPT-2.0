let month = prompt(`Enter your month`);
month = month.toLowerCase().trim();

if (month == `february`){
    console.log(`There are 28 days in ${month}`);
} else if (month == `january`|| month ==`march`|| month ==`may`|| month ==`july`|| month ==`september`|| month ==`october` || month ==`december`) {
    console.log(`There are 31 days in ${month}`);
}else if (month == `april`||  month ==`june` ||  month ==`august`|| month ==`november`){
    console.log(`there are 30 days in ${month}`);
}else{
    console.log(`Enter the month properly`);
}