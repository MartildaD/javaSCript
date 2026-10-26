const prompt = require("prompt-sync")();

while (true) {
let number = Number(prompt("Input a number: ")); 

if(Number.isNaN(number)){
        console.log("enter a valid number between 1 to 20")

  } else if (number > 20) { 
        console.log("Number cannot be more than 20. oga leave here.");
    } else if (number <= 0) {

}else{

    for(let count = 1; count <= number; count++){
	    if(count % 2 == 0){
		    console.log("# # # #");
	    } else {
		    console.log(" # # # #");
	    }
        }
        break;
}
}





