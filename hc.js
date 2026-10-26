const prompt = require("prompt-sync")();

while(true){

    let numberone = Number(prompt("Input a number or -1 to end:"));
    if (numberone == -1) break;

    let numbertwo = Number(prompt("Input a number or -1 to end:"));
    if (numbertwo == -1) break;

    while (numbertwo != 0) {
        let hcf = numberone % numbertwo;
        numberone = numbertwo;
        numbertwo = hcf;

}
    console.log("Hcf is: " + numberone);
}
    console.log("Goodbye");





