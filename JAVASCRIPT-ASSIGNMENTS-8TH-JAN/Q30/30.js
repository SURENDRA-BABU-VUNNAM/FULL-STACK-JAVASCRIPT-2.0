let num1 = prompt(`enter your number:`);
num1= parseFloat(num1)
let oper= prompt(`enter your operation:`);
let num2 = prompt(`enter another number:`);
num2= parseFloat(num2);

let result = 0;

if (oper === `+`) {
    result = num1+num2;
}else if(oper === `-`){
    result = num1-num2;
}else if(oper === `*`){
    result = num1*num2;
}else if (oper=== `/`) {
    result = num1/num2
}
