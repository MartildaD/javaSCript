const prompt = require("prompt-sync")();

let number = Number(prompt("Input a number :"));

    let sum = 0;
    let digits = String(number);

    for (let index = 0; index < digits.length; index++) {
    if (digits[index] == "-") {
    continue;
    }
       let digit = Number(digits[index]);
       
       if(index == 1 && digits[0] == "-"){
          digit = -digit;
}
    if (number === 0) {
        console.log(0);
    } else if (number % 9 === 0) {
        console.log(9);
    } else {
        console.log(number % 9);
    }
}



/*
function AddDigits(number) {
 
    let sum = 0;
    let digits = String(number);

    for (let index = 0; index < digits.length; index++) {
    if (digits[index] == "-") {
    continue;
    }
       let digit = Number(digits[index]);
       
       if(index == 1 && digits[0] == "-"){
          digit = -digit;
    }
    sum+=digit;
    }
    return sum%9
  
}
 
console.log(AddDigits(-111));*/
