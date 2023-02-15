
let start = prompt(`enter start to start the caluculator:`)
start = start.toLowerCase()
let num1
let result = 0;
if (start === `start`) {

while (num1 !== `end`) {  
    let num1 = prompt(`enter your number:`);
    let oper= prompt(`enter your operation:`);
    // let num2 = prompt(`enter another number:`);
    // num2= parseFloat(num2);
    if (num1 !== `end`|| oper !==`end`) {
        num1= parseFloat(num1)
        if (oper === `+`) {
            result = result+num1;
        }else if(oper === `-`){
            result = result-num1;
        }else if(oper === `*`){
            result = result*num1;
        }else if (oper=== `/`) {
            result = result/num1
        }
    }else{
        break
    }
}
}

console.log(result);
