


const prompt = require("prompt-sync")();

while (true) {
    let number = Number(prompt("Input a number : ")); 

    if (number === 0) {
        console.log("Goodbye!");
        break; 
    }

    if (Number.isNaN(number)) {
        console.log("enter a valid number");
    } else {
        for (let count = 1; count <= number; count++) {
            if (count % 2 == 0) {
                console.log("# # # #");
            } else {
                console.log(" # # # #");
            }
        } 
    }
}

