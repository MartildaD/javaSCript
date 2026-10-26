/*const prompt = require("prompt-sync")();

while (true) {
  
    let numberone = Number(prompt("Input the first number (or -1 to end): "));
    if (numberone === -1) break;

    let numbertwo = Number(prompt("Input the second number (or -1 to end): "));
    if (numbertwo === -1) break;

    
    let hcf = (numberone < numbertwo) ? numberone : numbertwo;

    
    while (hcf > 0) {
        if (numberone % hcf === 0 && numbertwo % hcf === 0) {
            console.log("HCF is: " + hcf);
            break; 
        }
        hcf--;
    }
    
}

console.log("Goodbye.");



const prompt = require("prompt-sync")();

while (true) {
    let numberone = Number(prompt("Input the first number (or -1 to end): "));
    if (numberone === -1) break;

    let numbertwo = Number(prompt("Input the second number (or -1 to end): "));
    if (numbertwo === -1) break;


    while (numbertwo !== 0) {
        let hcf = numberone % numbertwo;
        numberone = numbertwo;
        numbertwo = hcf;
    }

   
    console.log("HCF is: " + numberone);
}

console.log("Goodbye.");
*/




const prompt = require("prompt-sync")();

while (true) {
    let numbers = [];
    console.log("--- Enter your numbers (Enter -1 when you are finished entering numbers) ---");

 
    while (true) {
        let input = Number(prompt(`Enter number #${numbers.length + 1} (or -1 to finish this set): `));
        
        if (input === -1) {
            break; 
        }
        
        if (!isNaN(input) && input > 0) {
            numbers.push(input);
        } else {
            console.log("❌ Please enter a valid positive number.");
        }
    }

 
    if (numbers.length === 0) {
        break;
    }

   
    let finalHcf = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let a = finalHcf;
        let b = numbers[i];

        while (b !== 0) {
            let remainder = a % b;
            a = b;
            b = remainder;
        }
        
        finalHcf = a; 
    }

    console.log("✅ The HCF of [" + numbers.join(", ") + "] is: " + finalHcf);
    console.log("---------------------------------------------------------");
}

console.log("Goodbye.");


