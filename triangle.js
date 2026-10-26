
const size = 10;

        for (let row = 1; row <= size; row++) {
        for (let column = 1; column <= row; column++) {
                process.stdout.write("*");
            }

            for (let space = row; space <= size; space++) {
               process.stdout.write(" ");
            }

       
            for (let column = row; column <= size; column++) {
                process.stdout.write("*");
            }

            for (let space = 1; space <= size; space++) {
                process.stdout.write(" ");
            }

         
            for (let column = 1; column <= row; column++) {
               process.stdout.write("*");
            }

     
            for (let space = 1; space <= size; space++) {
                process.stdout.write(" ");
            }

            for (let column = 1; column <= row; column++) {
               process.stdout.write("*");
            }

           console.log();
        }
    















































































