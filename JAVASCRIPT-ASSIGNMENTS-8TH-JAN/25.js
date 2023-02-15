function bmi(weight,height) {
  let bmi =   weight/(height*height)
  if (bmi<18.5) {
    console.log(`your bmi is ${bmi}, you are under-weight `);
  } else if (bmi>18.5 && bmi<24.9) {
    console.log(`your bmi is ${bmi}, you are weight is normal`);
  } else if (bmi>25 && bmi<29.9) {
    console.log(`your bmi is ${bmi}, you are over-weight`);
  }
}

bmi(57,1.7);
