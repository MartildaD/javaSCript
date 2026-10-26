const prompt = require("prompt-sync")();

while (true) {
let number = Number(prompt("Input a number: ")); 
if(Number.isNaN(number)){
        console.log("enter a valid number")
}else{
    for (let index = 1; index <= 12; index++) {
  
    let multiplication = number * index;
    
    console.log(number + "x" + index + "=" + multiplication);


}
    break; 
}
}


