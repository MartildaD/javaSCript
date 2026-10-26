let number = [2,7,11,15,6,3,4,8];


for(let index = 0; index <= number.length; index++){

    for(let count = index + 1; count <= number.length; count++){

        if(number[index] + number[count] == 9){
console.log([index, count]);

}
}
}


