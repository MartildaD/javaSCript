console.log("1\t 2\t 3\t 4\t 5\t 6\t 7\t 8\t 9\t 10\t 11\t 12");
console.log("--------------------------------------------------------------------------------------------");


for (let number = 1; number <= 12; number++) {
    for (let numbers = 1; numbers <= 12; numbers++) {
       
        process.stdout.write((number * numbers) + " \t ");
    }
  
    console.log();
}



