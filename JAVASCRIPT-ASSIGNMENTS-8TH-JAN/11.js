let date =new Date();
let year = date.getFullYear();
console.log(year);

let month = date.getMonth();
console.log(month+1);

let today = date.getDate();
console.log(today);

let day = date.getDay();
console.log(day);

let hr = date.getHours();
console.log(hr);

let min = date.getMinutes();
console.log(min);

let sec = Math.round(Date.now() / 1000)
console.log(sec);