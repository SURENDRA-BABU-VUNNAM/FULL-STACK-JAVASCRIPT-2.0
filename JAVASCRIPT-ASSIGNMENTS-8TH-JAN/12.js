let date =new Date();

let year = new Date().toLocaleDateString(`en-us`,{year:`numeric`});
let month = new Date().toLocaleDateString("en-us",{month:`numeric`});
let day = new Date().toLocaleDateString(`en-us`,{day:`numeric`});

let hour 

if (date.getHours() > 12) {
    hour = date.getHours()%12;
} else{
    hour = date.getHours();
}

let minute = date.getMinutes();

let dt1 = `${year}-${month}-${day} ${hour}:${minute}`
console.log(dt1);

let dt2 = `${day}-${month}-${year} ${hour}:${minute}`
console.log(dt2);

let dt3 = `${day}/${month}/${year} ${hour}:${minute}`
console.log(dt3);

