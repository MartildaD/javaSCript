const prompt = require("prompt-sync")();

let number;

while (true) {
    number = Number(prompt("Input a number: ")); 
    
    if (Number.isNaN(number)) {
        console.log("Enter a valid number. Try again.");
    } else {
       
        break; 
    }
}

for (let index = 1; index <= 12; index++) {
    let multiplication = number * index;
    console.log(number + " x " + index + " = " + multiplication);
}

